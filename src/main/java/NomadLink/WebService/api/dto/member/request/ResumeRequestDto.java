package NomadLink.WebService.api.dto.member.request;

import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Gender;
import NomadLink.WebService.domain.member.Nation;
import NomadLink.WebService.domain.member.Role;
import lombok.Data;

@Data
public class ResumeRequestDto {

    private String realName; // 개발자의 실제 이름
    private String phoneNumber;
    private String email;
    private String age;
    private Gender gender;
    private String githubUrl;
    private String blogUrl;
    private String portfolioUrl;
    private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)
    private Nation nation;
    private EmployeeType employeeType;
//        private String techStacks;

}
