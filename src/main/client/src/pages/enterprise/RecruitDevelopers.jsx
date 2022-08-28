import { Main } from "styles/Pages";
import Population from "components/units/developers/Population";
import ParamInput from "components/units/developers/ParamInput";
import ParamHashtag from "components/units/developers/ParamHashtag";
import DeveloperList from "components/units/developers/DeveloperList";

function RecruitDevelopers() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
