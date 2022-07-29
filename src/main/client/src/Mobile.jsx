// import styled from "styled-components";

import { useEffect } from "react";

function Mobile() {
  useEffect(() => {
    console.log("Mobile");
  }, []);
  return (
    <div>
      <h1>Nomad Link</h1>
      <br />
      <h2>PC 버전으로 접속해 주세요!</h2>
    </div>
  );
}
export default Mobile;
