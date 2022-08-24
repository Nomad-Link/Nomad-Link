import { Section, Input, SendDiv, Button } from "./LoginForm.style";
import Logo from "./Logo";
import { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
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
      console.log(response);
    } catch (error) {
      console.error(error);
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
          <Button>회원가입</Button>
        </SendDiv>
        <h1>{userId}</h1>
        <h1>{password}</h1>
      </div>
    </Section>
  );
}

export default LoginForm;
