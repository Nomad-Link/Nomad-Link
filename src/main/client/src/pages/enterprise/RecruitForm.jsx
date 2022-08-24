import { Main } from "styles/Pages";
import Procedure from "components/units/recruit/Procedure";
import Form from "components/units/recruit/Form";
import TitleSection from "components/commons/TitleSection";

function RecruitForm() {
  return (
    <Main>
      <TitleSection
        padding={"100px"}
        mediumOne={"간편하게 채용공고를 작성해주세요."}
        mediumTwo={
          "리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다."
        }
      />
      <Procedure />
      <Form />
    </Main>
  );
}
export default RecruitForm;
