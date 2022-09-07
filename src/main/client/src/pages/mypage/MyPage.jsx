import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import { useState, useEffect } from "react";
import axios from "axios";

function MyPage() {
  // test ( components로 옮겨야함 )
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `/api/member/mypage`;
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log("resume is empty");
      });
  }, []);

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"마이페이지 : "} />
      <h1>마이페이지</h1>
      <h1>마이페이지</h1>
      <h1>마이페이지</h1>
      <h1>마이페이지</h1>
      <textarea value={JSON.stringify(data, null, 5)}
          rows="45" cols="90" readOnly />
      <h1>마이페이지</h1>
      <h1>마이페이지</h1>
      <h1>마이페이지</h1>
      <h1>마이페이지</h1>
    </Main>
  );
}

export default MyPage;
