package NomadLink.WebService.api.enterprise;

import NomadLink.WebService.api.dto.enterprise.request.RecruitmentFormRequestDto;
import NomadLink.WebService.domain.enterprise.RecruitmentForm;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.member.MemberRepository;
import NomadLink.WebService.service.enterprise.RecruitmentFormService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class RecruitmentFormApiController {

    private final RecruitmentFormService recruitmentFormService;
    private final MemberRepository memberRepository;

    @PostMapping("/api/enterprise/recruit/form") // 기업 서비스의 구인 폼 작성 페이지
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
    static class MemberWithTechStacksResponseDto { // 폼 작성 후 이동되는 페이지에서의 response dto

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
