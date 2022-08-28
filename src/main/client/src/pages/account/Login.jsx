import { Main } from "styles/Pages";
import LoginForm from "components/commons/LoginForm";
import TitleSection from "components/commons/TitleSection";

function Login() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleSection padding={"40px"} mediumOne={"로그인"} />
      <LoginForm />
    </Main>
  );
}

export default Login;
