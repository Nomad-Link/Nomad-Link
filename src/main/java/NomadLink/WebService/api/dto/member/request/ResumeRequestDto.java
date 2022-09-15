package NomadLink.WebService.api.dto.member.request;

import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Gender;
import NomadLink.WebService.domain.member.Nation;
import NomadLink.WebService.domain.member.Role;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ResumeRequestDto { // 이력서 등록시 request dto

    private MultipartFile attachFile; // 이력서 사진
    private String realName; // 개발자의 실제 이름
    private String phoneNumber;
    private String email;
    private String age;
    private Gender gender;
    private String developerIntroduction;
    private String githubUrl;
    private String blogUrl;
    private String portfolioUrl;
    private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)
    private Nation nation;
    private EmployeeType employeeType;
    private String[] techStacks;

}
