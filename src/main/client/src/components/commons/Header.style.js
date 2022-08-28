import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResHeader = styled.header`
  min-width: 1000px;
  background-color: ${({ theme }) => theme.bgHeader};
  border-bottom: 1px solid ${({ theme }) => theme.border};
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
  margin: 15px auto 10px 0;
  padding: 0;
`;
export const DivRight = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin: 15px 0 10px auto;

  ${SLink} {
    display: flex;
  }
`;
export const SearchBox = styled.div`
  position: relative;

  .react-search-icon {
    position: absolute;
    z-index: 1000;
    opacity: 0.7;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: #000;
    margin-top: 4px;
    margin-left: -36px;
  }
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
export const Button = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 5px;
  background-color: #000;
  border-radius: 20px;
  border: 1px solid #fff;
  color: white;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: black;
  }
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
`;
export const MenuIcon = styled.li`
  color: ${({ theme }) => theme.textIndex};
  list-style: none;
  margin: auto 5px;
  padding: 10px;
  border-radius: 15px;
  font-size: 20px;
  transition: all 0.2s;

  .react-icon {
    vertical-align: middle;
    width: 22px;
    height: 22px;
    font-size: 22px;
    margin-right: 3px;
    margin-bottom: 3px;
  }

  &:hover {
    color: white;
    background-color: #252528;
  }
`;
