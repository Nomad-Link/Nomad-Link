import { Main } from "styles/Pages";

function Home() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ padding: "200px" }}>
        <h1>메인 페이지</h1>
        <br />
        <br />
        <br />
        <button>개인 서비스 이동</button>
        <button>기업 서비스 이동</button>
        <br />
        <br />
        <h1>개발자 현황</h1>
        <br />
        <h1>광고</h1>
        <br />
        <h1>이벤트</h1>
      </div>
    </Main>
  );
}

export default Home;
