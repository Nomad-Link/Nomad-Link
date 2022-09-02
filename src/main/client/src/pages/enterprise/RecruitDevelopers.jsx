import { Main } from "styles/Pages";
import Population from "components/units/developers/Population";
import ParamInput from "components/units/developers/ParamInput";
import ParamHashtag from "components/units/developers/ParamHashtag";
import List from "components/units/developers/List";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";

function RecruitDevelopers() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"기업 서비스 : "} />
      <ContentHeader title="개발자 리스트" button={true} />
      <Population />
      <ParamInput />
      <ParamHashtag />
      <List
        endPoint={"developers"}
        bgColor={({ theme }) => theme.bgSection}
        unitColor={({ theme }) => theme.bgUnit}
      />
    </Main>
  );
}

export default RecruitDevelopers;
