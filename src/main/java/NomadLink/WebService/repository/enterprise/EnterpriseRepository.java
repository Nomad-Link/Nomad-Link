package NomadLink.WebService.repository.enterprise;

import NomadLink.WebService.domain.enterprise.Enterprise;
import NomadLink.WebService.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class EnterpriseRepository {

    private final EntityManager em;

    public void save(Enterprise enterprise) {
        em.persist(enterprise);
    }

    public Enterprise findOne(Long id) {
        return em.find(Enterprise.class, id);
    }

    public List<Enterprise> findByName(String enterpriseName) {
        return em.createQuery("select e from Enterprise e where e.enterpriseName = :enterpriseName", Enterprise.class)
                .setParameter("enterpriseName", enterpriseName)
                .getResultList();
    }

    public List<Enterprise> findAll() {
        return em.createQuery("select e from Enterprise e", Enterprise.class)
                .getResultList();
    }

}
