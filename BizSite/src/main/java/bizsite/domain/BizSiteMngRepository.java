package bizsite.domain;

import bizsite.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(
    collectionResourceRel = "bizSiteMngs",
    path = "bizSiteMngs"
)
public interface BizSiteMngRepository
    extends PagingAndSortingRepository<BizSiteMng, Long> {}
