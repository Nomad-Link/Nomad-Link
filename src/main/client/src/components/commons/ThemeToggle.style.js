import styled from "styled-components";

export const Button = styled.button`
  position: -webkit-fixed;
  position: fixed;
  right: 3%;
  bottom: 5%;
  width: 120px;
  height: 50px;
  background-color: ${({ theme }) => theme.bgButton};
  border-radius: 30px;
  border: 1px solid #a5a5a5;
  box-shadow: 2px 2px 2px #000;
  font-size: 16px;
  font-weight: bold;

  span {
    vertical-align: middle;
  }

  &:hover {
    background-color: #b7b7b7;
  }
`;

export const muiModeIcon = {
  width: "20px",
  height: "20px",
  verticalAlign: "middle",
  color: "#292929",
};