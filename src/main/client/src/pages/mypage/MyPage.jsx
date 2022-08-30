import { Main } from "styles/Pages";
import HelmetAsync from "HelmetAsync";
import ResumeCheck from "components/units/mypage/ResumeCheck";

function MyPage() {
    return (
        <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HelmetAsync title={"마이페이지 : "} />
        <ResumeCheck />
      </Main>
    );
}

export default MyPage;