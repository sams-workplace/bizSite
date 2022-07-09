package bizsite.domain;

import bizsite.domain.*;
import bizsite.infra.AbstractEvent;
import java.util.Date;
import lombok.Data;

@Data
public class BizSiteRemoved extends AbstractEvent {

    private Long id;

    public BizSiteRemoved(BizSiteMng aggregate) {
        super(aggregate);
    }

    public BizSiteRemoved() {
        super();
    }
    // keep

}
