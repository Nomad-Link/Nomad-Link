package NomadLink.WebService.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeApiController {

    @GetMapping("/api") //Nomad Link 메인 홈 (여러가지 정보, 현황, 바로가기 등)
    public String Home() {

        return "200 OK";
    }

}
