package NomadLink.WebService.repository.member;

import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Nation;
import NomadLink.WebService.domain.member.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class NoticeSearchOption { // 구인글 검색시 사용될 프로퍼티

    private Role role; // 기술스택
    private EmployeeType employeeType; // 근무타입

}
