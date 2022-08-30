import { useState, useEffect } from "react";
import axios, { post } from "axios";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  Section,
  BoxFlex,
  BoxBlock,
  BoxSelect,
  InputDiv,
  Title,
  Label,
  Input,
  Select,
  SendButton,
  Error,
} from "./ResumeForm.style";

function ResumeForm() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [useId, setUseId] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function SelectAge() {
    var arr = [];
    for (var i = 1; i <= 100; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  }

  const getResume = async () => {
    await axios
      .get(`/api/mypage/resume/get/${cookies.id}`)
      .then((res) => setUseId(res.data));
  };

  useEffect(() => {
    getResume();
  }, []);

  console.log(JSON.stringify(useId, null, 3));

  const onSubmit = (data) => {
    const ResumeRequestDto = {
      realName: data.realName,
      age: data.age,
      phoneNumber: data.phoneNumber,
      email: data.email,
      gender: data.gender,
      blogUrl: data.blogUrl,
      portfolioUrl: data.portfolioUrl,
      githubUrl: data.githubUrl,
      role: data.role,
      nation: data.nation,
      employeeType: data.employeeType,
    };
    formData(ResumeRequestDto);
    navigate("/mypage");
  };

  async function formData(data) {
    const url = `/api/mypage/resume/update/${cookies.id}`;

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
        <Title>이력서 수정 : {cookies.id}</Title>
        <BoxBlock>
          <BoxFlex>
            <BoxSelect>
              <Label>국가</Label>
              <Select {...setValue("nation", useId.nation)} {...register("nation")}>
                <option value={null}>-- 전체 국가 --</option>
                <option value="INDIA">인도</option>
                <option value="CHINA">중국</option>
                <option value="VIETNAM">베트남</option>
                <option value="PHILIPPINE">필리핀</option>
              </Select>
              {errors.nation && <Error>국가를 입력해 주세요.</Error>}
            </BoxSelect>
            <BoxSelect>
              <Label>분야</Label>
              <Select {...setValue("role", useId.role)} {...register("role")}>
                <option value={null}>-- 전체 분야 --</option>
                <option value="SERVER">서버</option>
                <option value="FRONTEND">프론트엔드</option>
                <option value="ANDROID">안드로이드</option>
                <option value="IOS">IOS</option>
                <option value="AI">AI</option>
              </Select>
              {errors.role && <Error>분야를 입력해 주세요.</Error>}
            </BoxSelect>
            <BoxSelect>
              <Label>유형</Label>
              <Select {...setValue("employeeType", useId.employeeType)} {...register("employeeType")}>
                <option value={null}>-- 전체 유형 --</option>
                <option value="FULLTIME">정규직</option>
                <option value="PARTTIME">계약직</option>
                <option value="FREELANCER">프리랜서</option>
              </Select>
              {errors.employeeType && <Error>유형을 입력해 주세요.</Error>}
            </BoxSelect>
            <BoxSelect>
              <Label>나이</Label>
              <Select {...setValue("age", useId.age)} {...register("age")}>
                <option value={null}>-- 전체 나이 --</option>
                {SelectAge()}
              </Select>
              {errors.age && <Error>나이를 입력해 주세요.</Error>}
            </BoxSelect>
            <BoxSelect>
              <Label>성별</Label>
              <Select {...setValue("gender", useId.gender)} {...register("gender")}>
                <option value={null}>-- 전체 성별 --</option>
                <option value="MALE">남자</option>
                <option value="FEMALE">여자</option>
              </Select>
              {errors.gender && <Error>성별을 입력해 주세요.</Error>}
            </BoxSelect>
          </BoxFlex>
        </BoxBlock>
        <BoxFlex>
          <InputDiv>
            <Label>이름</Label>
            <Input
              placeholder="ex) 홍길동"
              style={errors.realName ? { border: "2px solid #ff0000" } : {}}
              {...setValue("realName", useId.realName)}
              {...register("realName", { required: true })}
            />
            {errors.realName && <Error>이름을 입력해 주세요.</Error>}
          </InputDiv>
          <InputDiv>
            <Label>연락처</Label>
            <Input
              placeholder="ex) 010-1234-5678"
              style={errors.phoneNumber ? { border: "2px solid #ff0000" } : {}}
              {...setValue("phoneNumber", useId.phoneNumber)}
              {...register("phoneNumber", {
                required: true,
                pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <Error>연락처를 작성해 주세요.</Error>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
              <Error>연락처 형식에 맞게 작성해 주세요. (지역번호 X)</Error>
            )}
          </InputDiv>
        </BoxFlex>
        <BoxFlex>
          <InputDiv>
            <Label>이메일</Label>
            <Input
              placeholder="ex) qwer1234@abc.com"
              style={errors.email ? { border: "2px solid #ff0000" } : {}}
              {...setValue("email", useId.email)}
              {...register("email", {
                required: true,
                pattern:
                  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <Error>이메일을 작성해 주세요.</Error>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Error>이메일 형식에 맞게 작성해 주세요.</Error>
            )}
          </InputDiv>
          <InputDiv>
            <Label>GitHub 링크</Label>
            <Input
              placeholder="ex) https://github.com/xxxx"
              style={errors.githubUrl ? { border: "2px solid #ff0000" } : {}}
              {...setValue("githubUrl", useId.githubUrl)}
              {...register("githubUrl", { required: true })}
            />
            {errors.githubUrl && <Error>링크를 입력해 주세요.</Error>}
          </InputDiv>
        </BoxFlex>
        <BoxFlex>
          <InputDiv>
            <Label>Blog 링크</Label>
            <Input
              placeholder="ex) https://velog.io/@xxxx"
              style={errors.blogUrl ? { border: "2px solid #ff0000" } : {}}
              {...setValue("blogUrl", useId.blogUrl)}
              {...register("blogUrl", { required: true })}
            />
            {errors.blogUrl && <Error>링크를 입력해 주세요.</Error>}
          </InputDiv>
          <InputDiv>
            <Label>포트폴리오 링크</Label>
            <Input
              placeholder="ex) https://www.notion.so/ko-kr/xxxx"
              style={errors.portfolioUrl ? { border: "2px solid #ff0000" } : {}}
              {...setValue("portfolioUrl", useId.portfolioUrl)}
              {...register("portfolioUrl", { required: true })}
            />
            {errors.portfolioUrl && <Error>링크를 입력해 주세요.</Error>}
          </InputDiv>
        </BoxFlex>
        <SendButton type="submit" />
      </form>
    </Section>
  );
}

export default ResumeForm;
