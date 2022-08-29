package NomadLink.WebService.domain.member;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Resume {

    @Id
    @GeneratedValue
    @Column(name = "resume_id")
    private Long id;

    private String realName; // 개발자의 실제 이름
    private String phoneNumber;
    private String email;
    private String age;
    private Gender gender;
    private String githubUrl;
    private String blogUrl;
    private String portfolioUrl;

    @Lob
    private String techStacks;

    @Enumerated(EnumType.STRING)
    private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)

    @Enumerated(EnumType.STRING)
    private Nation nation;

    @Enumerated(EnumType.STRING)
    private EmployeeType employeeType;

    @OneToOne(mappedBy = "resume", fetch = FetchType.LAZY)
    private Member member;

}
