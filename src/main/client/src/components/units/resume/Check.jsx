import { useState, useEffect } from "react";
import axios, { post } from "axios";
import { useCookies } from "react-cookie";
import { useTheme } from "store/ThemeProvider";
import { useStateValue } from "store/StateProvider";
import { Button, ButtonMini } from "styles/Button";
import { ProfileImage } from "./Check.style";
import {
  Section,
  BoxFlex,
  BoxBlock,
  BoxSelect,
  InputDiv,
  Title,
  Label,
  InputS,
  InputL,
  Select,
} from "styles/Form";
import DeveloperSample from "assets/DeveloperSample.jpg";
import TechStack from "./TechStack";

function Mypage() {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [ThemeMode, toggleTheme] = useTheme(); // eslint-disable-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userResume, setUserResume] = useState([]);
  const [disabled, seHeadisabled] = useState(false);

  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => {
        setUserResume(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          seHeadisabled(true);
          console.log("resume is empty");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTechStack = () => {
    const techStacks = initialState.techStack;
    const ResumeRequestDto = {
      realName: userResume.realName,
      age: userResume.age,
      phoneNumber: userResume.phoneNumber,
      email: userResume.email,
      gender: userResume.gender,
      blogUrl: userResume.blogUrl,
      portfolioUrl: userResume.portfolioUrl,
      githubUrl: userResume.githubUrl,
      role: userResume.role,
      nation: userResume.nation,
      employeeType: userResume.employeeType,
      techStacks: techStacks,
      developerIntroduction: userResume.developerIntroduction,
    };
    formData(ResumeRequestDto);
    console.log(techStacks);
    window.location.replace("/mypage/resume");
  };

  async function formData(data) {
    try {
      const response = await post(
        `/api/mypage/resume/update/${cookies.id}`,
        data
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function Gender() {
    if (userResume.gender === "MALE") {
      return "남자";
    } else if (userResume.gender === "FEMALE") {
      return "여자";
    } else {
      return "-";
    }
  }

  function Role() {
    if (userResume.role === "SERVER") {
      return "서버";
    } else if (userResume.role === "FRONTEND") {
      return "프론트엔드";
    } else if (userResume.role === "ANDROID") {
      return "안드로이드";
    } else if (userResume.role === "IOS") {
      return "IOS";
    } else if (userResume.role === "AI") {
      return "AI";
    } else {
      return "-";
    }
  }

  function EmployeeType() {
    if (userResume.employeeType === "FULLTIME") {
      return "정규직";
    } else if (userResume.employeeType === "PARTTIME") {
      return "계약직";
    } else if (userResume.employeeType === "FREELANCER") {
      return "프리랜서";
    } else {
      return "-";
    }
  }

  function theme() {
    if (ThemeMode === "dark") {
      return "#9F9F9F";
    } else {
      return "#D5D5D5";
    }
  }
  const style = {
    backgroundColor: theme(),
    color: "#000",
    appearance: "none",
    borderBottom: "2px solid #4641d9",
  };

  if (disabled) {
    return (
      <Section>
        <h1 style={{ margin: "50px" }}>이력서가 존재하지 않습니다.</h1>
        <Button
          style={{ width: "200px" }}
          onClick={() => window.location.replace("/mypage/resume/save")}
        >
          이력서 작성하기
        </Button>
      </Section>
    );
  } else {
    return (
      <section>
        <Section style={{ marginTop: "20px" }}>
          <BoxFlex style={{ alignItems: "center" }}>
            <div
              style={{ width: "400px", textAlign: "left", marginLeft: "20px" }}
            >
              <Title style={{ paddingTop: "30px" }}>{cookies.id} 님</Title>
            </div>
            <div style={{ width: "485px", textAlign: "right" }}>
              <ButtonMini
                onClick={() => window.location.replace("/mypage/resume/update")}
              >
                수정
              </ButtonMini>
            </div>
          </BoxFlex>
          <BoxBlock>
            <BoxFlex>
              <BoxSelect>
                <Label>국가</Label>
                <Select style={style} disabled>
                  <option>{userResume.nation}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label>분야</Label>
                <Select style={style} disabled>
                  <option>{Role()}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label>유형</Label>
                <Select style={style} disabled>
                  <option>{EmployeeType()}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label>나이</Label>
                <Select style={style} disabled>
                  <option>{userResume.age}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label>성별</Label>
                <Select style={style} disabled>
                  <option>{Gender()}</option>
                </Select>
              </BoxSelect>
            </BoxFlex>
          </BoxBlock>
          <BoxFlex>
            <InputDiv>
              <Label>이름</Label>
              <InputS
                style={style}
                defaultValue={userResume.realName}
                readOnly
              />
            </InputDiv>
            <InputDiv>
              <Label>연락처</Label>
              <InputS
                style={style}
                defaultValue={userResume.phoneNumber}
                readOnly
              />
            </InputDiv>
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label>이메일</Label>
              <InputS style={style} defaultValue={userResume.email} readOnly />
            </InputDiv>
            <InputDiv>
              <Label>GitHub 링크</Label>
              <InputS
                style={style}
                defaultValue={userResume.githubUrl}
                readOnly
              />
            </InputDiv>
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label>Blog 링크</Label>
              <InputS
                style={style}
                defaultValue={userResume.blogUrl}
                readOnly
              />
            </InputDiv>
            <InputDiv>
              <Label>포트폴리오 링크</Label>
              <InputS
                style={style}
                defaultValue={userResume.portfolioUrl}
                readOnly
              />
            </InputDiv>
          </BoxFlex>
          <BoxBlock style={{ paddingBottom: "30px" }}>
            <Label>자기 소개</Label>
            <InputL
              style={style}
              defaultValue={userResume.developerIntroduction}
              readOnly
            />
          </BoxBlock>
        </Section>
        <Section>
          {userResume.techStacks ? (
            <TechStack uTech={userResume.techStacks} />
          ) : (
            <div>
              <h3>등록된 기술스택이 없습니다. 추가하세요.</h3>
              <TechStack uTech={userResume.techStacks} />
            </div>
          )}
          <ButtonMini onClick={() => onTechStack()}>저장</ButtonMini>
          {/* {userResume.storeFileName ? (
            <ProfileImage
              alt=""
              src={`/api/mypage/resume/image/${userResume.storeFileName}`}
            />
          ) : (
            <ProfileImage alt="" src={DeveloperSample} />
          )} */}
        </Section>
      </section>
    );
  }
}

export default Mypage;
