import { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from "./Logo";
import { Section, Input, SendDiv, Button } from "./LoginForm.style";

function LoginForm() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  function handleId(e) {
    setUserId(e.target.value);
  }
  function handlePwd(e) {
    setPassword(e.target.value);
  }

  async function postLogin(userId, password) {
    const url = "/api/login";

    try {
      const response = await post(url, {
        userId: userId,
        password: password,
      });
      // console.log(response);
      // console.log(response.data);
      setCookie("id", response.data);
    } catch (error) {
      console.error(error);
      console.error(error.message);
    }
  }

  const onClick = () => {
    postLogin(userId, password);
    navigate("/");
  };

  return (
    <Section>
      <div style={{ marginTop: "70px" }}>
        <Logo fontSize={"30px"} />
        <Input placeholder="아이디" onChange={handleId} />
        <Input type="password" placeholder="비밀번호" onChange={handlePwd} />
        <SendDiv>
          <Button onClick={() => onClick()}>로그인</Button>
          <Button onClick={() => navigate("/register")}>회원가입</Button>
        </SendDiv>
      </div>
    </Section>
  );
}

export default LoginForm;
