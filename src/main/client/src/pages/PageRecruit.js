import styled from "styled-components";
import RecruitState from "../components/commons/RecruitState";
import RecruitForm from "../components/units/RecruitForm";

function PageRecruit() {
  return (
    <Main>
      <Title>
        <Text>간편하게 채용공고를 작성해주세요.</Text>
        <Text>리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다.</Text>
      </Title>
      <RecruitState />
      <RecruitForm />
    </Main>
  );
}
const Main = styled.main`
  width: 1000px;
  justify-content: center;
  margin: auto;
`
const Title = styled.section`
  padding: 100px;
  text-align: center;
`;
const Text = styled.h2`
`
export default PageRecruit;
