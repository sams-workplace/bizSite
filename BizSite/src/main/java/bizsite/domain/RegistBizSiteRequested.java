package bizsite.domain;

import bizsite.infra.AbstractEvent;
import lombok.Data;

@Data
public class RegistBizSiteRequested extends AbstractEvent {

    private Long id;
    private String bizSiteName;
    private String bizSiteNo;
    private String bizSiteId;
    private String bizSitePassword;
    private String bizSiteLocation;
    private String bizSitePhoneNum;
    private String settleAccountNo;
    private String status;
    // 필드추가
    private String delFlag;
    private String statusDesc;
    private String stateChngDttm;

    public RegistBizSiteRequested(BizSiteMng aggregate) {
        super(aggregate);
    }

    public RegistBizSiteRequested() {
        super();
    }

    public Long getId() {
    	return this.id;
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

    public String getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(String delFlag) {
        this.delFlag = delFlag;
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
}
