import { Section } from "./DeveloperList.style";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import DeveloperProfile from "./DeveloperProfile";

function DeveloperList({ endPoint, bgColor, unitColor }) {
  const [initialState] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = `/enterprise/recruit/${endPoint}`;
    axios
      .get(url, {
        params: {
          nation: initialState.nation,
          employeeType: initialState.employeeType,
          techStack: initialState.searchParams,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState]);
  
  return (
    <Section bgColor={bgColor}>
      {user.map((m, indexA) => {
        return (
          <DeveloperProfile
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
