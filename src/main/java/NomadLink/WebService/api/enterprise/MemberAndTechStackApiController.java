package NomadLink.WebService.api.enterprise;

import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.enterprise.EnterpriseSearchOption;
import NomadLink.WebService.repository.member.MemberRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class MemberAndTechStackApiController {

    private final MemberRepository memberRepository;

    @ResponseBody
    @GetMapping("/api/enterprise/recruit/developers") // 기업 서비스에서 개발자 목록을 보여주는 페이지
    public List<MemberWithTechStacksResponseDto> findMembersWithTechStacksByOption(@RequestParam("nation") @Nullable Nation nation, @RequestParam("employeeType") @Nullable EmployeeType employeeType, @RequestParam("techStack") @Nullable String techStack) {
        EnterpriseSearchOption enterpriseSearchOption = new EnterpriseSearchOption(nation, employeeType, techStack);

        List<Member> members = memberRepository.findByOption(enterpriseSearchOption);

        List<MemberWithTechStacksResponseDto> collect = members.stream()
                                .map(member -> new MemberWithTechStacksResponseDto(member))
                                .collect(Collectors.toList());

        return collect;
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
