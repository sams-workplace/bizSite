package bizsite.domain;

import bizsite.BizSiteApplication;
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
    private String bizSiteNo;
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

    public static BizSiteMngRepository repository() {
        BizSiteMngRepository bizSiteMngRepository = BizSiteApplication.applicationContext.getBean(
            BizSiteMngRepository.class
        );
        return bizSiteMngRepository;
    }

    // 업데이트 후 kafka message 생성(publish)
    @PostUpdate
    public void onPostUpdate() {

        // status 진행상태 정의
        // 01 : 등록요청
        // 02 : 등록승인
        // 03 : 등록거부
        // 05 : 삭제요청
        // 06 : 삭제승인
        // 07 : 삭제거부

        // 02 : 등록승인 - 사용자 알림
        if( "02".equals( getStatus() ) ){
            RequestApproved requestApproved = new RequestApproved();
            BeanUtils.copyProperties(this, requestApproved);
            requestApproved.publish();
            }
        // 03 : 등록거부 - 사용자 알림
        if( "03".equals( getStatus() ) ){
            RequestCanceled requestCanceled = new RequestCanceled();
            BeanUtils.copyProperties(this, requestCanceled);
            requestCanceled.publish();
        }
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


    public String getBizSiteNo() {
        return this.bizSiteNo;
    }
    public void setBizSiteNo(String bizSiteNo) {
        this.bizSiteNo = bizSiteNo;
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
