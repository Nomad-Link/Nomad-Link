package NomadLink.WebService.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrivateHomeApiController {

    @GetMapping("api/private") // 개인 서비스 홈
    public String privateHome() {

        return "200 OK";
    }

}
