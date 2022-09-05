package NomadLink.WebService.service;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.Member;
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

    public void memberApplyForNotice(long noticeId, Member loginMember) {
        Notice findedNotice = noticeRepository.findOne(noticeId);
        Member findedMember = memberRepository.findOne(loginMember.getId());

        findedMember.setApplyNotice(findedNotice);
    }

}
