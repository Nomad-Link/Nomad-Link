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
            Member member1 = createMember("test1UserId", "Abraham Kedar", "test1Password", Annual.TWOTOFOUR, "010-0000-0000", "test1@gmail.com", Role.SERVER, Nation.INDIA, EmployeeType.FULLTIME);
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
            Member member2 = createMember("test2UserId", "Juan Enkalada", "test2Password", Annual.FIVETOSEVEN, "010-0000-0000", "test2@gmail.com", Role.FRONTEND, Nation.VIETNAM, EmployeeType.PARTTIME);
            em.persist(member2);

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
            //== member2 end ==//

            //== member3 start ==//
            Member member3 = createMember("test3UserId", "Duong Ta Cao", "test3Password", Annual.MORETHANTEN, "010-0000-0000", "test3@gmail.com", Role.FRONTEND, Nation.VIETNAM, EmployeeType.PARTTIME);
            em.persist(member3);

            TechStack member3TechStack1 = createTechStack("Html");
            em.persist(member3TechStack1);
            TechStack member3TechStack2 = createTechStack("Css");
            em.persist(member3TechStack2);
            TechStack member3TechStack3 = createTechStack("Javascript");
            em.persist(member3TechStack3);
            TechStack member3TechStack4 = createTechStack("Angular.js");
            em.persist(member3TechStack4);

            member3.setTechStack(member3TechStack1);
            member3.setTechStack(member3TechStack2);
            member3.setTechStack(member3TechStack3);
            member3.setTechStack(member3TechStack4);
            //== member3 end ==//

            //== member4 start ==//
            Member member4 = createMember("test4UserId", "Wang Li", "test4Password", Annual.EIGHTTOTEN, "010-0000-0000", "test4@gmail.com", Role.ANDROID, Nation.CHINA, EmployeeType.FREELANCER);
            em.persist(member4);

            TechStack member4TechStack1 = createTechStack("Java");
            em.persist(member4TechStack1);
            TechStack member4TechStack2 = createTechStack("Kotlin");
            em.persist(member4TechStack2);
            TechStack member4TechStack3 = createTechStack("Dart");
            em.persist(member4TechStack3);
            TechStack member4TechStack4 = createTechStack("Flutter");
            em.persist(member4TechStack4);
            TechStack member4TechStack5 = createTechStack("Coroutine");
            em.persist(member4TechStack5);

            member4.setTechStack(member4TechStack1);
            member4.setTechStack(member4TechStack2);
            member4.setTechStack(member4TechStack3);
            member4.setTechStack(member4TechStack4);
            member4.setTechStack(member4TechStack5);
            //== member4 end ==//

            //== member5 start ==//
            Member member5 = createMember("test5UserId", "Joshua Mark", "test5Password", Annual.ZEROTOONE, "010-0000-0000", "test5@gmail.com", Role.IOS, Nation.PHILIPPINE, EmployeeType.FULLTIME);
            em.persist(member5);

            TechStack member5TechStack1 = createTechStack("Objective-c");
            em.persist(member5TechStack1);
            TechStack member5TechStack2 = createTechStack("Swift");
            em.persist(member5TechStack2);
            TechStack member5TechStack3 = createTechStack("Javascript");
            em.persist(member5TechStack3);
            TechStack member5TechStack4 = createTechStack("React-native");
            em.persist(member5TechStack4);

            member5.setTechStack(member5TechStack1);
            member5.setTechStack(member5TechStack2);
            member5.setTechStack(member5TechStack3);
            member5.setTechStack(member5TechStack4);
            //== member5 end ==//

            //== member6 start ==//
            Member member6 = createMember("test6UserId", "Priyanka Rahul", "test6Password", Annual.FIVETOSEVEN, "010-0000-0000", "test6@gmail.com", Role.SERVER, Nation.INDIA, EmployeeType.FULLTIME);
            em.persist(member6);

            TechStack member6TechStack1 = createTechStack("Javascript");
            em.persist(member6TechStack1);
            TechStack member6TechStack2 = createTechStack("Node.js");
            em.persist(member6TechStack2);
            TechStack member6TechStack3 = createTechStack("Travis-CI");
            em.persist(member6TechStack3);
            TechStack member6TechStack4 = createTechStack("Thymeleaf");
            em.persist(member6TechStack4);
            TechStack member6TechStack5 = createTechStack("Express");
            em.persist(member6TechStack5);

            member6.setTechStack(member6TechStack1);
            member6.setTechStack(member6TechStack2);
            member6.setTechStack(member6TechStack3);
            member6.setTechStack(member6TechStack4);
            member6.setTechStack(member6TechStack5);
            //== member6 end ==//
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
