package NomadLink.WebService.testData;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.Annual;
import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Role;
import NomadLink.WebService.domain.member.TechStack;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class SearchTechStackTestDataInit {

    private final InitService initService;

    @PostConstruct
    public void init() {
        initService.dbInit1();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;

        public void dbInit1() {
            SearchTechStack techStack1 = new SearchTechStack();
            techStack1.setTechName("Html");
            em.persist(techStack1);

            SearchTechStack techStack2 = new SearchTechStack();
            techStack2.setTechName("Css");
            em.persist(techStack2);

            SearchTechStack techStack3 = new SearchTechStack();
            techStack3.setTechName("Javascript");
            em.persist(techStack3);

            SearchTechStack techStack4 = new SearchTechStack();
            techStack4.setTechName("React");
            em.persist(techStack4);

            SearchTechStack techStack5 = new SearchTechStack();
            techStack5.setTechName("Vue");
            em.persist(techStack5);

            SearchTechStack techStack6 = new SearchTechStack();
            techStack6.setTechName("Angular");
            em.persist(techStack6);

            SearchTechStack techStack7 = new SearchTechStack();
            techStack7.setTechName("Django");
            em.persist(techStack7);

            SearchTechStack techStack8 = new SearchTechStack();
            techStack8.setTechName("Flask");
            em.persist(techStack8);

            SearchTechStack techStack9 = new SearchTechStack();
            techStack9.setTechName("Java");
            em.persist(techStack9);

            SearchTechStack techStack10 = new SearchTechStack();
            techStack10.setTechName("Spring");
            em.persist(techStack10);

            SearchTechStack techStack11 = new SearchTechStack();
            techStack11.setTechName("Spring boot");
            em.persist(techStack11);

            SearchTechStack techStack12 = new SearchTechStack();
            techStack12.setTechName("Jpa");
            em.persist(techStack12);

            SearchTechStack techStack13 = new SearchTechStack();
            techStack13.setTechName("Mybatis");
            em.persist(techStack13);

            SearchTechStack techStack14 = new SearchTechStack();
            techStack14.setTechName("Querydsl");
            em.persist(techStack14);

            SearchTechStack techStack15 = new SearchTechStack();
            techStack15.setTechName("Spring data jpa");
            em.persist(techStack15);

            SearchTechStack techStack16 = new SearchTechStack();
            techStack16.setTechName("Docker");
            em.persist(techStack16);

            SearchTechStack techStack17 = new SearchTechStack();
            techStack17.setTechName("Kubernetes");
            em.persist(techStack17);

            SearchTechStack techStack18 = new SearchTechStack();
            techStack18.setTechName("Jenkins");
            em.persist(techStack18);
        }

    }

}