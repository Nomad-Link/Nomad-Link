package NomadLink.WebService.api;

import NomadLink.WebService.domain.member.Annual;
import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.domain.member.Nation;
import NomadLink.WebService.repository.MemberRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberRepository memberRepository;

    @GetMapping("/api/member/add")
    public void save(@RequestBody MemberSaveRequestDto memberSaveRequestDto) {
        Member member = new Member();

        member.setEmail(memberSaveRequestDto.getEmail());
        member.setUserId(memberSaveRequestDto.getUserId());
        member.setPassword(memberSaveRequestDto.getPassword());
        member.setRealName(memberSaveRequestDto.getRealName());
        member.setPhoneNumber(memberSaveRequestDto.getPhoneNumber());
        member.setNation(memberSaveRequestDto.getNation());
        member.setAnnual(memberSaveRequestDto.getAnnual());

        memberRepository.save(member);
    }

    @Data
    static class MemberSaveRequestDto {

        private String Email;
        private String userId; // 로그인시의 아이디
        private String password;
        private String realName; // 개발자의 실제 이름
        private String phoneNumber;
        private Nation nation;
        private Annual annual; // 개발자 연차 (ex - ZEROTOONE, TWOTOFOUR, FIVETOSEVEN, EIGHTTOTEN, MORETHANTEN)

    }

}
