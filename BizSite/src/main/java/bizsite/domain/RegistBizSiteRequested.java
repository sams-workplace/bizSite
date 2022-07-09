package bizsite.domain;

import bizsite.infra.AbstractEvent;
import lombok.Data;

@Data
public class RegistBizSiteRequested extends AbstractEvent {

    private Long id;
    private String bizSiteName;
    private String bizSiteId;
    private String bizSitePassword;
    private String bizSiteLocation;
    private String bizSitePhoneNum;
    private String settleAccountNo;
    private String status;
    private Long bizSiteRequestId;
    
    public RegistBizSiteRequested(BizSiteMng aggregate) {
        super(aggregate);
    }

    public RegistBizSiteRequested() {
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

    public Long getBizSiteRequestId() {
        return bizSiteRequestId;
    }

    public void setBizSiteRequestId(Long bizSiteRequestId) {
        this.bizSiteRequestId = bizSiteRequestId;
    }


}
