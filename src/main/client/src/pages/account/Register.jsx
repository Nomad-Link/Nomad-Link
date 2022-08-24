import { Main } from "styles/Pages";
import RegisterForm from "components/commons/RegisterForm";
import TitleSection from "components/commons/TitleSection";

function Register() {
  return (
    <Main>
      <TitleSection padding={"40px"} mediumOne={"회원가입"} />
      <RegisterForm />
    </Main>
  );
}

export default Register;
