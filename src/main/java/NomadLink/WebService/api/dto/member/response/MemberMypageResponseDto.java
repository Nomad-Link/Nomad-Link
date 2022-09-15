package NomadLink.WebService.api.dto.member.response;

import NomadLink.WebService.domain.enterprise.Application;

public class MemberMypageResponseDto { // 마이페이지 정보 response dto

    private String enterpriseName;
    private String enterpriseLocation;
    private String noticeTitle;
    private Long noticeId;

    public MemberMypageResponseDto(Application application) { // 마이페이지 정보 response dto
        enterpriseName = application.getEnterpriseName();
        enterpriseLocation = application.getEnterpriseLocation();
        noticeTitle = application.getNoticeTitle();
        noticeId = application.getNotice().getId();
    }


}
