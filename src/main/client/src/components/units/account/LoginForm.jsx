import { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from "components/commons/Logo";
import { InputS, ErrDiv, Error } from "styles/Form";
import { Button } from "styles/Button";
import { Section, Div, BoxFlex } from "./LoginForm.style";

function LoginForm() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [idOver, setIdOver] = useState(false);
  const [passwdOver, setPasswdIdOver] = useState(false);
  const [loginErr, setLoginErr] = useState(false);

  function handleId(e) {
    setUserId(e.target.value);
  }
  function handlePwd(e) {
    setPassword(e.target.value);
  }

  async function PostLogin() {
    const url = "/api/login";

    try {
      const response = await post(url, {
        userId: userId,
        password: password,
      });
      setCookie("id", response.data.userId);
      window.location.replace("/");
    } catch (error) {
      let errCode = error.response.data.errorMessage;
      setIdOver(false);
      setPasswdIdOver(false);
      setLoginErr(false);
      if (errCode === "존재하지 않는 아이디 입니다.") {
        setIdOver(true);
      } else if (errCode === "존재하지 않는 패스워드 입니다.") {
        setPasswdIdOver(true);
      } else {
        setLoginErr(true);
        console.log(errCode);
      }
    }
  }

  return (
    <Section>
      <Div>
        <Logo fontSize={"30px"} />
        <InputS
          style={{ margin: "40px 0 10px" }}
          placeholder="아이디"
          onChange={handleId}
        />
        <ErrDiv>{idOver && <Error>존재하지 않는 아이디 입니다.</Error>}</ErrDiv>
        <InputS
          style={{ margin: "20px 0 10px" }}
          type="password"
          placeholder="비밀번호"
          onChange={handlePwd}
        />
        <ErrDiv>
          {passwdOver && <Error>존재하지 않는 패스워드 입니다.</Error>}
          {loginErr && <Error>오류가 발생했습니다.</Error>}
        </ErrDiv>
        <BoxFlex>
          <Button onClick={() => PostLogin()}>로그인</Button>
          <Button onClick={() => navigate("/register")}>회원가입</Button>
        </BoxFlex>
      </Div>
    </Section>
  );
}

export default LoginForm;
