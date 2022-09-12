import { useState } from "react";
import { useStateValue } from "store/StateProvider";
import { TbSearch } from "react-icons/tb";
import { Section, Select } from "./ParamInput.style";

function ParamInput() {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [role, setRole] = useState(null);
  const [employeeType, setEmployeeType] = useState(null);

  const handleNation = (e) => {
    if (e.target.value === "null") {
      setRole(null);
    } else {
      setRole(e.target.value);
    }
  };
  const handleType = (e) => {
    if (e.target.value === "null") {
      setEmployeeType(null);
    } else {
      setEmployeeType(e.target.value);
    }
  };

  function SetInput() {
    dispatch({
      type: `SetInputEnt`,
      role: role,
      employeeType: employeeType,
    });
  }

  return (
    <Section>
      <Select onChange={handleNation}>
        <option value="null">-- 전체 분야 --</option>
        <option value="SERVER">서버</option>
        <option value="FRONTEND">프론트엔드</option>
        <option value="ANDROID">안드로이드</option>
        <option value="IOS">IOS</option>
        <option value="AI">AI</option>
      </Select>
      <Select onChange={handleType}>
        <option value="null">-- 전체 유형 --</option>
        <option value="FULLTIME">정규직</option>
        <option value="PARTTIME">계약직</option>
        <option value="FREELANCER">프리랜서</option>
      </Select>
      <TbSearch
        className="react-search-param-icon"
        onClick={() => SetInput()}
      />
      <p>{JSON.stringify(initialState, null, 5)}</p>
    </Section>
  );
}

export default ParamInput;
