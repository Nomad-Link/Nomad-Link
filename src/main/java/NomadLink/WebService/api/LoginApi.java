package NomadLink.WebService.api;

import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginApi {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequestDto loginRequestDto) {

    }

    @Data
    static class LoginRequestDto {

    }

}
