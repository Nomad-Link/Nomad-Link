import { Main } from "../../Page.style";
import Population from "../../../components/units/developers/Population";
import ParamInput from "../../../components/units/developers/ParamInput";
import ParamHashtag from "../../../components/units/developers/ParamHashtag";
import DeveloperList from "../../../components/commons/DeveloperList";

function RecruitDevelopers() {
  return (
    <Main>
      <Population />
      <ParamInput />
      <ParamHashtag />
      <DeveloperList bgColor={"#E9E9E9"} unitColor={"#F9F9F9"} />
    </Main>
  );
}

export default RecruitDevelopers;
