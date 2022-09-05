import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios, { post } from "axios";
import {
  Section,
  BoxFlex,
  DetailImage,
  Info,
  TechStackBox,
  TechName,
  EntName,
  EntTitle,
  EntTextDiv,
  Strong,
} from "./Detail.style";

function Detail() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [ent, setEnt] = useState([]);

  useEffect(() => {
    const url = `/api${window.location.pathname}`;
    axios
      .get(url)
      .then((response) => setEnt(response.data))
      .catch((error) => console.log(error));
  }, []);

  async function Apply() {
    const url = `/api${window.location.pathname}`;

    try {
      const response = await post(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function EmployeeType() {
    if (ent.employeeType === "FULLTIME") {
      return "정규직";
    } else if (ent.employeeType === "PARTTIME") {
      return "계약직";
    } else if (ent.employeeType === "FREELANCER") {
      return "프리랜서";
    } else {
      return "-";
    }
  }
  function Annual() {
    if (ent.annual === "ZEROTOONE") {
      return "0-1년";
    } else if (ent.annual === "TWOTOFOUR") {
      return "2-4년";
    } else if (ent.annual === "FIVETOSEVEN") {
      return "5-7년";
    } else if (ent.annual === "EIGHTTOTEN") {
      return "8-10년";
    } else if (ent.annual === "MORETHANTEN") {
      return "10년 이상";
    } else {
      return "-";
    }
  }
  function Role() {
    if (ent.role === "SERVER") {
      return "서버";
    } else if (ent.role === "FRONTEND") {
      return "프론트엔드";
    } else if (ent.role === "ANDROID") {
      return "안드로이드";
    } else if (ent.role === "IOS") {
      return "IOS";
    } else if (ent.role === "AI") {
      return "AI";
    } else {
      return "-";
    }
  }

  return (
    <Section>
      <BoxFlex>
        <DetailImage
          alt=""
          src={require("components/units/enterprises/testimage.jpeg")}
        />
        <Info>
          <EntName>{ent.enterpriseName}</EntName>
          <EntTitle>{ent.title}</EntTitle>
          <BoxFlex>
            <EntTextDiv>
              <p>
                <Strong>[근무 지역]</Strong> {ent.enterpriseLocation}
              </p>
              <p>
                <Strong>[근무 유형]</Strong> {EmployeeType()}
              </p>
            </EntTextDiv>
            <EntTextDiv>
              <p>
                <Strong>[경력]</Strong> {Annual()}
              </p>
              <p>
                <Strong>[분야]</Strong> {Role()}
              </p>
            </EntTextDiv>
          </BoxFlex>
        </Info>
      </BoxFlex>
      <TechStackBox>
        {ent.techStacks ? (
          ent.techStacks.map((p, indexB) => {
            return (
              <TechName key={indexB}>
                {p.techName.length > 11 ? (
                  <span style={{ fontSize: "10px" }}>{p.techName}</span>
                ) : (
                  <span style={{ fontSize: "13px" }}>{p.techName}</span>
                )}
              </TechName>
            );
          })
        ) : (
          <span>로딩에 실패했습니다. 잠시 후 다시 시도해 주세요.</span>
        )}
        <button
          style={{ marginLeft: "450px" }}
          onClick={() => (cookies.id ? Apply() : alert("로그인하셔야 합니다."))}
        >
          지원하기
        </button>
      </TechStackBox>
    </Section>
  );
}

export default Detail;
