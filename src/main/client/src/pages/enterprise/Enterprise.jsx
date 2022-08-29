import { Main } from "styles/Pages";
import FormOpenButton from "components/commons/FormOpenButton";
import HelmetAsync from "HelmetAsync";

function Enterprise() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"기업 서비스 : "} />
      <div style={{ padding: "200px" }}>
        <h1>기업 서비스 홈 입니다</h1>
        <br />
        <br />
        <br />
        <br />
        <h1>Page Enterprise</h1>
        <br />
        <h1>개발자 목록 확인하기</h1>
        <br />
        <FormOpenButton />
      </div>
    </Main>
  );
}

export default Enterprise;
