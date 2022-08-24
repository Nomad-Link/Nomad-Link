import EnterpriseList from "components/units/enterprises/EnterpriseList";
import { Main } from "styles/Pages";
import Slide from "components/units/enterprises/Slide";

function Private() {
  return (
    <Main>
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
