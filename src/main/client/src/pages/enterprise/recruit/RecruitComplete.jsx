import { Main, Title, Text } from "pages/Page.style";
import DeveloperList from "components/commons/DeveloperList";

function RecruitComplete() {
  return (
    <Main>
      <Title style={{paddingBottom: "30px"}}>
        <h2>채용공고 전송이 완료되었습니다.</h2>
        <h2>리크루팅 전문 컨설턴트가 빠른 시간 내에 연락 드리겠습니다.</h2>
        <br />
        <p>기타 문의 사항은 nomadlink@abc.com 으로 보내주세요.</p>
      </Title>
      <Text>이런 개발자는 어떠세요?</Text>
      <DeveloperList endPoint={"complete"} bgColor={"#FFF"} unitColor={"#F1F1F1"} />
    </Main>
  );
}

export default RecruitComplete;
