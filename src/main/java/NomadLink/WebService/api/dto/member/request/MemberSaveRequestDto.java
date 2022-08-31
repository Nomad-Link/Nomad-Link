package NomadLink.WebService.api.dto.member.request;

import NomadLink.WebService.domain.member.Annual;
import NomadLink.WebService.domain.member.Nation;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
public class MemberSaveRequestDto { // 회원가입시 request dto

    @NotBlank(message = "이메일 입력은 필수 입니다.")
    @Email(message = "이메일 형식을 지켜주세요.")
    private String email;

    @NotBlank(message = "아이디 입력은 필수 입니다.")
    private String userId; // 로그인시의 아이디

    @NotBlank(message = "비밀번호 입력은 필수 입니다.")
    @Pattern(regexp = "^.*(?=^.{4,15}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$", message = "비밀번호는 4~15자리의 숫자,문자,특수문자로 이루어져야합니다.")
    private String password;

    @NotBlank(message = "성함 입력은 필수 입니다.")
    private String realName; // 개발자의 실제 이름

    @NotBlank(message = "전화번호 입력은 필수 입니다.")
    private String phoneNumber;

//    @NotBlank(message = "국가 입력은 필수 입니다.") // NotBlank는 String타입에만 적용될 수 있으므로 에러가 발생할 것이다.
    private Nation nation;

//    @NotBlank(message = "현재 연차 입력은 필수 입니다.") // NotBlank는 String타입에만 적용될 수 있으므로 에러가 발생할 것이다.
    private Annual annual; // 개발자 연차 (ex - ZEROTOONE, TWOTOFOUR, FIVETOSEVEN, EIGHTTOTEN, MORETHANTEN)

}
