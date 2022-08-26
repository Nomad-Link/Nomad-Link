import { Section } from "./EnterpriseList.style";
import { useState, useEffect } from "react";
import axios from "axios";
import EnterpriseProfile from "./EnterpriseProfile";

function EnterpriseList() {
  const [enterprise, setEnterprise] = useState([]);

  useEffect(() => {
    const url = `/api/private/employ/enterprises`;
    axios
      .get(url)
      .then((response) => setEnterprise(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(JSON.stringify(enterprise, null, 3));

  // 데이터를 shuffle 한다면
  // const shuffle = enterprise.sort(() => Math.random() - 0.5);

  return (
    <Section>
      {enterprise.map((m, indexA) => {
        return (
          <EnterpriseProfile
            key={indexA}
            enterpriseName={m.enterpriseName}
            title={m.title}
            techStacks={m.techStacks}
            enterpriseLocation={m.enterpriseLocation}
            annual={m.annual}
          />
        );
      })}
    </Section>
  );
}

export default EnterpriseList;
