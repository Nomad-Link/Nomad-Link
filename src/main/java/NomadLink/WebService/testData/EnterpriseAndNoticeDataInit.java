package NomadLink.WebService.testData;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.enterprise.NoticeTechStack;
import NomadLink.WebService.domain.member.*;
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

            NoticeTechStack notice1TechStack1 = createTechStack("Spring boot");
            em.persist(notice1TechStack1);
            NoticeTechStack notice1TechStack2 = createTechStack("Spring");
            em.persist(notice1TechStack2);
            NoticeTechStack notice1TechStack3 = createTechStack("Java");
            em.persist(notice1TechStack3);
            NoticeTechStack notice1TechStack4 = createTechStack("Mybatis");
            em.persist(notice1TechStack4);

            notice1.setTechStack(notice1TechStack1);
            notice1.setTechStack(notice1TechStack2);
            notice1.setTechStack(notice1TechStack3);
            notice1.setTechStack(notice1TechStack4);
            //== Enterprise1 end ==//

            //== Enterprise2 start ==//
            Notice notice2 = createNotice("오투", "서초", "백엔드 서버(Node, javascript) 개발자", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice2);

            NoticeTechStack notice2TechStack1 = createTechStack("Javascript");
            em.persist(notice2TechStack1);
            NoticeTechStack notice2TechStack2 = createTechStack("Typescript");
            em.persist(notice2TechStack2);
            NoticeTechStack notice2TechStack3 = createTechStack("Node js");
            em.persist(notice2TechStack3);
            NoticeTechStack notice2TechStack4 = createTechStack("express");
            em.persist(notice2TechStack4);
            NoticeTechStack notice2TechStack5 = createTechStack("Travis ci");
            em.persist(notice2TechStack5);
            NoticeTechStack notice2TechStack6 = createTechStack("Kafka");
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

            NoticeTechStack notice3TechStack1 = createTechStack("Spring boot");
            em.persist(notice3TechStack1);
            NoticeTechStack notice3TechStack2 = createTechStack("Spring");
            em.persist(notice3TechStack2);
            NoticeTechStack notice3TechStack3 = createTechStack("Java");
            em.persist(notice3TechStack3);
            NoticeTechStack notice3TechStack4 = createTechStack("Mybatis");
            em.persist(notice3TechStack4);

            notice3.setTechStack(notice3TechStack1);
            notice3.setTechStack(notice3TechStack2);
            notice3.setTechStack(notice3TechStack3);
            notice3.setTechStack(notice3TechStack4);
            //== Enterprise3 end ==//

            //== Enterprise4 start ==//
            Notice notice4 = createNotice("바이오커넥트4", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice4);

            NoticeTechStack notice4TechStack1 = createTechStack("Spring boot");
            em.persist(notice4TechStack1);
            NoticeTechStack notice4TechStack2 = createTechStack("Spring");
            em.persist(notice4TechStack2);
            NoticeTechStack notice4TechStack3 = createTechStack("Java");
            em.persist(notice4TechStack3);
            NoticeTechStack notice4TechStack4 = createTechStack("Mybatis");
            em.persist(notice4TechStack4);
            NoticeTechStack notice4TechStack5 = createTechStack("Docker");
            em.persist(notice4TechStack5);
            NoticeTechStack notice4TechStack6 = createTechStack("K8s");
            em.persist(notice4TechStack6);
            NoticeTechStack notice4TechStack7 = createTechStack("Jenkins");
            em.persist(notice4TechStack7);
            NoticeTechStack notice4TechStack8 = createTechStack("Jpa");
            em.persist(notice4TechStack8);

            notice4.setTechStack(notice4TechStack1);
            notice4.setTechStack(notice4TechStack2);
            notice4.setTechStack(notice4TechStack3);
            notice4.setTechStack(notice4TechStack4);
            notice4.setTechStack(notice4TechStack5);
            notice4.setTechStack(notice4TechStack6);
            notice4.setTechStack(notice4TechStack7);
            notice4.setTechStack(notice4TechStack8);
            //== Enterprise4 end ==//

            //== Enterprise5 start ==//
            Notice notice5 = createNotice("바이오커넥트5", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice5);

            NoticeTechStack notice5TechStack1 = createTechStack("Spring boot");
            em.persist(notice5TechStack1);
            NoticeTechStack notice5TechStack2 = createTechStack("Spring");
            em.persist(notice5TechStack2);
            NoticeTechStack notice5TechStack3 = createTechStack("Java");
            em.persist(notice5TechStack3);
            NoticeTechStack notice5TechStack4 = createTechStack("Mybatis");
            em.persist(notice5TechStack4);

            notice5.setTechStack(notice5TechStack1);
            notice5.setTechStack(notice5TechStack2);
            notice5.setTechStack(notice5TechStack3);
            notice5.setTechStack(notice5TechStack4);
            //== Enterprise5 end ==//

            //== Enterprise6 start ==//
            Notice notice6 = createNotice("써모피셔 사이언티픽 코리아", "서초", "S/W 개발 신입 및 경력사원 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice6);

            NoticeTechStack notice6TechStack1 = createTechStack("Spring boot");
            em.persist(notice6TechStack1);
            NoticeTechStack notice6TechStack2 = createTechStack("Spring");
            em.persist(notice6TechStack2);
            NoticeTechStack notice6TechStack3 = createTechStack("Java");
            em.persist(notice6TechStack3);
            NoticeTechStack notice6TechStack4 = createTechStack("Mybatis");
            em.persist(notice6TechStack4);
            NoticeTechStack notice6TechStack5 = createTechStack("Jpa");
            em.persist(notice6TechStack5);
            NoticeTechStack notice6TechStack6 = createTechStack("Thymeleaf");
            em.persist(notice6TechStack6);

            notice6.setTechStack(notice6TechStack1);
            notice6.setTechStack(notice6TechStack2);
            notice6.setTechStack(notice6TechStack3);
            notice6.setTechStack(notice6TechStack4);
            notice6.setTechStack(notice6TechStack5);
            notice6.setTechStack(notice6TechStack6);
            //== Enterprise6 end ==//

            //== Enterprise7 start ==//
            Notice notice7 = createNotice("바이오커넥트7", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice7);

            NoticeTechStack notice7TechStack1 = createTechStack("Spring boot");
            em.persist(notice7TechStack1);
            NoticeTechStack notice7TechStack2 = createTechStack("Spring");
            em.persist(notice7TechStack2);
            NoticeTechStack notice7TechStack3 = createTechStack("Java");
            em.persist(notice7TechStack3);
            NoticeTechStack notice7TechStack4 = createTechStack("Mybatis");
            em.persist(notice7TechStack4);

            notice7.setTechStack(notice7TechStack1);
            notice7.setTechStack(notice7TechStack2);
            notice7.setTechStack(notice7TechStack3);
            notice7.setTechStack(notice7TechStack4);
            //== Enterprise7 end ==//

            //== Enterprise8 start ==//
            Notice notice8 = createNotice("바이오커넥트8", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice8);

            NoticeTechStack notice8TechStack1 = createTechStack("Spring boot");
            em.persist(notice8TechStack1);
            NoticeTechStack notice8TechStack2 = createTechStack("Spring");
            em.persist(notice8TechStack2);
            NoticeTechStack notice8TechStack3 = createTechStack("Java");
            em.persist(notice8TechStack3);
            NoticeTechStack notice8TechStack4 = createTechStack("Mybatis");
            em.persist(notice8TechStack4);
            NoticeTechStack notice8TechStack5 = createTechStack("Docker");
            em.persist(notice8TechStack5);
            NoticeTechStack notice8TechStack6 = createTechStack("K8s");
            em.persist(notice8TechStack6);
            NoticeTechStack notice8TechStack7 = createTechStack("Jenkins");
            em.persist(notice8TechStack7);

            notice8.setTechStack(notice8TechStack1);
            notice8.setTechStack(notice8TechStack2);
            notice8.setTechStack(notice8TechStack3);
            notice8.setTechStack(notice8TechStack4);
            notice8.setTechStack(notice8TechStack5);
            notice8.setTechStack(notice8TechStack6);
            notice8.setTechStack(notice8TechStack7);
            //== Enterprise8 end ==//

            //== Enterprise9 start ==//
            Notice notice9 = createNotice("바이오커넥트9", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice9);

            NoticeTechStack notice9TechStack1 = createTechStack("Spring boot");
            em.persist(notice9TechStack1);
            NoticeTechStack notice9TechStack2 = createTechStack("Spring");
            em.persist(notice9TechStack2);
            NoticeTechStack notice9TechStack3 = createTechStack("Java");
            em.persist(notice9TechStack3);
            NoticeTechStack notice9TechStack4 = createTechStack("Mybatis");
            em.persist(notice9TechStack4);
            NoticeTechStack notice9TechStack5 = createTechStack("Jpa");
            em.persist(notice9TechStack5);
            NoticeTechStack notice9TechStack6 = createTechStack("Thymeleaf");
            em.persist(notice9TechStack6);

            notice9.setTechStack(notice9TechStack1);
            notice9.setTechStack(notice9TechStack2);
            notice9.setTechStack(notice9TechStack3);
            notice9.setTechStack(notice9TechStack4);
            notice9.setTechStack(notice9TechStack5);
            notice9.setTechStack(notice9TechStack6);
            //== Enterprise9 end ==//

            //== Enterprise10 start ==//
            Notice notice10 = createNotice("바이오커넥트10", "서초", "JAVA 웹 개발자 채용", "test textContent", Annual.TWOTOFOUR, EmployeeType.FULLTIME, Role.SERVER);
            em.persist(notice10);

            NoticeTechStack notice10TechStack1 = createTechStack("Spring boot");
            em.persist(notice10TechStack1);
            NoticeTechStack notice10TechStack2 = createTechStack("Spring");
            em.persist(notice10TechStack2);
            NoticeTechStack notice10TechStack3 = createTechStack("Java");
            em.persist(notice10TechStack3);
            NoticeTechStack notice10TechStack4 = createTechStack("Mybatis");
            em.persist(notice10TechStack4);

            notice10.setTechStack(notice10TechStack1);
            notice10.setTechStack(notice10TechStack2);
            notice10.setTechStack(notice10TechStack3);
            notice10.setTechStack(notice10TechStack4);
            //== Enterprise10 end ==//

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

        private NoticeTechStack createTechStack(String techName) {
            NoticeTechStack techStack = new NoticeTechStack();
            techStack.setTechName(techName);

            return techStack;
        }

    }

}
