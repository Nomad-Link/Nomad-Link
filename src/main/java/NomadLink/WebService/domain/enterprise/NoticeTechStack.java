package NomadLink.WebService.domain.enterprise;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@Table(name = "NOTICE_TECHSTACKS")
public class NoticeTechStack { // 기업 구인글의 기술스택 엔티티

    @Id
    @GeneratedValue
    @Column(name = "techstack_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notice_id")
    private Notice notice;

    private String techName;

}
