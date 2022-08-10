import { Section } from "./List.style";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../../../store/StateProvider";

function List() {
  const [initialState] = useStateValue();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/enterprise/recruit/developers`, {
        params: {
          techStacks: initialState.techStacks,
          nation: initialState.nation,
          employeeType: initialState.employeeType,
        },
      })
      .then((response) => setUser(response.data.data))
      .catch((error) => console.log(error));
  }, [initialState]);
//
  return (
    <Section>
      <p style={{ color: "white" }}>{JSON.stringify(initialState.techStacks)}</p>
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
