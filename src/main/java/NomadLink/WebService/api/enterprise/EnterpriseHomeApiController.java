package NomadLink.WebService.api.enterprise;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EnterpriseHomeApiController {

    @GetMapping("/api/enterprise") // 기업 서비스 홈
    public String enterpriseHome() {

        return "200 OK";
    }

}
