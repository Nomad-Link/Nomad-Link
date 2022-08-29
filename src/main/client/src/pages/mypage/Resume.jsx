import { Main } from "styles/Pages";
import HelmetAsync from "HelmetAsync";
import ResumeForm from "components/units/mypage/ResumeForm";

function Resume() {
    return (
        <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HelmetAsync title={"이력서 : "} />
        <ResumeForm />
      </Main>
    );
}

export default Resume;