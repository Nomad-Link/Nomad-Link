import { Main } from "styles/Pages";
import Slide from "components/units/enterprises/Slide";
import List from "components/units/enterprises/List";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";

function Private() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"개인 서비스 : "} />
      <Slide />
      <ContentHeader title="현재 채용중인 기업" button={false} />
      <List />
    </Main>
  );
}

export default Private;



// /api/resume/${cookies.id}