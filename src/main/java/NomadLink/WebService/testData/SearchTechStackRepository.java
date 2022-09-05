package NomadLink.WebService.testData;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class SearchTechStackRepository {

    private final EntityManager em;

    public List<SearchTechStack> findAll() {
        return em.createQuery("select t from SearchTechStack t", SearchTechStack.class)
                .getResultList();
    }

}
