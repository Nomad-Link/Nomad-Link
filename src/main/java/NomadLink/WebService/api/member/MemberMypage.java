package NomadLink.WebService.api.member;

import NomadLink.WebService.domain.enterprise.Application;
import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.member.ApplicationRepository;
import NomadLink.WebService.repository.member.MemberRepository;
import NomadLink.WebService.session.SessionConst;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class MemberMypage {

    private final ApplicationRepository applicationRepository;

    @ResponseBody
    @GetMapping("/api/member/mypage")
    public List<MemberMypageResponseDto> memberMypage(@SessionAttribute(name = SessionConst.LOGIN_MEMBER) Member loginMember) {
        List<Application> applications = applicationRepository.findApplicationsByMember(loginMember.getId());

        List<MemberMypageResponseDto> results = applications.stream()
                .map(application -> new MemberMypageResponseDto(application))
                .collect(Collectors.toList());

        return results;
    }

    @Data
    static class MemberMypageResponseDto {

        private String enterpriseName;
        private String enterpriseLocation;
        private String noticeTitle;
        private Long noticeId;

        public MemberMypageResponseDto(Application application) {
            enterpriseName = application.getEnterpriseName();
            enterpriseLocation = application.getEnterpriseLocation();
            noticeTitle = application.getNoticeTitle();
            noticeId = application.getNotice().getId();
        }

    }

}
