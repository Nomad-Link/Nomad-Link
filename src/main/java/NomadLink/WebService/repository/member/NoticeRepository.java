package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.enterprise.Enterprise;
import NomadLink.WebService.domain.enterprise.Notice;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
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

//    public List<Notice> findWithMember() {
//        return em.createQuery()
//    }

}
