package NomadLink.WebService.interceptor;

import NomadLink.WebService.session.SessionConst;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.UUID;

@Slf4j
public class LoginCheckInterceptor implements HandlerInterceptor {

    @Override // 핸들러(컨트롤러) 호출 전에 동작
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();

        log.info("인증 체크 인터셉터 실행 {}", requestURI);

        HttpSession session = request.getSession();

        if(session == null || session.getAttribute(SessionConst.LOGIN_MEMBER) == null) {
            log.info("미인증 사용자 요청");

            // 로그인으로 redirect
            response.sendRedirect("/login");
            return false;
        }

        return true;
    }

}
