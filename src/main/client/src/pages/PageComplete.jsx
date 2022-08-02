import { useNavigate } from "react-router-dom";
import { Main, Title, Button } from "./Page.style";

function PageComplete() {
  const navigate = useNavigate();

  return (
    <Main>
      <Title>
        <h2>채용공고 전송이 완료되었습니다.</h2>
        <h2>리크루팅 전문 컨설턴트가 빠른 시간 내에 연락 드리겠습니다.</h2>
      </Title>
      <Button onClick={() => navigate("/")}>홈 화면으로 이동</Button>
    </Main>
  );
}

export default PageComplete;
