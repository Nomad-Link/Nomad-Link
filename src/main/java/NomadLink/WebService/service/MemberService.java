package NomadLink.WebService.service;

import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;

    public void register(Member member) {
        memberRepository.save(member);
    }

}
