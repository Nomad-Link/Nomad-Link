package NomadLink.WebService;

import NomadLink.WebService.domain.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
@Slf4j
public class MemberAndTechStackDataInit {

    private final InitService initService;

    @PostConstruct // 서버 재시작마다 실행한다.
    public void init() {
        initService.dbInit1();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;

        public void dbInit1() {
            //== member1 start ==//
            Member member1 = createMember("test1UserId", "test1RealName", "test1Password", Annual.TWOTOFOUR, "010-0000-0000", "test1@gmail.com", Role.SERVER, Nation.INDIA, EmployeeType.FULLTIME);
            em.persist(member1);

            TechStack member1TechStack1 = createTechStack("Spring");
            em.persist(member1TechStack1);
            TechStack member1TechStack2 = createTechStack("Spring Boot");
            em.persist(member1TechStack2);
            TechStack member1TechStack3 = createTechStack("Jpa");
            em.persist(member1TechStack3);
            TechStack member1TechStack4 = createTechStack("Spring data jpa");
            em.persist(member1TechStack4);
            TechStack member1TechStack5 = createTechStack("QueryDSL");
            em.persist(member1TechStack5);
            TechStack member1TechStack6 = createTechStack("Mybatis");
            em.persist(member1TechStack6);
            TechStack member1TechStack7 = createTechStack("Redis");
            em.persist(member1TechStack7);
            TechStack member1TechStack8 = createTechStack("Docker");
            em.persist(member1TechStack8);
            TechStack member1TechStack9 = createTechStack("Jsp");
            em.persist(member1TechStack9);
            TechStack member1TechStack10 = createTechStack("Thymeleaf");
            em.persist(member1TechStack10);

            member1.setTechStack(member1TechStack1);
            member1.setTechStack(member1TechStack2);
            member1.setTechStack(member1TechStack3);
            member1.setTechStack(member1TechStack4);
            member1.setTechStack(member1TechStack5);
            member1.setTechStack(member1TechStack6);
            member1.setTechStack(member1TechStack7);
            member1.setTechStack(member1TechStack8);
            member1.setTechStack(member1TechStack9);
            member1.setTechStack(member1TechStack10);
            //== member1 end ==//

            //== member2 start ==//
            Member member2 = createMember("test2UserId", "test2RealName", "test2Password", Annual.FIVETOSEVEN, "010-0000-0000", "test2@gmail.com", Role.FRONTEND, Nation.VIETNAM, EmployeeType.PARTTIME);

            TechStack member2TechStack1 = createTechStack("Html");
            em.persist(member2TechStack1);
            TechStack member2TechStack2 = createTechStack("Css");
            em.persist(member2TechStack2);
            TechStack member2TechStack3 = createTechStack("Javascript");
            em.persist(member2TechStack3);
            TechStack member2TechStack4 = createTechStack("React.js");
            em.persist(member2TechStack4);
            TechStack member2TechStack5 = createTechStack("Redux");
            em.persist(member2TechStack5);

            member2.setTechStack(member2TechStack1);
            member2.setTechStack(member2TechStack2);
            member2.setTechStack(member2TechStack3);
            member2.setTechStack(member2TechStack4);
            member2.setTechStack(member2TechStack5);

            log.info("member2's techStecks: ", member2.getTechStacks());

            em.persist(member2);
            //== member2 end ==//
        }

        private Member createMember(String userId, String realName, String password, Annual annual, String phoneNumber, String Email, Role role, Nation nation, EmployeeType employeeType) {
            Member member = new Member();
            member.setUserId(userId);
            member.setRealName(realName);
            member.setPassword(password);
            member.setAnnual(annual);
            member.setPhoneNumber(phoneNumber);
            member.setEmail(Email);
            member.setRole(role);
            member.setNation(nation);
            member.setEmployeeType(employeeType);

            return member;
        }

        private TechStack createTechStack(String techName) {
            TechStack techStack = new TechStack();
            techStack.setTechName(techName);

            return techStack;
        }
    }

}
