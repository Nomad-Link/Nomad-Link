package NomadLink.WebService.service;

import NomadLink.WebService.domain.enterprise.Application;
import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.repository.enterprise.ApplicationRepository;
import NomadLink.WebService.repository.member.MemberRepository;
import NomadLink.WebService.repository.member.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberApplyForNoticeService {

    private final NoticeRepository noticeRepository;
    private final MemberRepository memberRepository;
    private final ApplicationRepository applicationRepository;

    public void memberApplyForNotice(long noticeId, Member loginMember) {
        Notice findedNotice = noticeRepository.findOne(noticeId);
        Member findedMember = memberRepository.findOne(loginMember.getId());

        Application application = new Application();
        application.setEnterpriseName(findedNotice.getEnterpriseName());
        application.setEnterpriseLocation(findedNotice.getEnterpriseLocation());
        application.setNoticeTitle(findedNotice.getTitle());
        findedMember.setApplication(application);
        findedNotice.setApplication(application);

        applicationRepository.saveApplication(application);
    }

}
