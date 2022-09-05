package NomadLink.WebService.api.member;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.member.MemberRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MemberMypage {

    private final MemberRepository memberRepository;

//    @GetMapping("/api/mypage/member/{memberId}")
//    public void memberMypage(@PathVariable long memberId) {
//        memberRepository.findOne();
//    }

    @Data
    static class MemberMypageResponseDto {

        private String realName;
        private List<MemberMypageNoticesResponseDto> notices;

        public MemberMypageResponseDto() {

        }

    }

    @Data
    static class MemberMypageNoticesResponseDto {

        private Long noticeId;
        private String enterpriseName;
        private String companyIntroduction;
        private String noticeTitle;

    }

}
