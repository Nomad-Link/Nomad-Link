import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResHeader = styled.header`
  min-width: 1000px;
  background-color: ${({ theme }) => theme.bgHeader};
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
  padding-bottom: 10px;
`;
export const HeaderDiv = styled.div`
  width: 1000px;
  justify-content: center;
  margin: auto;
`;
export const Box = styled.div`
  display: flex;
`;
export const SLink = styled(Link)`
  text-decoration: none;
`;
export const DivLeft = styled.div`
  display: flex;
  align-items: center;
  float: left;
  margin: 20px auto 20px 0;
  padding: 0;
`;
export const DivRight = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin: 20px 0 20px auto;

  ${SLink} {
    display: flex;
  }
`;
export const Logo = styled.h1`
  color: ${({ theme }) => theme.textIndex};
  font-size: 45px;
  font-weight: bold;
  letter-spacing: -1px;
  margin-left: 10px;
`;
export const SearchBox = styled.div`
  position: relative;
`;
export const Search = styled.input`
  width: 200px;
  height: 25px;
  margin-right: 10px;
  padding-left: 10px;
  background-color: #d9d9d9;
  border-radius: 20px;
  border: 1px solid #d5d5d5;
`;
export const muiSearchIcon = {
  width: "22px",
  height: "22px",
  color: "#000",
  position: "absolute",
  zIndex: "1000",
  marginTop: "3px",
  marginLeft: "-38px",
  fontSize: "22px",
  opacity: "0.7",
};
export const Login = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 10px;
  background-color: #000;
  border-radius: 20px;
  border: 1px solid #fff;
  color: white;
`;
export const Register = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #000;
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
`;
export const muiMenuIcon = {
  width: "27px",
  height: "27px",
  margin: "auto 10px",
  fontSize: "30px",
};
export const muiServiceIcon = {
  width: "27px",
  height: "27px",
  marginLeft: "15px",
  marginRight: "-5px",
  fontSize: "30px",
};
export const MenuIcon = styled.li`
  color: ${({ theme }) => theme.textIndex};
  list-style: none;
  margin: auto 10px;
  font-size: 20px;
`;
