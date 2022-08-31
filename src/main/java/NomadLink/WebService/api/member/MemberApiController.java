package NomadLink.WebService.api.member;

import NomadLink.WebService.api.dto.member.request.MemberSaveRequestDto;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.service.MemberService;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberApiController {

    private final MemberService memberService;

    @ResponseBody
    @PostMapping("/api/register") // 회원가입
    public Object save(@Valid @RequestBody MemberSaveRequestDto memberSaveRequestDto, BindingResult bindingResult) {
        boolean flag = memberService.validateDuplicateUserId(memberSaveRequestDto);
        if (!flag) {
            return new CreateError().error("중복된 아이디가 존재합니다.");
        }

        if (bindingResult.hasErrors()) {
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            String errorMessage = allErrors.get(0).getDefaultMessage();
            return new CreateError().error(errorMessage);
        }

        Member member = new Member();

        member.setEmail(memberSaveRequestDto.getEmail());
        member.setUserId(memberSaveRequestDto.getUserId());
        member.setPassword(memberSaveRequestDto.getPassword());
        member.setRealName(memberSaveRequestDto.getRealName());
        member.setPhoneNumber(memberSaveRequestDto.getPhoneNumber());
        member.setNation(memberSaveRequestDto.getNation());
        member.setAnnual(memberSaveRequestDto.getAnnual());

        memberService.register(member);

        return member;
    }

    @Data
    public class CreateError {

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

}
