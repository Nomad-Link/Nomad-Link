import { Section, Input, SendDiv, Button } from "./RegisterForm.style";
import Logo from "./Logo";

function RegisterForm() {
  return (
    <Section>
      <div style={{ marginTop: "70px" }}>
        <Logo fontSize={"30px"} />
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <SendDiv>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </SendDiv>
      </div>
    </Section>
  );
}

export default RegisterForm;
