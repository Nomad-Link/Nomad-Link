package NomadLink.WebService.repository;

import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.domain.member.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Member findOne(Long id) {
        return em.find(Member.class, id);
    }

    public List<Member> findByName(String realName) {
        return em.createQuery("select m from Member m where m.realName = :realName", Member.class)
                .setParameter("realName", realName)
                .getResultList();
    }

    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    public List<Member> findByOption(EnterpriseSearchOption enterpriseSearchOption) {
        String jpql = "select distinct m from Member m join m.techStacks ts";
        boolean isFirstCondition = true;

        if (enterpriseSearchOption.getNation() != null) {
            if (isFirstCondition) {
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " m.nation = :nation";
        }

        if (enterpriseSearchOption.getEmployeeType() != null) {
            if (isFirstCondition) {
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " m.employeeType = :employeeType";
        }

        if (StringUtils.hasText(enterpriseSearchOption.getTechStack())) {
            if (isFirstCondition) {
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " ts.techName like :techStack";
        }

        TypedQuery<Member> query = em.createQuery(jpql, Member.class).setMaxResults(1000);

        if (enterpriseSearchOption.getNation() != null) {
            query.setParameter("nation", enterpriseSearchOption.getNation());
        }

        if (enterpriseSearchOption.getEmployeeType() != null) {
            query.setParameter("employeeType", enterpriseSearchOption.getEmployeeType());
        }

        if (StringUtils.hasText(enterpriseSearchOption.getTechStack())) {
            query.setParameter("techStack", enterpriseSearchOption.getTechStack());
        }

        return query.getResultList();
    }

    public List<Member> findFourDevelopers() {
        List<Member> serverDevelopers = em.createQuery("select m from Member m where m.role = :role", Member.class)
                .setParameter("role", Role.SERVER)
                .getResultList();

        List<Member> frontendDevelopers = em.createQuery("select m from Member m where m.role = :role", Member.class)
                .setParameter("role", Role.FRONTEND)
                .getResultList();

        List<Member> androidDevelopers = em.createQuery("select m from Member m where m.role = :role", Member.class)
                .setParameter("role", Role.ANDROID)
                .getResultList();

        List<Member> iosDevelopers = em.createQuery("select m from Member m where m.role = :role", Member.class)
                .setParameter("role", Role.IOS)
                .getResultList();

        Member serverDeveloper = serverDevelopers.get(0);
        Member frontendDeveloper = frontendDevelopers.get(0);
        Member androidDeveloper = androidDevelopers.get(0);
        Member iosDeveloper = iosDevelopers.get(0);

        List<Member> collect = new ArrayList<>();
        collect.add(serverDeveloper);
        collect.add(frontendDeveloper);
        collect.add(androidDeveloper);
        collect.add(iosDeveloper);

        return collect;
    }

}
