package NomadLink.WebService.domain.member;

import NomadLink.WebService.domain.enterprise.Application;
import NomadLink.WebService.domain.enterprise.Notice;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member { // 회원 엔티티

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String userId; // 로그인시의 아이디
    private String realName; // 개발자의 실제 이름
    private String password;

    @Enumerated(EnumType.STRING)
    private Annual annual; // 개발자 연차 (ex - ZEROTOONE, TWOTOFOUR, FIVETOSEVEN, EIGHTTOTEN, MORETHANTEN)

    private String phoneNumber;
    private String Email;
    private String age;
    private String gender;

    @Enumerated(EnumType.STRING)
    private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)

    @Enumerated(EnumType.STRING)
    private Nation nation;

    @Enumerated(EnumType.STRING)
    private EmployeeType employeeType;

    @OneToOne(mappedBy = "member", fetch = FetchType.LAZY) // 한명의 개발자는 하나의 이력서만을 가질 수 있다.
    private Resume resume;

    @OneToMany(mappedBy = "member")
    private List<TechStack> techStacks = new ArrayList<>(); // 일대다 연관관계 매핑 (한명의 개발자는 여러개의 기술 스택을 가질 수 있다.)

    @OneToMany(mappedBy = "member")
    private List<Application> applications  = new ArrayList<>();

    //== 연관관계 편의 메서드==// (양방향 연관관계인 경우에만 사용)
    public void setTechStack(TechStack techStack) {
        techStacks.add(techStack);
        techStack.setMember(this);
    }

    public void setApplication(Application application) {
        applications.add(application);
        application.setMember(this);
    }

}
