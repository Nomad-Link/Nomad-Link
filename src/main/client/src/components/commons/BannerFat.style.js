import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.bgColor};
  margin: 0;
  animation: 0.7s ease-in-out loadEffect;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes loadEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Div = styled.div`
  width: 1000px;
  height: 300px;
  justify-content: center;
  margin: auto;
  color: black;

  h1 {
    padding-top: 70px;
    padding-bottom: 20px;
  }
  h3 {
    margin: 10px;
  }
  button {
    width: 100px;
    height: 30px;
    margin: 20px;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 15px;
  }
`;
