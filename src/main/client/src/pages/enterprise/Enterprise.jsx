import { MainWide } from "styles/Pages";
import { useTheme } from "store/ThemeProvider";
import HelmetAsync from "hooks/HelmetAsync";
import BannerSlim from "components/commons/BannerSlim";
import Information from "components/units/enterprises/Information";
import BannerFat from "components/commons/BannerFat";

function Enterprise() {
  const [ThemeMode] = useTheme();
  
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
        button={">> 폼 작성하기"}
        link={"enterprise/recruit/form"}
      />
      <Information />
      <BannerFat
        bgColor={ThemeMode === "dark" ? "#989898" : "#F1ECE6"}
        textAlign={"right"}
        height={"240px"}
        color={"#030066"}
        lineOne={"메타버스 사무실"}
        button={true}
        buttonName={"바로가기"}
        link={""}
      />
    </MainWide>
  );
}

export default Enterprise;
