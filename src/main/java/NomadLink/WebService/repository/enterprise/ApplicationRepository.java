package NomadLink.WebService.repository.enterprise;

import NomadLink.WebService.domain.enterprise.Application;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class ApplicationRepository {

    private final EntityManager em;

    public void saveApplication(Application application) {
        em.persist(application);
    }

}
