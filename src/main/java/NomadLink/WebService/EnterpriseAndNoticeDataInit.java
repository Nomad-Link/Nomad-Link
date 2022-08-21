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
            Enterprise enterprise1 = createEnterprise("바이오커넥트1", "서초", "010-0000-0000", "test@gmail.com");
            em.persist(enterprise1);

            Notice enterprise1notice1 = createNotice("JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(enterprise1notice1);

            TechStack enterprise1TechStack1 = createTechStack("Spring boot");
            em.persist(enterprise1TechStack1);
            TechStack enterprise1TechStack2 = createTechStack("Spring");
            em.persist(enterprise1TechStack2);
            TechStack enterprise1TechStack3 = createTechStack("Java");
            em.persist(enterprise1TechStack3);
            TechStack enterprise1TechStack4 = createTechStack("Mybatis");
            em.persist(enterprise1TechStack4);

            enterprise1.setNotice(enterprise1notice1);
            enterprise1notice1.setTechStack(enterprise1TechStack1);
            enterprise1notice1.setTechStack(enterprise1TechStack2);
            enterprise1notice1.setTechStack(enterprise1TechStack3);
            enterprise1notice1.setTechStack(enterprise1TechStack4);
            //== Enterprise1 end ==//

            //== Enterprise2 start ==//
            Enterprise enterprise2 = createEnterprise("바이오커넥트2", "서초", "010-0000-0000", "test@gmail.com");
            em.persist(enterprise2);

            Notice enterprise2notice1 = createNotice("JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(enterprise2notice1);

            TechStack enterprise2TechStack1 = createTechStack("Spring boot");
            em.persist(enterprise2TechStack1);
            TechStack enterprise2TechStack2 = createTechStack("Spring");
            em.persist(enterprise2TechStack2);
            TechStack enterprise2TechStack3 = createTechStack("Java");
            em.persist(enterprise2TechStack3);
            TechStack enterprise2TechStack4 = createTechStack("Mybatis");
            em.persist(enterprise2TechStack4);

            enterprise2.setNotice(enterprise2notice1);
            enterprise2notice1.setTechStack(enterprise2TechStack1);
            enterprise2notice1.setTechStack(enterprise2TechStack2);
            enterprise2notice1.setTechStack(enterprise2TechStack3);
            enterprise2notice1.setTechStack(enterprise2TechStack4);
            //== Enterprise2 end ==//

            //== Enterprise3 start ==//
            Enterprise enterprise3 = createEnterprise("바이오커넥트3", "서초", "010-0000-0000", "test@gmail.com");
            em.persist(enterprise3);

            Notice enterprise3notice1 = createNotice("JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(enterprise3notice1);

            TechStack enterprise3TechStack1 = createTechStack("Spring boot");
            em.persist(enterprise3TechStack1);
            TechStack enterprise3TechStack2 = createTechStack("Spring");
            em.persist(enterprise3TechStack2);
            TechStack enterprise3TechStack3 = createTechStack("Java");
            em.persist(enterprise3TechStack3);
            TechStack enterprise3TechStack4 = createTechStack("Mybatis");
            em.persist(enterprise3TechStack4);

            enterprise3.setNotice(enterprise3notice1);
            enterprise3notice1.setTechStack(enterprise3TechStack1);
            enterprise3notice1.setTechStack(enterprise3TechStack2);
            enterprise3notice1.setTechStack(enterprise3TechStack3);
            enterprise3notice1.setTechStack(enterprise3TechStack4);
            //== Enterprise3 end ==//

            //== Enterprise4 start ==//
            Enterprise enterprise4 = createEnterprise("바이오커넥트4", "서초", "010-0000-0000", "test@gmail.com");
            em.persist(enterprise4);

            Notice enterprise4notice1 = createNotice("JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(enterprise4notice1);

            TechStack enterprise4TechStack1 = createTechStack("Spring boot");
            em.persist(enterprise4TechStack1);
            TechStack enterprise4TechStack2 = createTechStack("Spring");
            em.persist(enterprise4TechStack2);
            TechStack enterprise4TechStack3 = createTechStack("Java");
            em.persist(enterprise4TechStack3);
            TechStack enterprise4TechStack4 = createTechStack("Mybatis");
            em.persist(enterprise4TechStack4);

            enterprise4.setNotice(enterprise4notice1);
            enterprise4notice1.setTechStack(enterprise4TechStack1);
            enterprise4notice1.setTechStack(enterprise4TechStack2);
            enterprise4notice1.setTechStack(enterprise4TechStack3);
            enterprise4notice1.setTechStack(enterprise4TechStack4);
            //== Enterprise4 end ==//
        }

        private Enterprise createEnterprise(String enterpriseName, String enterpriseLocation, String managerPhoneNumber, String managerEmail) {
            Enterprise enterprise = new Enterprise();
            enterprise.setEnterpriseName(enterpriseName);
            enterprise.setEnterpriseLocation(enterpriseLocation);
            enterprise.setManagerPhoneNumber(managerPhoneNumber);
            enterprise.setManagerEmail(managerEmail);

            return enterprise;
        }

        private Notice createNotice(String title, String textContent, Annual annual, EmployeeType employeeType, Role role) {
            Notice notice = new Notice();
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
