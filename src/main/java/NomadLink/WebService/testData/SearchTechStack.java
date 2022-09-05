package NomadLink.WebService.testData;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class SearchTechStack {

    @Id
    @GeneratedValue
    @Column(name = "techstack_id")
    private Long id;

    private String techName;

}
