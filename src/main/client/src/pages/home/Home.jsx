import EnterpriseList from "components/commons/EnterpriseList";
import { Main } from "pages/Page.style";
import HomeSlide from "./HomeSlide";

function PageHome() {
  return (
    <Main>
        <HomeSlide />
        <EnterpriseList />
    </Main>
  );
}

export default PageHome;
