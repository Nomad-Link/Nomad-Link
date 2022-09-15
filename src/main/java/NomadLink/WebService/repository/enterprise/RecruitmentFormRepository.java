package NomadLink.WebService.repository.enterprise;

import NomadLink.WebService.domain.enterprise.RecruitmentForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class RecruitmentFormRepository { // 개발자 구인 폼 등록을 위한 DAO

    private final EntityManager em;

    public void save(RecruitmentForm recruitmentForm) {
        em.persist(recruitmentForm);
    }

}
