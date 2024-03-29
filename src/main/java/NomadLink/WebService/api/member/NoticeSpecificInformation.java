package NomadLink.WebService.api.member;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.enterprise.NoticeTechStack;
import NomadLink.WebService.domain.member.Annual;
import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Role;
import NomadLink.WebService.repository.member.NoticeRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class NoticeSpecificInformation {

    private final NoticeRepository noticeRepository;

    @GetMapping("/api/notice/{id}") // 특정 구인글 조회
    public OneNoticeResponseDto getOneNotice(@PathVariable long id) {
        Notice findedNotice = noticeRepository.findOne(id);

        OneNoticeResponseDto oneNoticeResponseDto = new OneNoticeResponseDto();

        oneNoticeResponseDto.setEnterpriseName(findedNotice.getEnterpriseName());
        oneNoticeResponseDto.setEnterpriseLocation(findedNotice.getEnterpriseLocation());
        oneNoticeResponseDto.setCompanyIntroduction(findedNotice.getCompanyIntroduction());
        oneNoticeResponseDto.setTitle(findedNotice.getTitle());
        oneNoticeResponseDto.setTextContent(findedNotice.getTextContent());
        oneNoticeResponseDto.setAnnual(findedNotice.getAnnual());
        oneNoticeResponseDto.setEmployeeType(findedNotice.getEmployeeType());
        oneNoticeResponseDto.setRole(findedNotice.getRole());
        List<TechStackResponseDto> techStacks = findedNotice.getTechStacks().stream()
                            .map(techStack -> new TechStackResponseDto(techStack))
                            .collect(Collectors.toList());
        oneNoticeResponseDto.setTechStacks(techStacks);

        return oneNoticeResponseDto;
    }

    @Data
    @NoArgsConstructor
    static class OneNoticeResponseDto { // 특정 구인글 response dto

        private String enterpriseName;
        private String enterpriseLocation;
        private String companyIntroduction;
        private String title;
        private String textContent;
        private Annual annual;
        private EmployeeType employeeType;
        private Role role;
        private List<TechStackResponseDto> techStacks;

        public OneNoticeResponseDto(Notice notice) {
            enterpriseName = notice.getEnterpriseName();
            enterpriseLocation = notice.getEnterpriseLocation();
            companyIntroduction = notice.getCompanyIntroduction();
            title = notice.getTitle();
            textContent = notice.getTextContent();
            annual = notice.getAnnual();
            employeeType = notice.getEmployeeType();
            role = notice.getRole();

            techStacks = notice.getTechStacks().stream()
                    .map(techStack -> new TechStackResponseDto(techStack))
                    .collect(Collectors.toList());
        }

    }

    @Data
    static class TechStackResponseDto {

        private String techName;

        public TechStackResponseDto(NoticeTechStack techStack) {
            techName = techStack.getTechName();
        }

    }

}
