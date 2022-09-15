package NomadLink.WebService.service.member;

import NomadLink.WebService.domain.member.TechStack;
import NomadLink.WebService.repository.member.TechStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class TechStackService { // 기술 스택 엔티티 관련 비즈니스 로직

    private final TechStackRepository techStackRepository;

    public void saveTechStack(TechStack techStack) {
        techStackRepository.save(techStack);
    }

}
