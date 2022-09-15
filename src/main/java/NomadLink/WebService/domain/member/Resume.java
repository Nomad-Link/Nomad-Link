package NomadLink.WebService.domain.member;

import NomadLink.WebService.file.UploadFile;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Resume { // 이력서 엔티티

    @Id
    @GeneratedValue
    @Column(name = "resume_id")
    private Long id;

    @Embedded
    private UploadFile attachFile; // 이력서 사진
    private String realName; // 개발자의 실제 이름
    private String phoneNumber;
    private String email;
    private String age;
    private Gender gender;

    @Lob
    private String developerIntroduction;

    private String githubUrl;
    private String blogUrl;
    private String portfolioUrl;

    @Enumerated(EnumType.STRING)
    private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)

    @Enumerated(EnumType.STRING)
    private Nation nation;

    @Enumerated(EnumType.STRING)
    private EmployeeType employeeType;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "resume")
    private List<TechStack> techStacks = new ArrayList<>();

    //== 연관관계 편의 메서드==// (양방향 연관관계인 경우에만 사용)
    public void setMember(Member member) {
        this.member = member;
        member.setResume(this);
    }

    //== 연관관계 편의 메서드==// (양방향 연관관계인 경우에만 사용)
    public void setTechStack(TechStack techStack) {
        techStacks.add(techStack);
        techStack.setResume(this);
    }

}
