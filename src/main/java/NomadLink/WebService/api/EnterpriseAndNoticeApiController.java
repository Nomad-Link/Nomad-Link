package NomadLink.WebService.api;

import NomadLink.WebService.domain.enterprise.Enterprise;
import NomadLink.WebService.domain.enterprise.Notice;
import NomadLink.WebService.domain.member.Annual;
import NomadLink.WebService.domain.member.TechStack;
import NomadLink.WebService.repository.EnterpriseRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class EnterpriseAndNoticeApiController {

    private final EnterpriseRepository enterpriseRepository;

    @GetMapping("/")
    public List<EnterpriseAndNoticeDto> allEnterprise() {
        List<Enterprise> enterprises = enterpriseRepository.findAll();

        List<EnterpriseAndNoticeDto> collect = enterprises.stream()
                .map(enterprise -> new EnterpriseAndNoticeDto(enterprise))
                .collect(Collectors.toList());

        return collect;
    }

    @Data
    static class EnterpriseAndNoticeDto {

        private String enterpriseName;
        private String enterpriseLocation;
        private List<NoticeResponseDto> notices;

        public EnterpriseAndNoticeDto(Enterprise enterprise) {
            enterpriseName = enterprise.getEnterpriseName();
            enterpriseLocation = enterprise.getEnterpriseLocation();

            notices = enterprise.getNotices().stream()
                    .map(notice -> new NoticeResponseDto(notice))
                    .collect(Collectors.toList());
        }

    }

    @Data
    static class NoticeResponseDto {

        private String title;
        private Annual annual;
        private List<TechStackResponseDto> techStacks;

        public NoticeResponseDto(Notice notice) {
            title = notice.getTitle();
            annual = notice.getAnnual();

            techStacks = notice.getTechStacks().stream()
                    .map(techStack -> new TechStackResponseDto(techStack))
                    .collect(Collectors.toList());
        }

    }

    @Data
    static class TechStackResponseDto {
        private String techName;

        public TechStackResponseDto(TechStack techStack) {
            techName = techStack.getTechName();
        }

    }

}
