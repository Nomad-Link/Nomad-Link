package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.member.TechStack;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class TechStackRepository {

    private final EntityManager em;

    public void save(TechStack techStack) {
        em.persist(techStack);
    }

}
