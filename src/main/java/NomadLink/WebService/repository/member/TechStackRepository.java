package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.member.TechStack;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class TechStackRepository { // 기술 스택 관련 DAO

    private final EntityManager em;

    public void save(TechStack techStack) {
        em.persist(techStack);
    }

}
