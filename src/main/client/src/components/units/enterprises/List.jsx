import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import Profile from "./Profile";
import TitleSection from "components/commons/TitleSection";
import { Section } from "./List.style";

function List({ bgColor, endPoint }) {
  const [initialState, dispatch] = useStateValue();
  const [enterprise, setEnterprise] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      dispatch({
        type: `Delete`,
      });
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // 데이터를 shuffle 한다면
  // const shuffle = enterprise.sort(() => Math.random() - 0.5);

  if (enterprise?.length) {
    return (
      <Section bgColor={bgColor}>
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
  } else {
    return (
      <Section bgColor={bgColor}>
        <div style={{ width: "100%" }}>
          <TitleSection padding={"80px"} mediumOne={"해당 사항이 없습니다."} />
        </div>
      </Section>
    );
  }
}

export default List;
