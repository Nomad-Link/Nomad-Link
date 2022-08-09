import { Section, Select, InputSkillSet, muiSearchIcon } from "./ParamInput.style";
import SearchIcon from "@mui/icons-material/Search";

function ParamInput() {
  return (
    <Section>
      <Select name="language">
        <option>국가</option>
        <option>인도</option>
        <option>중국</option>
        <option>베트남</option>
        <option>필리핀</option>
      </Select>
      <Select name="language">
        <option>직원유형</option>
        <option>정규직</option>
        <option>계약직</option>
        <option>프리랜서</option>
      </Select>
      <InputSkillSet placeholder="스킬셋을 입력하세요." />
      <SearchIcon sx={muiSearchIcon} />
    </Section>
  );
}

export default ParamInput;
