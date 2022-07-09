package bizsite.domain;

import bizsite.domain.*;
import bizsite.infra.AbstractEvent;
import java.util.Date;
import lombok.Data;

@Data
public class AuthListSelected extends AbstractEvent {

    private Long id;

    public AuthListSelected(BizSiteMng aggregate) {
        super(aggregate);
    }

    public AuthListSelected() {
        super();
    }
    // keep

}
