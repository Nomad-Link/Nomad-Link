//package NomadLink.WebService.testData;
//
//import NomadLink.WebService.domain.member.*;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Component;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.annotation.PostConstruct;
//import javax.persistence.EntityManager;
//
//@Component
//@RequiredArgsConstructor
//@Slf4j
//public class ResumeTestDataInit {
//
//    private final InitService initService;
//
//    @PostConstruct // 서버 재시작마다 실행한다.
//    public void init() {
//        initService.dbInit1();
//    }
//
//    @Component
//    @Transactional
//    @RequiredArgsConstructor
//    static class InitService {
//
//        private final EntityManager em;
//
//        public void dbInit1() {
//            Member member1 = createMember("resumeTest", "resumeTest", "resumeTest");
//            em.persist(member1);
//
//            Resume resume1 = createResume("resumeTest", "010-0000-0000", "resumeTest@gmail.com", "0", Gender.MALE, "resumeTest", "resumeTest", "resumeTest", "resumeTest", Role.SERVER, Nation.CHINA, EmployeeType.FULLTIME);
//            em.persist(resume1);
//
//            member1.setResume(resume1);
//        }
//
//        private Member createMember(String userId, String realName, String password) {
//            Member member = new Member();
//            member.setUserId(userId);
//            member.setRealName(realName);
//            member.setPassword(password);
//
//            return member;
//        }
//
//        private Resume createResume(String realName, String phoneNumber, String email, String age, Gender gender, String githubUrl, String blogUrl, String portfolioUrl, String techStacks, Role role, Nation nation, EmployeeType employeeType) {
//            Resume resume = new Resume();
//            resume.setRealName(realName);
//            resume.setPhoneNumber(phoneNumber);
//            resume.setEmail(email);
//            resume.setAge(age);
//            resume.setGender(gender);
//            resume.setGithubUrl(githubUrl);
//            resume.setBlogUrl(blogUrl);
//            resume.setPortfolioUrl(portfolioUrl);
//            resume.setTechStacks(techStacks);
//            resume.setRole(role);
//            resume.setNation(nation);
//            resume.setEmployeeType(employeeType);
//
//            return resume;
//        }
//
//    }
//
//}
