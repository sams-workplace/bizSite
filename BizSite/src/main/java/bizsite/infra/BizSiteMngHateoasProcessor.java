package bizsite.infra;

import bizsite.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class BizSiteMngHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<BizSiteMng>> {

    @Override
    public EntityModel<BizSiteMng> process(EntityModel<BizSiteMng> model) {
        return model;
    }
}
