package bizsite.infra;

import bizsite.config.kafka.KafkaProcessor;
import bizsite.domain.*;
import bizsite.domain.Bidding.GameReservation;
import bizsite.domain.Bidding.ReservationConfirmed;
import bizsite.domain.Bidding.ReservationRequested;

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

    // 경매요청 내역 수신
    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverReservationRequested_ApproveRegist(
        @Payload ReservationRequested reservationRequested
    ) {
        if (!reservationRequested.validate()) return;
        ReservationRequested event = reservationRequested;
        System.out.println(
            "\n\n##### listener ReservationRequested : \n" +
            reservationRequested.toJson() +
            "\n\n"
        );

        GameReservation.approveRegist(event);
    }

    // 경매결과 수신
    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverReservationCinfirmed_ApproveUpdate(
        @Payload ReservationConfirmed reservationConfirmed
    ) {
        if (!reservationConfirmed.validate()) return;
        ReservationConfirmed event = reservationConfirmed;
        System.out.println(
            "\n\n##### listener ApproveRemove : " +
            reservationConfirmed.toJson() +
            "\n\n"
        );

        GameReservation.approveUpdate(event);
    }

}
