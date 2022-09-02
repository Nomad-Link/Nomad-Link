import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import Form from "components/units/resume/Form";

function Resume() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 저장 : "} />
      <Form type="save" title="저장" url="/api/mypage/resume" />
    </Main>
  );
}

export default Resume;
