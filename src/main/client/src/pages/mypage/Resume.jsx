import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import Check from "components/units/resume/Check";
import ContentHeader from "components/commons/ContentHeader";

function Resume() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 : "} />
      <ContentHeader title="이력서" button={false} />
      <Check />
    </Main>
  );
}

export default Resume;
