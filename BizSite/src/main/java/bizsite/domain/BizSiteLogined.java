package bizsite.domain;

import bizsite.domain.*;
import bizsite.infra.AbstractEvent;
import java.util.Date;
import lombok.Data;

@Data
public class BizSiteLogined extends AbstractEvent {

    private Long id;
    private String bizSiteId;
    private String bizSitePassword;
    
    public BizSiteLogined(BizSiteMng aggregate) {
        super(aggregate);
    }

    public BizSiteLogined() {
        super();
    }
    // keep

}
