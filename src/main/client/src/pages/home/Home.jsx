import { MainWide } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import TitleSection from "components/commons/TitleSection";
import BannerFat from "components/commons/BannerFat";

function Home() {
  return (
    <MainWide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={""} />
      <section
        style={{ width: "1000px", justifyContent: "center", margin: "auto" }}
      >
        <TitleSection
          padding={"100px"}
          largeOne={"Nomad Link에 오신 것을 환영합니다"}
          mediumOne={"재택 근무와 기업 간의 원활한 매칭을 도와드립니다"}
        />
      </section>
      <BannerFat
        bgColor={"#D5FF72"}
        lineOne={"개인 서비스"}
        lineTwo={"해외 개발자의 적응을 돕기 위한 서비스도 제공"}
        lineThree={"기업과 개발자 간 협업을 위한 메타버스 원격 사무실 제공"}
        button={"바로가기"}
        link={"private"}
      />
      <BannerFat
        bgColor={"#9DCFFF"}
        lineOne={"기업 서비스"}
        lineTwo={"Nomad Link 플랫폼을 통해 개발자를 직접 구인"}
        lineThree={
          "대리 구인 폼 작성을 통해 Nomad Link가 대신 회사에 적합한 개발자를 선별하여 매칭"
        }
        button={"바로가기"}
        link={"enterprise"}
      />
    </MainWide>
  );
}

export default Home;
