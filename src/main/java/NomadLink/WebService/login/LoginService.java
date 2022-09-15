package NomadLink.WebService.login;

import NomadLink.WebService.domain.member.Member;
import NomadLink.WebService.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class LoginService { // 로그인 기능을 위한 비즈니스 로직

    private final MemberRepository memberRepository;
    private final EntityManager em;

    public Member login(String loginId, String password) {

        return memberRepository.findByLoginId(loginId)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }

    public Optional<Member> findByLoginId(String loginId) {

        return findAll().stream()
                .filter(m -> m.getUserId().equals(loginId))
                .findFirst();
    }

    public Optional<Member> findByPassword(String password) {

        return findAll().stream()
                .filter(m -> m.getPassword().equals(password))
                .findFirst();
    }

    public List<Member> findAll() {

        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

}
