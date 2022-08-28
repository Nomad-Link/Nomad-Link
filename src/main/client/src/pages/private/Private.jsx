import { Main } from "styles/Pages";
import Slide from "components/units/enterprises/Slide";
import EnterpriseList from "components/units/enterprises/EnterpriseList";

function Private() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <br />
      <br />
      <h1>개인 서비스 홈 입니다</h1>
      <br />
      <br />
      <Slide />
      <EnterpriseList />
    </Main>
  );
}

export default Private;
