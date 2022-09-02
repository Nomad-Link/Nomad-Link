import { post } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Section,
  InputDiv,
  Label,
  Input,
  Error,
  SendButton,
  RadioInput,
} from "./RegisterForm.style";

function RegisterForm() {
  const [idOver, setIdOver] = useState(false);
  const [passwdOver, setPasswdIdOver] = useState(false);
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
      nation: data.nation,
    };
    formData(registerRequestDto);
  };

  async function formData(data) {
    const url = "/api/register";

    try {
      const response = await post(url, data);
      console.log(response);
      window.location.replace("/"); // 예정 - 회원가입 성공 컴포넌트로 보내기.
    } catch (error) {
      let errCode = error.response.data.errorMessage;
      setIdOver(false);
      setPasswdIdOver(false);
      if (errCode === "중복된 아이디가 존재합니다.") {
        setIdOver(true);
      } else if (
        errCode ===
        "비밀번호는 4~15자리의 숫자,문자,특수문자로 이루어져야합니다."
      ) {
        setPasswdIdOver(true);
      } else {
        console.log(errCode);
      }
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
            style={errors.nation ? { border: "2px solid #ff0000" } : {}}
            {...register("nation", { required: true })}
          />
          {errors.nation && <Error>국가를 입력해 주세요.</Error>}
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
            style={
              errors.userId || idOver ? { border: "2px solid #ff0000" } : {}
            }
            {...register("userId", { required: true })}
          />
          {errors.userId && <Error>아이디를 입력해 주세요.</Error>}
          {idOver && <Error>중복된 아이디가 존재합니다.</Error>}
        </InputDiv>
        <InputDiv>
          <Label>비밀번호</Label>
          <Input
            type="password"
            style={
              errors.password || passwdOver
                ? { border: "2px solid #ff0000" }
                : {}
            }
            {...register("password", { required: true })}
          />
          {errors.password && <Error>비밀번호를 입력해 주세요.</Error>}
          {passwdOver && (
            <Error>
              비밀번호는 4~15자리의 숫자,문자,특수문자로 이루어져야합니다.
            </Error>
          )}
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
        <InputDiv>
          <Label>경력</Label>
          <div>
            <RadioInput
              {...register("annual", { required: true })}
              type="radio"
              name="annual"
              value="ZEROTOONE"
            />
            0-1
            <RadioInput
              {...register("annual", { required: true })}
              type="radio"
              name="annual"
              value="TWOTOFOUR"
            />
            2-4
            <RadioInput
              {...register("annual", { required: true })}
              type="radio"
              name="annual"
              value="FIVETOSEVEN"
            />
            5-7
            <RadioInput
              {...register("annual", { required: true })}
              type="radio"
              name="annual"
              value="EIGHTTOTEN"
            />
            8-10
            <RadioInput
              {...register("annual", { required: true })}
              type="radio"
              name="annual"
              value="MORETHANTEN"
            />
            10 +
          </div>
          <Error>
            {errors.annual?.type === "required" && "경력을 선택해 주세요."}
          </Error>
        </InputDiv>
        <SendButton type="submit" value="가입하기" />
      </form>
    </Section>
  );
}

export default RegisterForm;
