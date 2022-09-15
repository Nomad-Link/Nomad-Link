package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.enterprise.Application;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ApplicationRepository { // 구인글 지원을 위한 application 엔티티의 DAO

    private final EntityManager em;

    public void saveApplication(Application application) {
        em.persist(application);
    }

    public List<Application> findApplicationsByMember(Long memberId) {
        return em.createQuery("select a from Application a" +
                                    " join fetch a.member m" +
                                    " where m.id = :memberId", Application.class)
                .setParameter("memberId", memberId)
                .getResultList();
    }

}
