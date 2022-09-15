package NomadLink.WebService.login;

import NomadLink.WebService.api.member.MemberApiController;
import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.login.LoginService;
import NomadLink.WebService.repository.member.MemberRepository;
import NomadLink.WebService.session.SessionConst;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginApiController { // 로그인 기능을 위한 컨트롤러

    private final LoginService loginService;
    private final EntityManager em;

    @PostMapping("/api/login") // 로그인 페이지
    @ResponseBody
    public Object login(@Valid @RequestBody LoginRequestDto loginRequestDto, BindingResult bindingResult, HttpServletRequest request) {
        Optional<Member> findedMemberByUserId = loginService.findByLoginId(loginRequestDto.getUserId());
        Optional<Member> findedMemberByPassword = loginService.findByPassword(loginRequestDto.getPassword());

        if (!findedMemberByUserId.isPresent()) {
            return new LoginError().error("존재하지 않는 아이디 입니다.");
        }

        if (!findedMemberByPassword.isPresent()) {
            return new LoginError().error("존재하지 않는 패스워드 입니다.");
        }

        if (bindingResult.hasErrors()) {
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            String errorMessage = allErrors.get(0).getDefaultMessage();
            return new LoginError().error(errorMessage);
        }

        // 로그인 성공 처리
        Member loginMember = loginService.login(loginRequestDto.getUserId(), loginRequestDto.getPassword());

        HttpSession session = request.getSession(true); // 세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember); // 세션에 로그인 회원 정보 보관, 이후 브라우저의 쿠키 저장소에 응답보냄

        String userId = loginMember.getUserId();
        log.info("========loginMember.getUserId() = {}========", userId);
        log.info("========session = {}========", session);

        LoginSuccessResponseDto loginSuccessResponseDto = new LoginSuccessResponseDto();
        loginSuccessResponseDto.setUserId(userId);

        return loginSuccessResponseDto;
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

        @NotBlank(message = "아이디 입력은 필수 입니다.")
        private String userId; // 로그인시의 아이디

        @NotBlank(message = "패스워드 입력은 필수 입니다.")
        private String password;

    }

    @Data
    public class LoginError {

        public ResponseEntity error(String errorMessage) {
            HttpStatus status = HttpStatus.BAD_REQUEST;
            CustomErrorResponse errors = new CustomErrorResponse(errorMessage, status.value());
            return ResponseEntity
                    .status(status)
                    .body(errors);
        }

    }

    @Data
    public class CustomErrorResponse {

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
        private LocalDateTime time;

        private int status;
        private String errorMessage;

        public CustomErrorResponse(String errorMessage, int status)
        {
            this.time = LocalDateTime.now();
            this.errorMessage = errorMessage;
            this.status = status;
        }

    }

    @Data
    @NoArgsConstructor
    static class LoginSuccessResponseDto {

        String userId;

    }

}
