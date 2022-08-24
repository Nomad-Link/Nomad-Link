package NomadLink.WebService;

import NomadLink.WebService.domain.enterprise.Enterprise;
import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.EnterpriseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
@Slf4j
public class EnterpriseAndNoticeDataInit {

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
            //== Enterprise1 start ==//
            Notice notice1 = createNotice("바이오커넥트1", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice1);

            TechStack notice1TechStack1 = createTechStack("Spring boot");
            em.persist(notice1TechStack1);
            TechStack notice1TechStack2 = createTechStack("Spring");
            em.persist(notice1TechStack2);
            TechStack notice1TechStack3 = createTechStack("Java");
            em.persist(notice1TechStack3);
            TechStack notice1TechStack4 = createTechStack("Mybatis");
            em.persist(notice1TechStack4);

            notice1.setTechStack(notice1TechStack1);
            notice1.setTechStack(notice1TechStack2);
            notice1.setTechStack(notice1TechStack3);
            notice1.setTechStack(notice1TechStack4);
            //== Enterprise1 end ==//

            //== Enterprise2 start ==//
            Notice notice2 = createNotice("바이오커넥트2", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice2);

            TechStack notice2TechStack1 = createTechStack("Spring boot");
            em.persist(notice2TechStack1);
            TechStack notice2TechStack2 = createTechStack("Spring");
            em.persist(notice2TechStack2);
            TechStack notice2TechStack3 = createTechStack("Java");
            em.persist(notice2TechStack3);
            TechStack notice2TechStack4 = createTechStack("Mybatis");
            em.persist(notice2TechStack4);
            TechStack notice2TechStack5 = createTechStack("Jpa");
            em.persist(notice2TechStack5);
            TechStack notice2TechStack6 = createTechStack("Thymeleaf");
            em.persist(notice2TechStack6);

            notice2.setTechStack(notice2TechStack1);
            notice2.setTechStack(notice2TechStack2);
            notice2.setTechStack(notice2TechStack3);
            notice2.setTechStack(notice2TechStack4);
            notice2.setTechStack(notice2TechStack5);
            notice2.setTechStack(notice2TechStack6);
            //== Enterprise2 end ==//

            //== Enterprise3 start ==//
            Notice notice3 = createNotice("바이오커넥트3", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice3);

            TechStack notice3TechStack1 = createTechStack("Spring boot");
            em.persist(notice3TechStack1);
            TechStack notice3TechStack2 = createTechStack("Spring");
            em.persist(notice3TechStack2);
            TechStack notice3TechStack3 = createTechStack("Java");
            em.persist(notice3TechStack3);
            TechStack notice3TechStack4 = createTechStack("Mybatis");
            em.persist(notice3TechStack4);

            notice3.setTechStack(notice3TechStack1);
            notice3.setTechStack(notice3TechStack2);
            notice3.setTechStack(notice3TechStack3);
            notice3.setTechStack(notice3TechStack4);
            //== Enterprise3 end ==//

            //== Enterprise4 start ==//
            Notice notice4 = createNotice("바이오커넥트4", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice4);

            TechStack notice4TechStack1 = createTechStack("Spring boot");
            em.persist(notice4TechStack1);
            TechStack notice4TechStack2 = createTechStack("Spring");
            em.persist(notice4TechStack2);
            TechStack notice4TechStack3 = createTechStack("Java");
            em.persist(notice4TechStack3);
            TechStack notice4TechStack4 = createTechStack("Mybatis");
            em.persist(notice4TechStack4);
            TechStack notice4TechStack5 = createTechStack("Docker");
            em.persist(notice4TechStack5);
            TechStack notice4TechStack6 = createTechStack("K8s");
            em.persist(notice4TechStack6);
            TechStack notice4TechStack7 = createTechStack("Jenkins");
            em.persist(notice4TechStack7);

            notice4.setTechStack(notice4TechStack1);
            notice4.setTechStack(notice4TechStack2);
            notice4.setTechStack(notice4TechStack3);
            notice4.setTechStack(notice4TechStack4);
            notice4.setTechStack(notice4TechStack5);
            notice4.setTechStack(notice4TechStack6);
            notice4.setTechStack(notice4TechStack7);
            //== Enterprise4 end ==//
        }

        private Notice createNotice(String enterpriseName, String enterpriseLocation, String title, String textContent, Annual annual, EmployeeType employeeType, Role role) {
            Notice notice = new Notice();
            notice.setEnterpriseName(enterpriseName);
            notice.setEnterpriseLocation(enterpriseLocation);
            notice.setTitle(title);
            notice.setTextContent(textContent);
            notice.setAnnual(annual);
            notice.setEmployeeType(employeeType);
            notice.setRole(role);

            return notice;
        }

        private TechStack createTechStack(String techName) {
            TechStack techStack = new TechStack();
            techStack.setTechName(techName);

            return techStack;
        }

    }

}
