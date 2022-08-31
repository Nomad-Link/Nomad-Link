import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
  background-color: ${(props)=> (props.bgColor)};
`;