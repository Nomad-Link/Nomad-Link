import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 0 auto;
  background-color: ${(props)=> (props.bgColor)};
`;