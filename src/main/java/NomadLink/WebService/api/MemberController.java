package NomadLink.WebService.api;

import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.MemberRepository;
import NomadLink.WebService.service.MemberService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    @ResponseBody // 리턴 타입이 void이지만 자꾸 Thymeleaf template 관련 에러가 발생해 넣어주었다.
    @PostMapping("/api/register") // 회원가입
    public void save(@RequestBody MemberSaveRequestDto memberSaveRequestDto) {
        Member member = new Member();

        member.setEmail(memberSaveRequestDto.getEmail());
        member.setUserId(memberSaveRequestDto.getUserId());
        member.setPassword(memberSaveRequestDto.getPassword());
        member.setRealName(memberSaveRequestDto.getRealName());
        member.setPhoneNumber(memberSaveRequestDto.getPhoneNumber());
        member.setNation(memberSaveRequestDto.getNation());
        member.setAnnual(memberSaveRequestDto.getAnnual());

//        member.setAge("test");
//        member.setGender("test");
//        member.setRole(Role.NOTYET);
//        member.setEmployeeType(EmployeeType.NOTYET);
//        member.setTechStack(null);

        log.info("member.getEmail() : {}", member.getEmail());

        memberService.register(member);
    }

    @Data
    static class MemberSaveRequestDto {

        private String email;
        private String userId; // 로그인시의 아이디
        private String password;
        private String realName; // 개발자의 실제 이름
        private String phoneNumber;
        private Nation nation;
        private Annual annual; // 개발자 연차 (ex - ZEROTOONE, TWOTOFOUR, FIVETOSEVEN, EIGHTTOTEN, MORETHANTEN)

    }

}
