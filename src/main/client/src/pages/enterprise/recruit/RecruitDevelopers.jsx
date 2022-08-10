import { Main } from "../../Page.style";
import Population from "../../../components/units/developers/Population";
import ParamInput from "../../../components/units/developers/ParamInput";
import ParamHashtag from "../../../components/units/developers/ParamHashtag";
import List from "../../../components/units/developers/List";

function RecruitDevelopers() {
  return (
    <Main>
      <Population />
      <ParamInput />
      <ParamHashtag />
      <List />
    </Main>
  );
}

export default RecruitDevelopers;
