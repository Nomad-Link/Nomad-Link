import { Link } from "react-router-dom";

function TestLink() {
  return (
    <div style={{marginLeft: "40px", border: "1px solid", width: "350px"}}>
      <Link to={"/"}>
        <p>"/"</p>
      </Link>
      <Link to={"/login"}>
        <p>"/login"</p>
      </Link>
      <Link to={"/enterprise"}>
        <p>"/enterprise"</p>
      </Link>
      <Link to={"/enterprise/recruit/form"}>
        <p>"/enterprise/recruit/form"</p>
      </Link>
      <Link to={"/enterprise/recruit/complete"}>
        <p>"/enterprise/recruit/complete"</p>
      </Link>
      <Link to={"/enterprise/recruit/developers"}>
        <p>"/enterprise/recruit/developers"</p>
      </Link>
      <Link to={"/private/employ/enterprises"}>
        <p>"/private/employ/enterprises"</p>
      </Link>
    </div>
  );
}

export default TestLink;
