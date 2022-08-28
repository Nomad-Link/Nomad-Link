import { post } from "axios";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Logo from "./Logo";
import {
  Section,
  InputDiv,
  Label,
  Input,
  Error,
  SendButton,
} from "./RegisterForm.style";

function RegisterForm() {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const registerRequestDto = {
      userId: data.userId,
      email: data.email,
      password: data.password,
      realName: data.realName,
      phoneNumber: data.phoneNumber,
      annual: data.annual,
    };
    formData(registerRequestDto);
    // navigate("/");
  };

  async function formData(data) {
    const url = "/api/register";

    try {
      const response = await post(url, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Logo fontSize={"30px"} />
        <h2>회원가입</h2> */}
        <br />
        <InputDiv>
          <Label>국가</Label>
          <Input
            style={errors.annual ? { border: "2px solid #ff0000" } : {}}
            {...register("annual", { required: true })}
          />
          {errors.annual && <Error>국가를 입력해 주세요.</Error>}
        </InputDiv>
        <InputDiv>
          <Label>연락처</Label>
          <Input
            style={errors.phoneNumber ? { border: "2px solid #ff0000" } : {}}
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && <Error>연락처를 입력해 주세요.</Error>}
        </InputDiv>
        <InputDiv>
          <Label>아이디</Label>
          <Input
            style={errors.userId ? { border: "2px solid #ff0000" } : {}}
            {...register("userId", { required: true })}
          />
          {errors.userId && <Error>아이디를 입력해 주세요.</Error>}
        </InputDiv>
        <InputDiv>
          <Label>비밀번호</Label>
          <Input
            type="password"
            style={errors.password ? { border: "2px solid #ff0000" } : {}}
            {...register("password", { required: true })}
          />
          {errors.password && <Error>비밀번호를 입력해 주세요.</Error>}
        </InputDiv>
        <InputDiv>
          <Label>이름</Label>
          <Input
            style={errors.realName ? { border: "2px solid #ff0000" } : {}}
            {...register("realName", { required: true })}
          />
          {errors.realName && <Error>이름을 입력해 주세요.</Error>}
        </InputDiv>
        <InputDiv>
          <Label>이메일</Label>
          <Input
            style={errors.email ? { border: "2px solid #ff0000" } : {}}
            {...register("email", { required: true })}
          />
          {errors.email && <Error>이메일을 입력해 주세요.</Error>}
        </InputDiv>
        <SendButton type="submit" value="가입하기" />
      </form>
    </Section>
  );
}

export default RegisterForm;
