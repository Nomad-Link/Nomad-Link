import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import Profile from "./Profile";
import { Section } from "./List.style";

function List({ endPoint, bgColor, unitColor }) {
  const [initialState] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = `/api/enterprise/recruit/${endPoint}`;
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
          <Profile
            unitColor={unitColor}
            key={indexA}
            realName={m.realName}
            nation={m.nation}
            role={m.role}
            techStacks={m.techStacks}
          />
        );
      })}
    </Section>
  );
}

export default List;
