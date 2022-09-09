import { MainWide } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import BannerSlim from "components/commons/BannerSlim";
import Information from "components/units/enterprises/Information";

function Enterprise() {
  return (
    <MainWide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"기업 서비스 : "} />
      <BannerSlim
        bgColor={"#B2EBF4"}
        lineOne={"개발자 대리 구인 폼을 작성해 보세요. 적합한 개발자를 선별하여 매칭시켜 드립니다."}
        button={"폼 작성하기"}
        link={"enterprise/recruit/form"}
      />
      <Information />
    </MainWide>
  );
}

export default Enterprise;
