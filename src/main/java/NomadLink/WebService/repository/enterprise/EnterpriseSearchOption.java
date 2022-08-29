package NomadLink.WebService.repository.enterprise;

import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Nation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class EnterpriseSearchOption {

    private Nation nation; // 국가이름
    private EmployeeType employeeType; // 근무타입
    private String techStack; // 기술스택

}
