package NomadLink.WebService.api.member;

import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.enterprise.NoticeTechStack;
import NomadLink.WebService.domain.member.Annual;
import NomadLink.WebService.domain.member.EmployeeType;
import NomadLink.WebService.domain.member.Role;
import NomadLink.WebService.domain.member.TechStack;
import NomadLink.WebService.repository.member.NoticeRepository;
import NomadLink.WebService.repository.member.NoticeSearchOption;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class EnterpriseAndNoticeApiController {

    private final NoticeRepository noticeRepository;

    @GetMapping("/api/private/employ/enterprises/part") // 개인 서비스에서 회사 목록을 보여주는 페이지(6개만)
    public List<NoticeResponseDto> sixEnterprise() {
        List<Notice> notices = noticeRepository.findSix();

        List<NoticeResponseDto> collect = notices.stream()
                .map(notice -> new NoticeResponseDto(notice))
                .collect(Collectors.toList());

        return collect;
    }

    @GetMapping("/api/private/employ/enterprises") // 개인 서비스에서 회사 목록을 보여주는 페이지(전체)
    public List<NoticeResponseDto> allEnterprise(@RequestParam("role") @Nullable Role role, @RequestParam("employeeType") @Nullable EmployeeType employeeType) {
        NoticeSearchOption noticeSearchOption = new NoticeSearchOption(role, employeeType);

        List<Notice> notices = noticeRepository.findByOption(noticeSearchOption);

        List<NoticeResponseDto> collect = notices.stream()
                .map(notice -> new NoticeResponseDto(notice))
                .collect(Collectors.toList());

        return collect;
    }

    @Data
    static class NoticeResponseDto { // 구인글 response dto

        private Long id;
        private String enterpriseName;
        private String title;
        private List<TechStackResponseDto> techStacks;
        private String enterpriseLocation;
        private Annual annual;

        public NoticeResponseDto(Notice notice) {
            id = notice.getId();
            enterpriseName = notice.getEnterpriseName();
            title = notice.getTitle();
            enterpriseLocation = notice.getEnterpriseLocation();
            annual = notice.getAnnual();

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
