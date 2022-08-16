package NomadLink.WebService.api;

import NomadLink.WebService.domain.*;
import NomadLink.WebService.repository.EnterpriseSearchOption;
import NomadLink.WebService.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class MemberAndTechStackApiController {

    private List<MemberWithTechStacksResponseDto> collect = new ArrayList<>();
    private final MemberRepository memberRepository;

    @ResponseBody
    @GetMapping("/enterprise/recruit/developers")
    public List<MemberWithTechStacksResponseDto> allMembersWithTeckStacks() { // application.yml의 default_batch_fetch_size 확인, OneToOne, ManyToOne은 그냥 페치 조인을 하고 ToMany(컬렉션 조회)는 페치 조인시 데이터 뻥튀기 문제가 발생한다. => default_batch_fetch_size 이용해야한다.
        List<Member> members = memberRepository.findAll();

        List<MemberWithTechStacksResponseDto> collect = members.stream()
                                .map(member -> new MemberWithTechStacksResponseDto(member))
                                .collect(Collectors.toList());

        return collect;
    }

    @PostMapping("/enterprise/recruit/developers")
    public String findMembersWithTechStacksByOption(RedirectAttributes redirectAttributes, @RequestParam("nation") Nation nation, @RequestParam("employeeType") EmployeeType employeeType, @RequestParam("techStack") String techStack) {
        EnterpriseSearchOption enterpriseSearchOption = new EnterpriseSearchOption(nation, employeeType, techStack);

        List<Member> members = memberRepository.findByOption(enterpriseSearchOption);

        collect.clear();
        collect = members.stream()
                .map(member -> new MemberWithTechStacksResponseDto(member))
                .collect(Collectors.toList());

        redirectAttributes.addAttribute("nation", nation);
        redirectAttributes.addAttribute("employeeType", employeeType);
        redirectAttributes.addAttribute("techStack", techStack);

        return "redirect:/enterprise/recruit/developers/bySearch";
    }

    @ResponseBody
    @GetMapping("/enterprise/recruit/developers/bySearch")
    public List<MemberWithTechStacksResponseDto> findMembersWithTechStacksByOption(@RequestParam("nation") Nation nation, @RequestParam("employeeType") EmployeeType employeeType, @RequestParam("techStack") String techStack) {

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
