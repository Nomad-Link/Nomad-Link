package NomadLink.WebService.api;

import NomadLink.WebService.domain.Annual;
import NomadLink.WebService.domain.RecruitmentForm;
import NomadLink.WebService.service.RecruitmentFormService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class RecruitmentFormApiController {

    private final RecruitmentFormService recruitmentFormService;

    @PostMapping("/api/enterprise/recruit/form")
    public RecruitmentFormResponseDto saveRecruitForm(@RequestBody @Valid RecruitmentFormRequestDto recruitmentFormRequestDto) {
        RecruitmentForm recruitmentForm = new RecruitmentForm();

        recruitmentForm.setCompanyName(recruitmentFormRequestDto.getCompanyName());
        recruitmentForm.setManagerName(recruitmentFormRequestDto.getManagerName());
        recruitmentForm.setManagerPhoneNumber(recruitmentFormRequestDto.getManagerPhoneNumber());
        recruitmentForm.setManagerEmail(recruitmentFormRequestDto.getManagerEmail());
        recruitmentForm.setRecruitmentPosition(recruitmentFormRequestDto.getRecruitmentPosition());
        recruitmentForm.setProjectDescription(recruitmentFormRequestDto.getProjectDescription());
        recruitmentForm.setRecruitmentType(recruitmentFormRequestDto.getRecruitmentType());
        recruitmentForm.setRoleDescription(recruitmentFormRequestDto.getRoleDescription());
        recruitmentForm.setMinimumAnnual(recruitmentFormRequestDto.getMinimumAnnual());
        recruitmentForm.setEssentialSkillStack(recruitmentFormRequestDto.getEssentialSkillStack());
        recruitmentForm.setOptionalSkillStack(recruitmentFormRequestDto.getOptionalSkillStack());
        recruitmentForm.setKeywords(recruitmentFormRequestDto.getKeywords());
        recruitmentForm.setMaximumSalary(recruitmentFormRequestDto.getMaximumSalary());
        recruitmentForm.setEtcComment(recruitmentFormRequestDto.getEtcComment());

        recruitmentFormService.enroll(recruitmentForm);

        return new RecruitmentFormResponseDto(recruitmentFormRequestDto.getCompanyName());
    }

    @Data
    static class RecruitmentFormRequestDto { // Request DTO ...

        private String companyName; // 회사명
        private String managerName; // 담당자명
        private String managerPhoneNumber; // 담당자 전화번호
        private String managerEmail; // 담당자 이메일
        private String recruitmentPosition; // 채용 직책
        private String projectDescription; // 프로젝트 설명
        private String recruitmentType; // 채용 유형
        private String roleDescription; // 역할 설명
        @Enumerated(EnumType.STRING)
        private Annual minimumAnnual; // 최소 연차
        private String essentialSkillStack; // 필수 기술 스택
        private String optionalSkillStack; // 선택적 기술 스택
        private String keywords; // 채용 공고상 키워드
        private String maximumSalary; // 연봉 상한선
        private String etcComment; // 기타 코멘트

    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class RecruitmentFormResponseDto {
        private String companyName;
    }

}
