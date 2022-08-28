import { Main } from "styles/Pages";
import RegisterForm from "components/commons/RegisterForm";
import TitleSection from "components/commons/TitleSection";

function Register() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleSection padding={"40px"} mediumOne={"회원가입"} />
      <RegisterForm />
    </Main>
  );
}

export default Register;
