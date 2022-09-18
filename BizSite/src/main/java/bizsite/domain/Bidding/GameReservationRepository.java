package bizsite.domain.Bidding;
import java.util.Optional;
//import java.util.Collection;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(
    collectionResourceRel = "gameReservation",
    path = "gameReservation"
)
public interface GameReservationRepository
    extends PagingAndSortingRepository<GameReservation, Long> {

        Optional<GameReservation> findByGameReservationId(String gameReservationId);
        Optional<GameReservation> findByReservationStatus(String reservationStatus);
    }



