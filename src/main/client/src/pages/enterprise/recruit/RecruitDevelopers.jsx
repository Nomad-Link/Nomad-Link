import { Main } from "pages/Page.style";
import Population from "components/units/developers/Population";
import ParamInput from "components/units/developers/ParamInput";
import ParamHashtag from "components/units/developers/ParamHashtag";
import DeveloperList from "components/commons/DeveloperList";

function RecruitDevelopers() {
  return (
    <Main>
      <Population />
      <ParamInput />
      <ParamHashtag />
      <DeveloperList
        endPoint={"developers"}
        bgColor={({ theme }) => theme.bgSection}
        unitColor={({ theme }) => theme.bgUnit}
      />
    </Main>
  );
}

export default RecruitDevelopers;
