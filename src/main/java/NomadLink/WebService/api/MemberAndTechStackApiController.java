package NomadLink.WebService.api;

import NomadLink.WebService.domain.*;
import NomadLink.WebService.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class MemberAndTechStackApiController {

    private final MemberRepository memberRepository;

    @GetMapping("/enterprise/recruit/developers")
    public MemberWithTechStacksResponseDtoListGeneric allMembersWithTeckStacks() { // application.yml의 default_batch_fetch_size 확인, OneToOne, ManyToOne은 그냥 페치 조인을 하고 ToMany(컬렉션 조회)는 페치 조인시 데이터 뻥튀기 문제가 발생한다. => default_batch_fetch_size 이용해야한다.
        List<Member> members = memberRepository.findAll();

        List<MemberWithTechStacksResponseDto> collect = members.stream()
                                .map(member -> new MemberWithTechStacksResponseDto(member))
                                .collect(Collectors.toList());

        return new MemberWithTechStacksResponseDtoListGeneric(collect); // 리스트를 그대로 반환하면 안되고 제네릭으로 한번 감싸서 반환한다.
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

    @Data
    @AllArgsConstructor
    static class MemberWithTechStacksResponseDtoListGeneric<T> {

        private T data;

    }

}
