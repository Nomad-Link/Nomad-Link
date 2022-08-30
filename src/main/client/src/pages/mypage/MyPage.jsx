import { Main } from "styles/Pages";
import HelmetAsync from "HelmetAsync";

function MyPage() {
    return (
        <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HelmetAsync title={"마이페이지 : "} />
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
        <h1>마이페이지</h1>
      </Main>
    );
}

export default MyPage;