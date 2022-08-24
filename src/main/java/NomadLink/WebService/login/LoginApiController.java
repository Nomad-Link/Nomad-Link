package NomadLink.WebService.login;

import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.login.LoginService;
import NomadLink.WebService.session.SessionConst;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequiredArgsConstructor
public class LoginApiController {

    private final LoginService loginService;

    @PostMapping("/api/login") // 로그인 페이지
    @ResponseBody
    public String login(@RequestBody LoginRequestDto loginRequestDto, HttpServletRequest request) {
        Member loginMember = loginService.login(loginRequestDto.getUserId(), loginRequestDto.getPassword());

        if(loginMember == null) {
            return "login-error";
        }

        // 로그인 성공 처리
        HttpSession session = request.getSession(true); // 세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember); // 세션에 로그인 회원 정보 보관, 이후 브라우저의 쿠키 저장소에 응답보냄

        String userId = loginMember.getUserId();

        return userId;
    }

    @ResponseBody
    @PostMapping("/api/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false); // 세션이 존재하면 그 세션을 가져오고 없다면 세션을 새로 만들지 않는다.(null 이 반환됨)

        if(session != null) {
            session.invalidate(); // 세션 정보를 삭제
        }

        return "logout-success";
    }

    @Data
    static class LoginRequestDto {

        private String userId; // 로그인시의 아이디
        private String password;

    }

}
