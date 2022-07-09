package bizsite.domain;

import bizsite.BizSiteApplication;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.*;

import org.springframework.beans.BeanUtils;

import lombok.Data;

@Entity
@Table(name = "BizSiteMng_table")
@Data
public class BizSiteMng {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String bizSiteName;
    private String bizSiteId;
    private String bizSitePassword;
    private String bizSiteLocation;
    private String bizSitePhoneNum;
    private String settleAccountNo;
    private String status;
    private String statusDesc;
    private String stateChngDttm;
    private Boolean delFlag;
    private String authProcId;
    private String authProcNm;
    private String authProcDttm;

    // 등록 후
    @PostPersist
    public void onPostPersist() {

        // status 진행상태 정의
        // 01 : 등록요청
        // 02 : 등록승인 ( 승인 후 바로 등록처리 되나 등록시 문제가 발생할 수 있기 때문에 상태 분리 )
        // 03 : 등록거부
        // 04 : 등록완료
        // 05 : 삭제요청
        // 06 : 삭제승인 ( 승인 후 바로 삭제처리 되나 등록시 문제가 발생할 수 있기 때문에 상태 분리 )
        // 07 : 삭제거부
        // 08 : 삭제완료 ( 삭제 플레그 관리 )
        // 09 : 수정완료
        // 10 : 로그인 ( 회원관리로 통합, 사업장 관리와 맞지 않음 )

        // 01 : 등록요청
        if( "01".equals( getStatus() ) ){
            RegistBizSiteRequested registBizSiteRequested = new RegistBizSiteRequested();
            BeanUtils.copyProperties(this, registBizSiteRequested);
            registBizSiteRequested.setBizSiteRequestId( getId() );
            registBizSiteRequested.publishAfterCommit();           
        }
    }

    // 업데이트 전
    @PreUpdate    
    public void onPreUpdate() {
        
        // 02 : 등록승인
        // 03 : 등록거부
        // 05 : 삭제요청
        // 06 : 삭제승인
        // 07 : 삭제거부
        // 09 : 수정완료        
        if( "02".equals( getStatus() ) || 
            "03".equals( getStatus() ) || 
            "05".equals( getStatus() ) || 
            "06".equals( getStatus() ) || 
            "07".equals( getStatus() ) ||
            "09".equals( getStatus() )){

            Date today = new Date();
            SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String dttm = date.format(today);

            // 02 : 등록승인
            if( "02".equals( getStatus() ) ){ 
                RequestApproved requestApproved = new RequestApproved();  
                BeanUtils.copyProperties(this, requestApproved);
                requestApproved.setStateChngDttm( dttm );
                requestApproved.setAuthProcDttm( dttm );
                requestApproved.setBizSiteRequestId( getId() );
                requestApproved.setDelFlag(false);
                requestApproved.setStatus("04");
                requestApproved.setStatusDesc("등록완료");
                approveRegist(requestApproved); 
            }

            // 03 : 등록거부
            else if( "03".equals( getStatus() ) ){ 
                this.setStateChngDttm( dttm );
                this.setAuthProcDttm( dttm );
                this.setDelFlag(false);
                this.setStatus("03");
                this.setStatusDesc("등록거부");
            }

            // 05 : 삭제요청
            else if( "05".equals( getStatus() ) ){ 
                this.setStateChngDttm( dttm );
                //this.setAuthProcDttm( dttm );
                this.setDelFlag(false);
                this.setStatus("05");
                this.setStatusDesc("삭제요청");
            }
            
            // 06 : 삭제승인
            else if( "06".equals( getStatus() ) ){ 
                RequestCanceled requestRemoved = new RequestCanceled();  
                BeanUtils.copyProperties(this, requestRemoved);
                requestRemoved.setStateChngDttm( dttm );
                requestRemoved.setAuthProcDttm( dttm );
                requestRemoved.setBizSiteRequestId( getId() );
                requestRemoved.setDelFlag(true);
                requestRemoved.setStatus("08");
                requestRemoved.setStatusDesc("삭제완료");
                approveRemove(requestRemoved);
            }

            // 07 : 삭제거부
            else if( "07".equals( getStatus() ) ){ 
                this.setStateChngDttm( dttm );
                this.setAuthProcDttm( dttm );
                this.setDelFlag(false);
                this.setStatus("07");
                this.setStatusDesc("삭제거부");
            }

            // 09 : 수정완료
            else if( "09".equals( getStatus() ) ){ 
                this.setStateChngDttm( dttm );
                //this.setAuthProcDttm( dttm );
                this.setDelFlag(false);
                this.setStatus("09");
                this.setStatusDesc("수정완료");
            }
        }
    }

