import { Main } from "styles/Pages";
import DeveloperList from "components/units/developers/DeveloperList";
import TitleSection from "components/commons/TitleSection";

function RecruitComplete() {
  return (
    <Main>
      <TitleSection
        padding={"100px"}
        mediumOne={"채용공고 전송이 완료되었습니다."}
        mediumTwo={"리크루팅 전문 컨설턴트가 빠른 시간 내에 연락 드리겠습니다."}
        smallOne={"기타 문의 사항은 nomadlink@abc.com 으로 보내주세요."}
      />
      <h3 style={{ padding: "10px" }}>이런 개발자는 어떠세요?</h3>
      <DeveloperList
        endPoint={"complete"}
        bgColor={({ theme }) => theme.bgIndex}
        unitColor={({ theme }) => theme.bgSection}
      />
    </Main>
  );
}

export default RecruitComplete;
