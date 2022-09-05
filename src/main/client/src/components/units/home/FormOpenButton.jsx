import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function FormOpenButton() {
  const [cookies, setCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const navigate = useNavigate();

  function handleClick() {
    if (cookies.id) {
      navigate("/enterprise/recruit/form");
    } else {
      const conf = window.confirm(
        "로그인 시 사용 가능한 기능입니다.\n로그인을 해주세요."
      );
      if (conf === true) {
        navigate("/login");
      }
    }
  }

  return (
    <div>
      <button
        style={{ fontSize: "25px", width: "230px", height: "70px" }}
        onClick={() => handleClick()}
      >
        기업용 폼 작성하기
      </button>
    </div>
  );
}

export default FormOpenButton;
