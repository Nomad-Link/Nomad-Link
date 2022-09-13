import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import Profile from "./Profile";
import { Section } from "./List.style";

function List({ endPoint, bgColor, unitColor }) {
  const [initialState, dispatch] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      dispatch({
        type: `Delete`,
      });
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            key={indexA}
            unitColor={unitColor}
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
