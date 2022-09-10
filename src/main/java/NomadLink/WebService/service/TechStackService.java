package NomadLink.WebService.service;

import NomadLink.WebService.domain.member.TechStack;
import NomadLink.WebService.repository.member.TechStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class TechStackService {

    private final TechStackRepository techStackRepository;

    public void saveTechStack(TechStack techStack) {
        techStackRepository.save(techStack);
    }

}
