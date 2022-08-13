import { Section } from "./DeveloperList.style";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../../store/StateProvider";
import EmployeeProfile from "./EmployeeProfile";

function DeveloperList({bgColor, unitColor}) {
  const [initialState] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/enterprise/recruit/developers`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(user);

  // const testMap = user.filter((x) =>
  //   initialState.nation === null ? {} : x.nation === initialState.nation
  // );

  return (
    <Section bgColor={bgColor}>
      <p>{JSON.stringify(initialState.techStacks)}</p>
      {user.map((m, indexA) => {
        return (
          <EmployeeProfile
            unitColor={unitColor}
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

export default DeveloperList;
