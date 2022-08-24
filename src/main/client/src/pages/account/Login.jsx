import { Main } from "styles/Pages";
import LoginForm from "components/commons/LoginForm";
import TitleSection from "components/commons/TitleSection";

function Login() {
  return (
    <Main>
      <TitleSection padding={"40px"} mediumOne={"로그인"} />
      <LoginForm />
    </Main>
  );
}

export default Login;
