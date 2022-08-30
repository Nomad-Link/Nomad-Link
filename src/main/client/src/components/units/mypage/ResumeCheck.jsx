import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Mypage() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [useId, setUseId] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => setUseId(response.data))
      .catch((error) => {
        console.log(error);
        setDisabled(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.id]);

  return (
    <div>
      <h1>My Page</h1>
      {disabled ? (
        <h1>이력서가 존재하지 않습니다.</h1>
      ) : (
        <textarea
          rows={45}
          cols={100}
          value={JSON.stringify(useId, null, 3)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default Mypage;
