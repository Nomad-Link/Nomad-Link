package NomadLink.WebService;

import NomadLink.WebService.interceptor.LoginCheckInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override // 인터셉터 등록
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginCheckInterceptor())
                .order(1)
                .addPathPatterns("/**")
                .excludePathPatterns("/api", "/api/enterprise", "/api/private", "/api/login", "/api/logout", "/api/register");
    }

}
