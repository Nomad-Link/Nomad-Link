package NomadLink.WebService.service.enterprise;

import NomadLink.WebService.domain.enterprise.RecruitmentForm;
import NomadLink.WebService.repository.enterprise.RecruitmentFormRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RecruitmentFormService { // 구인 폼 작성 관련 비즈니스 로직

    private final RecruitmentFormRepository recruitmentFormRepository;

    @Transactional
    public Long enroll(RecruitmentForm recruitmentForm) {
        recruitmentFormRepository.save(recruitmentForm);

        return recruitmentForm.getId();
    }

}
