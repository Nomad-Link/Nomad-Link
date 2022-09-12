import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import Profile from "./Profile";
import { Section } from "./List.style";

function List({ endPoint }) {
  const [initialState] = useStateValue();
  const [enterprise, setEnterprise] = useState([]);

  useEffect(() => {
    const url = `/api/private/employ/enterprises/${endPoint}`;
    axios
      .get(url, {
        params: {
          role: initialState.role,
          employeeType: initialState.employeeType,
        },
      })
      .then((response) => setEnterprise(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState]);

  console.log(JSON.stringify(enterprise, null, 3));

  // 데이터를 shuffle 한다면
  // const shuffle = enterprise.sort(() => Math.random() - 0.5);

  return (
    <Section>
      {enterprise.map((m, indexA) => {
        return (
          <Profile
            key={indexA}
            id={m.id}
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

export default List;
