import { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from "components/commons/Logo";
import { Button } from "styles/Button";
import { Section, Input, SendDiv, Error } from "./LoginForm.style";

function LoginForm() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [idOver, setIdOver] = useState(false);
  const [passwdOver, setPasswdIdOver] = useState(false);

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
      if (errCode === "존재하지 않는 아이디 입니다.") {
        setIdOver(true);
      } else if (errCode === "존재하지 않는 패스워드 입니다.") {
        setPasswdIdOver(true);
      } else {
        console.log(errCode);
      }
    }
  }

  return (
    <Section>
      <div style={{ marginTop: "70px" }}>
        <Logo fontSize={"30px"} />
        <Input placeholder="아이디" onChange={handleId} />
        <div style={{ height: "16px" }}>
          {idOver && <Error>존재하지 않는 아이디 입니다.</Error>}
        </div>
        <Input type="password" placeholder="비밀번호" onChange={handlePwd} />
        <div style={{ height: "16px" }}>
          {passwdOver && <Error>존재하지 않는 패스워드 입니다.</Error>}
        </div>
        <SendDiv>
          <Button onClick={() => PostLogin()}>로그인</Button>
          <Button onClick={() => navigate("/register")}>회원가입</Button>
        </SendDiv>
      </div>
    </Section>
  );
}

export default LoginForm;
