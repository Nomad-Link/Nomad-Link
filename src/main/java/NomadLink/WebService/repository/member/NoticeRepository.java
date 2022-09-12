package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.enterprise.Enterprise;
import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class NoticeRepository {

    private final EntityManager em;

    public void save(Notice notice) {
        em.persist(notice);
    }

    public Notice findOne(Long id) {
        return em.find(Notice.class, id);
    }

//    public Notice findByTitle(String title) {
//        return em.createQuery("select n from Notice n where n.title = :title", Notice.class)
//                .setParameter("title", title)
//                .getSingleResult();
//    }

    public List<Notice> findAll() {
        return em.createQuery("select n from Notice n", Notice.class)
                .getResultList();
    }

    public List<Notice> findSix() {
        List<Notice> notices = new ArrayList<>();

        notices.add(em.find(Notice.class, Long.valueOf(1)));
        notices.add(em.find(Notice.class, Long.valueOf(6)));
        notices.add(em.find(Notice.class, Long.valueOf(13)));
        notices.add(em.find(Notice.class, Long.valueOf(18)));
        notices.add(em.find(Notice.class, Long.valueOf(32)));
        notices.add(em.find(Notice.class, Long.valueOf(39)));

        return notices;
    }

    public List<Notice> findByOption(NoticeSearchOption noticeSearchOption) {
        String jpql = "select n from Notice n";
        boolean isFirstCondition = true;

        if (noticeSearchOption.getRole() != null) {
            if (isFirstCondition) {
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " n.role = :role";
        }

        if (noticeSearchOption.getEmployeeType() != null) {
            if (isFirstCondition) {
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " n.employeeType = :employeeType";
        }

        TypedQuery<Notice> query = em.createQuery(jpql, Notice.class).setMaxResults(1000);

        if (noticeSearchOption.getRole() != null) {
            query.setParameter("role", noticeSearchOption.getRole());
        }

        if (noticeSearchOption.getEmployeeType() != null) {
            query.setParameter("employeeType", noticeSearchOption.getEmployeeType());
        }

        return query.getResultList();
    }

//    public List<Notice> findWithMember() {
//        return em.createQuery()
//    }

}
