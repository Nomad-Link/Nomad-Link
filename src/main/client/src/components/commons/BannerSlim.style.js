import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.bgColor};
  margin: 0;
`;
export const Div = styled.div`
  width: 1000px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  color: black;

  p {
    font-size: 18px;
    padding: 5px;
  }
  span {
    font-size: 15px;
    height: 15px;
    margin: 7px;
    padding-bottom: 2px;
    border-bottom: 1px solid black;
  }
`;
