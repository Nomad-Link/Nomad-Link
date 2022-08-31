import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userResume, setUserResume] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => setUserResume(response.data))
      .catch((error) => {
        if (error.response.status === 500) {
          setDisabled(true);
          console.log("resume is empty");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ;

  return (
    <div>
      {disabled ? (
        <div>
          <h1 style={{margin: "50px" }}>
            이력서가 존재하지 않습니다.
          </h1>
          <button
            style={{ fontSize: "35px", margin: "80px" }}
            onClick={() => navigate("/mypage/resume/save")}
          >
            이력서 작성하기
          </button>
        </div>
      ) : (
        <div>
          <h1 style={{margin: "50px" }} onClick={()=> console.log(cookies.id)}>
            이력서
          </h1>
          {/* <h1>{cookies}</h1> */}
          <h2>이름 : {userResume.realName}</h2>
          <h2>연락처 : {userResume.phoneNumber}</h2>
          <h2>이메일 : {userResume.email}</h2>
          <h2>나이 : {userResume.age}</h2>
          <h2>성별 : {userResume.gender}</h2>
          <h2>GitHub 링크 : {userResume.githubUrl}</h2>
          <h2>Blog 링크 : {userResume.blogUrl}</h2>
          <h2>포트폴리오 링크 : {userResume.portfolioUrl}</h2>
          <h2>분야 : {userResume.role}</h2>
          <h2>국가 : {userResume.nation}</h2>
          <h2>유형 : {userResume.employeeType}</h2>
          <textarea
            rows={45}
            cols={100}
            value={JSON.stringify(userResume, null, 3)}
            readOnly={true}
          />
        </div>
      )}
    </div>
  );
}

export default Mypage;
