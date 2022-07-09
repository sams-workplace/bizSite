package bizsite.infra;

import bizsite.config.kafka.KafkaProcessor;
import bizsite.domain.*;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.naming.NameParser;
import javax.naming.NameParser;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PolicyHandler {

    @Autowired
    BizSiteMngRepository bizSiteMngRepository;

    @StreamListener(KafkaProcessor.INPUT)
    public void whatever(@Payload String eventString) {}

    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverRequestApproved_ApproveRegist(
        @Payload RequestApproved requestApproved
    ) {
        if (!requestApproved.validate()) return;
        RequestApproved event = requestApproved;
        System.out.println(
            "\n\n##### listener ApproveRegist : " +
            requestApproved.toJson() +
            "\n\n"
        );

        // Sample Logic //
        BizSiteMng.approveRegist(event);
    }

    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverRequestCanceled_ApproveRemove(
        @Payload RequestCanceled requestCanceled
    ) {
        if (!requestCanceled.validate()) return;
        RequestCanceled event = requestCanceled;
        System.out.println(
            "\n\n##### listener ApproveRemove : " +
            requestCanceled.toJson() +
            "\n\n"
        );

        // Sample Logic //
        BizSiteMng.approveRemove(event);
    }
    // keep

}
