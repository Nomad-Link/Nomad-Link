import { Section } from "./List.style";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../../../store/StateProvider";

function List() {
  const [initialState] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/enterprise/recruit/developers`)
      .then((response) => setUser(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(user);

  const ResultMap = user.filter((x) =>
    initialState.employeeType === null
      ? {}
      : x.employeeType === initialState.employeeType
  );

  return (
    <Section>
      <p style={{ color: "white" }}>
        {JSON.stringify(initialState.techStacks)}
      </p>
      <div>
        {ResultMap.map((m, index) => {
          return (
            <div key={index} style={{ margin: "20px" }}>
              <p>annual: {m.annual}</p>
              <p>employeeType: {m.employeeType}</p>
              <p>nation: {m.nation}</p>
              <p>realName: {m.realName}</p>
              <p>role: {m.role}</p>
              <p>
                techStacks: {m.techStacks[0].techName},{" "}
                {m.techStacks[1].techName}, {m.techStacks[2].techName},
                {m.techStacks[3].techName}, {m.techStacks[4].techName}
              </p>
            </div>
          );
        })}
      </div>
      <textarea
        rows={35}
        cols={100}
        value={JSON.stringify(user, null, 3)}
        readOnly={true}
      />
    </Section>
  );
}

export default List;
