import { Main, Title } from "../Page.style";
import Procedure from "../../components/commons/Procedure";
import Form from "../../components/units/recruit/Form";

function RecruitForm() {
  return (
    <Main>
      <Title>
        <h2>간편하게 채용공고를 작성해주세요.</h2>
        <h2>리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다.</h2>
      </Title>
      <Procedure />
      <Form />
    </Main>
  );
}
export default RecruitForm;
