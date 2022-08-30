import { Link } from "react-router-dom";

function TestLink() {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        border: "1px solid",
      }}
    >
      <div style={{ marginRight: "50px" }}>
        <Link to={"/"}>
          <p>"/"</p>
        </Link>
        <Link to={"/login"}>
          <p>"/login"</p>
        </Link>
        <Link to={"/register"}>
          <p>"/register"</p>
        </Link>
        <Link to={"/enterprise"}>
          <p>"/enterprise"</p>
        </Link>
      </div>
      <div style={{ marginRight: "50px" }}>
        <Link to={"/enterprise/recruit/form"}>
          <p>"/enterprise/recruit/form"</p>
        </Link>
        <Link to={"/enterprise/recruit/complete"}>
          <p>"/enterprise/recruit/complete"</p>
        </Link>
        <Link to={"/enterprise/recruit/developers"}>
          <p>"/enterprise/recruit/developers"</p>
        </Link>
        <Link to={"/private"}>
          <p>"/private"</p>
        </Link>
      </div>
      <div style={{ marginRight: "50px" }}>
        <Link to={"/mypage/resume"}>
          <p>"/mypage/resume"</p>
        </Link>
        <Link to={"/mypage/resume/update"}>
          <p>"/mypage/resume/update"</p>
        </Link>
        <Link to={"/mypage"}>
          <p>"/mypage"</p>
        </Link>
      </div>
    </div>
  );
}

export default TestLink;
