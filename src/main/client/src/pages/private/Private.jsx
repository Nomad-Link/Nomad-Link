import { MainWide } from "styles/Pages";
import Slide from "components/units/enterprises/Slide";
import List from "components/units/enterprises/List";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";
import BannerSlim from "components/commons/BannerSlim";

function Private() {
  return (
    <MainWide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"개인 서비스 : "} />
      <BannerSlim
        bgColor={"#B2EBF4"}
        lineOne={"아직 이력서 작성은 안하셨나요?"}
        button={"이력서 작성하기"}
        link={"mypage/resume/save"}
      />
      <Slide />
      <ContentHeader title="현재 채용중인 기업" button={false} />
      <List />
    </MainWide>
  );
}

export default Private;



// /api/resume/${cookies.id}