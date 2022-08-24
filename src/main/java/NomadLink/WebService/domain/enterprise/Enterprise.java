package NomadLink.WebService.domain.enterprise;

import NomadLink.WebService.domain.member.TechStack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Enterprise {

    @Id
    @GeneratedValue
    @Column(name = "enterprise_id")
    private Long id;

    private String enterpriseName;

    private String enterpriseLocation;

    private String managerPhoneNumber;

    private String managerEmail;

}
