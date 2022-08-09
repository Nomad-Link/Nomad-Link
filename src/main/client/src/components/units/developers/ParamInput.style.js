import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  display: flex;
  justify-content: right;
  text-align: center;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #574b4b;
  border-bottom: #fbf6f6;
`;
export const Select = styled.select`
  background-color: #392f31;
  color: #fff;
  font-size: 18px;
  border: none;
  font-weight: bold;
  width: 100px;
  height: 30px;
  margin: 10px;
  padding: 5px;
`;
export const InputSkillSet = styled.input`
  background-color: #AE9D9D;
  color: #fff;
  font-size: 18px;
  border: none;
  font-weight: bold;
  width: 200px;
  margin: 10px;
  padding: 5px;

  ::placeholder {
    color: #FBECEC;
  }
`;
export const muiSearchIcon = {
    position: "absolute",
    zIndex: "1000",
    marginTop: "15px",
    marginLeft: "-15px",
    fontSize: "22px",
    opacity: "0.7"
  }