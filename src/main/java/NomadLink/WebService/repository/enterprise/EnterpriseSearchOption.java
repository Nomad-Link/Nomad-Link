package NomadLink.WebService.repository.enterprise;

import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Nation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class EnterpriseSearchOption { // 기업이 개발자 이력서 검색시 사용될 프로퍼티

    private Nation nation; // 국가이름
    private EmployeeType employeeType; // 근무타입
    private String techStack; // 기술스택

}
