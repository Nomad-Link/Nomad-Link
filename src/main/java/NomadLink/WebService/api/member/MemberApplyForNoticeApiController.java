package NomadLink.WebService.api.member;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.repository.member.NoticeRepository;
import NomadLink.WebService.service.MemberApplyForNoticeService;
import NomadLink.WebService.session.SessionConst;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

@RestController
@RequiredArgsConstructor
public class MemberApplyForNoticeApiController {

    private final MemberApplyForNoticeService memberApplyForNoticeService;

    @PostMapping("/api/notice/{noticeId}")
    public void applyPost(@PathVariable long noticeId, @SessionAttribute(name = SessionConst.LOGIN_MEMBER) Member loginMember) {
        memberApplyForNoticeService.memberApplyForNotice(noticeId, loginMember);
    }

}
