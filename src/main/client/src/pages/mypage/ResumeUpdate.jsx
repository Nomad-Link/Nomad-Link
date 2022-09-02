import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import { useCookies } from "react-cookie";
import Form from "components/units/resume/Form";

function Resume() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 수정 : "} />
      <Form type="update" title="수정" url={`/api/mypage/resume/update/${cookies.id}`} />
    </Main>
  );
}

export default Resume;