    public static BizSiteMngRepository repository() {
        BizSiteMngRepository bizSiteMngRepository = BizSiteApplication.applicationContext.getBean(
            BizSiteMngRepository.class
        );
        return bizSiteMngRepository;
    }

    // 업데이트 후 kafka message 생성(publish)
    @PostUpdate    
    public void onPostUpdate() {
        // 03 : 등록거부 - 사용자 알림
        if( "03".equals( getStatus() ) ){
            RequestCanceled requestCanceled = new RequestCanceled();
            BeanUtils.copyProperties(this, requestCanceled);
            requestCanceled.publish();    
        }   
        // 04 : 등록완료 - 사용자 알림
        else if( "04".equals( getStatus() ) ){
           BizSiteRegistered bizSiteRegistered = new BizSiteRegistered();
           BeanUtils.copyProperties(this, bizSiteRegistered);
           bizSiteRegistered.publish();    
        }   
        // 05 : 삭제요청 - 관리자 알림
        else if( "05".equals( getStatus() ) ){
            RemoveBizSiteRequested removeBizSiteRequested = new RemoveBizSiteRequested();
            BeanUtils.copyProperties(this, removeBizSiteRequested);
            removeBizSiteRequested.publish();    
        }   
        // 07 : 삭제거부 - 사용자 알림
        // ( 등록거부와 동일하며, status 에 따라 등록거부, 삭제거부 여부 판단 )
        else if( "07".equals( getStatus() ) ){
            RequestCanceled requestCanceled = new RequestCanceled();
            BeanUtils.copyProperties(this, requestCanceled);
            requestCanceled.publish();    
        }  
        // 08 : 삭제완료 - 사용자 알림
        else if( "08".equals( getStatus() ) ){
           BizSiteRemoved bizSiteRemoved = new BizSiteRemoved();
           BeanUtils.copyProperties(this, bizSiteRemoved);
           bizSiteRemoved.publish();    
        }   
        // 09 : 수정완료 - 사용자 알림
        else if( "09".equals( getStatus() ) ){
            BizSiteUpdated bizSiteUpdated = new BizSiteUpdated();
            BeanUtils.copyProperties(this, bizSiteUpdated);
            bizSiteUpdated.publish();    
            }   
    }

    // 등록정보 저장
    public static void approveRegist(RequestApproved requestApproved) {

        BizSiteMng bizSiteMng = new BizSiteMng();
        BeanUtils.copyProperties(requestApproved, bizSiteMng);
        repository().save(bizSiteMng);
    }

    // 삭제정보 저장
    public static void approveRemove(RequestCanceled requestCanceled) {

        BizSiteMng bizSiteMng = new BizSiteMng();
        BeanUtils.copyProperties(requestCanceled, bizSiteMng);
        repository().save(bizSiteMng);  
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBizSiteName() {
        return bizSiteName;
    }

    public void setBizSiteName(String bizSiteName) {
        this.bizSiteName = bizSiteName;
    }

    public String getBizSiteId() {
        return bizSiteId;
    }

    public void setBizSiteId(String bizSiteId) {
        this.bizSiteId = bizSiteId;
    }

    public String getBizSitePassword() {
        return bizSitePassword;
    }

    public void setBizSitePassword(String bizSitePassword) {
        this.bizSitePassword = bizSitePassword;
    }

    public String getBizSiteLocation() {
        return bizSiteLocation;
    }

    public void setBizSiteLocation(String bizSiteLocation) {
        this.bizSiteLocation = bizSiteLocation;
    }

    public String getBizSitePhoneNum() {
        return bizSitePhoneNum;
    }

    public void setBizSitePhoneNum(String bizSitePhoneNum) {
        this.bizSitePhoneNum = bizSitePhoneNum;
    }

    public String getSettleAccountNo() {
        return settleAccountNo;
    }

    public void setSettleAccountNo(String settleAccountNo) {
        this.settleAccountNo = settleAccountNo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusDesc() {
        return statusDesc;
    }

    public void setStatusDesc(String statusDesc) {
        this.statusDesc = statusDesc;
    }

    public String getStateChngDttm() {
        return stateChngDttm;
    }

    public void setStateChngDttm(String stateChngDttm) {
        this.stateChngDttm = stateChngDttm;
    }

    public Boolean getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(Boolean delFlag) {
        this.delFlag = delFlag;
    }

    public String getAuthProcId() {
        return authProcId;
    }

    public void setAuthProcId(String authProcId) {
        this.authProcId = authProcId;
    }

    public String getAuthProcNm() {
        return authProcNm;
    }

    public void setAuthProcNm(String authProcNm) {
        this.authProcNm = authProcNm;
    }

    public String getAuthProcDttm() {
        return authProcDttm;
    }

    public void setAuthProcDttm(String authProcDttm) {
        this.authProcDttm = authProcDttm;
    }

}
