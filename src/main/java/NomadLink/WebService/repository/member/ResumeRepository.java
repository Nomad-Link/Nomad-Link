package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.member.Resume;
import NomadLink.WebService.domain.member.TechStack;
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

    public Resume findOne(Long userId) {
        return em.createQuery("select r from Resume r" +
                                        " join fetch r.member m where m.id = :id", Resume.class)
                .setParameter("id", userId)
                .getSingleResult();
    }

    public List<Resume> findAll() {
        return em.createQuery("select r from Resume r", Resume.class)
                .getResultList();
    }

    public List<TechStack> findAllTechStacks(Long resumeId) {
        return em.createQuery("select t from TechStack t" +
                                     " join fetch t.resume r where r.id = :resumeId", TechStack.class)
                .setParameter("resumeId", resumeId)
                .getResultList();
    }

    public void deleteAllTechStacks(Long resumeId) {
        List<TechStack> allTechStacks = findAllTechStacks(resumeId);
        allTechStacks.stream()
                .forEach(t -> em.remove(t));
    }

}
