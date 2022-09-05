import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Section,
  BoxFlex,
  Table,
  Tr,
  Head,
  Text,
  ProfileImage,
  UpdateButton,
} from "./Check.style";

function Mypage() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userResume, setUserResume] = useState([]);
  const [disabled, seHeadisabled] = useState(false);

  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => setUserResume(response.data))
      .catch((error) => {
        if (error.response.status === 500) {
          seHeadisabled(true);
          console.log("resume is empty");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <div>
      {disabled ? (
        <Section>
          <h1 style={{ margin: "50px" }}>이력서가 존재하지 않습니다.</h1>
          <button
            style={{ fontSize: "35px", margin: "80px" }}
            onClick={() => window.location.replace("/mypage/resume/save")}
          >
            이력서 작성하기
          </button>
        </Section>
      ) : (
        <Section>
          <BoxFlex>
            <Table>
              <thead />
              <tbody>
                <Tr>
                  <Head>이름</Head>
                  <Text>{userResume.realName}</Text>
                </Tr>
                <Tr>
                  <Head>연락처</Head>
                  <Text>{userResume.phoneNumber}</Text>
                </Tr>
                <Tr>
                  <Head>이메일</Head>
                  <Text>{userResume.email}</Text>
                </Tr>
                <Tr>
                  <Head>나이</Head>
                  <Text>{userResume.age}</Text>
                </Tr>
                <Tr>
                  <Head>성별</Head>
                  <Text>{Gender()}</Text>
                </Tr>
                <Tr>
                  <Head>GitHub 링크</Head>
                  <Text>{userResume.githubUrl}</Text>
                </Tr>
                <Tr>
                  <Head>Blog 링크</Head>
                  <Text>{userResume.blogUrl}</Text>
                </Tr>
                <Tr>
                  <Head>포트폴리오 링크</Head>
                  <Text>{userResume.portfolioUrl}</Text>
                </Tr>
                <Tr>
                  <Head>분야</Head>
                  <Text>{Role()}</Text>
                </Tr>
                <Tr>
                  <Head>국가</Head>
                  <Text>{userResume.nation}</Text>
                </Tr>
                <Tr style={{ borderBottom: "none" }}>
                  <Head>유형</Head>
                  <Text>{EmployeeType()}</Text>
                </Tr>
              </tbody>
            </Table>
            <div style={{ width: "550px"}}>
              <ProfileImage
                alt=""
                src={require("components/units/developers/testimage.jpg")}
              />
              <UpdateButton onClick={()=> window.location.replace("/mypage/resume/update")}>이력서 수정</UpdateButton>
            </div>
          </BoxFlex>
        </Section>
      )}
    </div>
  );
}

export default Mypage;
