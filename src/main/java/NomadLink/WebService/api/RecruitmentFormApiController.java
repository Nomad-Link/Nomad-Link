package NomadLink.WebService.api;

import NomadLink.WebService.domain.enterprise.RecruitmentForm;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.MemberRepository;
import NomadLink.WebService.service.RecruitmentFormService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class RecruitmentFormApiController {

    private final RecruitmentFormService recruitmentFormService;
    private final MemberRepository memberRepository;

    @PostMapping("/api/enterprise/recruit/form") // 기업 서비스의 폼 작성 페이지
    public void saveRecruitForm(@RequestBody RecruitmentFormRequestDto recruitmentFormRequestDto) {
        RecruitmentForm recruitmentForm = new RecruitmentForm();

        recruitmentForm.setCompanyName(recruitmentFormRequestDto.getCompanyName());
        recruitmentForm.setManagerName(recruitmentFormRequestDto.getManagerName());
        recruitmentForm.setManagerPhoneNumber(recruitmentFormRequestDto.getManagerPhoneNumber());
        recruitmentForm.setManagerEmail(recruitmentFormRequestDto.getManagerEmail());
        recruitmentForm.setRecruitmentPosition(recruitmentFormRequestDto.getRecruitmentPosition());
        recruitmentForm.setProjectDescription(recruitmentFormRequestDto.getProjectDescription());
        recruitmentForm.setRecruitmentType(recruitmentFormRequestDto.getRecruitmentType());
        recruitmentForm.setRoleDescription(recruitmentFormRequestDto.getRoleDescription());
        recruitmentForm.setMinimumAnnual(recruitmentFormRequestDto.getMinimumAnnual());
        recruitmentForm.setEssentialSkillStack(recruitmentFormRequestDto.getEssentialSkillStack());
        recruitmentForm.setOptionalSkillStack(recruitmentFormRequestDto.getOptionalSkillStack());
        recruitmentForm.setKeywords(recruitmentFormRequestDto.getKeywords());
        recruitmentForm.setMaximumSalary(recruitmentFormRequestDto.getMaximumSalary());
        recruitmentForm.setEtcComment(recruitmentFormRequestDto.getEtcComment());

        recruitmentFormService.enroll(recruitmentForm);
    }

    @ResponseBody
    @GetMapping("/api/enterprise/recruit/complete") // 폼 작성 후 완료 페이지
    public  List<MemberWithTechStacksResponseDto> fourDevelopers() {
        List<Member> members = memberRepository.findFourDevelopers();

        List<MemberWithTechStacksResponseDto> collect = members.stream()
                .map(member -> new MemberWithTechStacksResponseDto(member))
                .collect(Collectors.toList());

        return collect;
    }

    @Data
    static class RecruitmentFormRequestDto { // Request DTO ...

        private String companyName; // 회사명
        private String managerName; // 담당자명
        private String managerPhoneNumber; // 담당자 전화번호
        private String managerEmail; // 담당자 이메일
        private String recruitmentPosition; // 채용 직책
        private String projectDescription; // 프로젝트 설명
        private String recruitmentType; // 채용 유형
        private String roleDescription; // 역할 설명
        @Enumerated(EnumType.STRING)
        private Annual minimumAnnual; // 최소 연차
        private String essentialSkillStack; // 필수 기술 스택
        private String optionalSkillStack; // 선택적 기술 스택
        private String keywords; // 채용 공고상 키워드
        private String maximumSalary; // 연봉 상한선
        private String etcComment; // 기타 코멘트

    }

    @Data
    static class MemberWithTechStacksResponseDto {

        private Long id;
        private String realName;
        private Annual annual;
        private Role role;
        private Nation nation;
        private EmployeeType employeeType;
        private List<TechStackResponseDto> techStacks;

        public MemberWithTechStacksResponseDto(Member member) {
            id = member.getId();
            realName = member.getRealName();
            annual = member.getAnnual();
            role = member.getRole();
            nation = member.getNation();
            employeeType = member.getEmployeeType();

            // DTO안에 엔티티가 있으면 안된다!!!!!!!!!! TechStack 조차도 DTO로 변경해야한다.
            techStacks = member.getTechStacks().stream()
                    .map(techStack -> new TechStackResponseDto(techStack))
                    .collect(Collectors.toList());
        }

    }

    @Data
    static class TechStackResponseDto {
        private String techName;

        public TechStackResponseDto(TechStack techStack) {
            techName = techStack.getTechName();
        }

    }

}
