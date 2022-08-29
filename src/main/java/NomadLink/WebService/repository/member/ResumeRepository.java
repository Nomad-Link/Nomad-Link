package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.member.Resume;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ResumeRepository {

    private final EntityManager em;

    public void save(Resume resume) {
        em.persist(resume);
    }

    public Resume findOne(long userId) {
        return em.createQuery("select r from Resume r" +
                                        " join fetch r.member m where m.userId = :userId", Resume.class)
                .setParameter("userId", userId)
                .getSingleResult();
    }

    public List<Resume> findAll() {
        return em.createQuery("select r from Resume r", Resume.class)
                .getResultList();
    }

}
