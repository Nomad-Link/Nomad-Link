import { Main } from "styles/Pages";
import HelmetAsync from "HelmetAsync";
import ResumeUpdate from "components/units/mypage/ResumeUpdate";

function Resume() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 수정 : "} />
      <ResumeUpdate />
    </Main>
  );
}

export default Resume;
