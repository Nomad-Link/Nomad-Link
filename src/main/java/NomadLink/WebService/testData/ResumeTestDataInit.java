package NomadLink.WebService.testData;

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
public class ResumeTestDataInit {

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

        private Resume createResume(String techName) {
            Resume resume = new Resume();


            return resume;
        }

    }

}
