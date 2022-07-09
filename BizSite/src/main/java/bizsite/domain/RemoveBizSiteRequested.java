package bizsite.domain;

import bizsite.domain.*;
import bizsite.infra.AbstractEvent;
import java.util.Date;
import lombok.Data;

@Data
public class RemoveBizSiteRequested extends AbstractEvent {

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
  
    public RemoveBizSiteRequested(BizSiteMng aggregate) {
        super(aggregate);
    }

    public RemoveBizSiteRequested() {
        super();
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
