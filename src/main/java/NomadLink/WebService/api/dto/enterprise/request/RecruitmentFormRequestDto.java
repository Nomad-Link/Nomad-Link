package NomadLink.WebService.api.dto.enterprise.request;

import NomadLink.WebService.domain.member.Annual;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
public class RecruitmentFormRequestDto { // 개발자 구인 폼 등록시 이용할 request dto

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
