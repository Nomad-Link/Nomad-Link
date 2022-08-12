import { Section } from "./List.style";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../../../store/StateProvider";
import EmployeeProfile from "../../commons/EmployeeProfile";

function List() {
  const [initialState] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/enterprise/recruit/developers`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(user);

  const testMap = user.filter((x) =>
    initialState.employeeType === null
      ? {}
      : x.employeeType === initialState.employeeType
  );

  return (
    <Section>
      <p style={{ color: "white" }}>
        {JSON.stringify(initialState.techStacks)}
      </p>
      {testMap.map((m, indexA) => {
        return (
          <EmployeeProfile
            key={indexA}
            realName={m.realName}
            nation={m.nation}
            role={m.role}
            techStacks={m.techStacks}
          />
        );
      })}
      <textarea
        rows={16}
        cols={90}
        value={JSON.stringify(initialState, null, 5)}
        readOnly={true}
      />
      <textarea
        rows={45}
        cols={100}
        value={JSON.stringify(user, null, 3)}
        readOnly={true}
      />
    </Section>
  );
}

export default List;
