package NomadLink.WebService.service;

import NomadLink.WebService.domain.RecruitmentForm;
import NomadLink.WebService.repository.RecruitmentFormRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RecruitmentFormService {

    private final RecruitmentFormRepository recruitmentFormRepository;

    @Transactional
    public Long enroll(RecruitmentForm recruitmentForm) {
        recruitmentFormRepository.save(recruitmentForm);

        return recruitmentForm.getId();
    }

}
