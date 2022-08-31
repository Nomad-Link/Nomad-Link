package NomadLink.WebService.service;

import NomadLink.WebService.api.dto.member.request.MemberSaveRequestDto;
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

    public boolean validateDuplicateUserId(MemberSaveRequestDto member) { // 이렇게 해도 동시성 문제가 발생할 수 있음
        if (memberRepository.findByLoginId(member.getUserId()).isPresent()) {
            Member findedMembers = memberRepository.findByLoginId(member.getUserId()).get();

            if (findedMembers != null) {
                return false;
            }
        }

        return true;
    }

}
