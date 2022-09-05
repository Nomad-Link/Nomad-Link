package NomadLink.WebService.domain.enterprise;

import NomadLink.WebService.domain.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Application {

    @Id
    @GeneratedValue
    @Column(name = "application_id")
    private Long id;

    private String enterpriseName;
    private String enterpriseLocation;
    private String noticeTitle;

    @ManyToOne(fetch = FetchType.LAZY) // OneToOne, ManyToOne은 디폴트가 즉시로딩(EAGER)이기 때문에 지연로딩(LAZY)로 바꾸어준다.
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notice_id")
    private Notice notice;

}
