package NomadLink.WebService.domain.enterprise;

import NomadLink.WebService.domain.member.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Notice {

    @Id
    @GeneratedValue
    @Column(name = "notice_id")
    private Long id;

    private String enterpriseName;

    private String enterpriseLocation;

    private String companyIntroduction;

    private String title;

    @Lob
    private String textContent;

    @OneToMany(mappedBy = "notice")
    private List<TechStack> techStacks = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Annual annual;

    @Enumerated(EnumType.STRING)
    private EmployeeType employeeType;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    //== 연관관계 편의 메서드==// (양방향 연관관계인 경우에만 사용)
    public void setTechStack(TechStack techStack) {
        techStacks.add(techStack);
        techStack.setNotice(this);
    }

}
