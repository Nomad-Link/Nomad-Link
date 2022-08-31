import { post } from "axios";
import Logo from "./Logo";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import {
  ResHeader,
  HeaderDiv,
  Box,
  DivLeft,
  DivRight,
  SLink,
  SearchBox,
  Search,
  Button,
  Menu,
  MenuIcon,
} from "./Header.style";
import TestLink from "./TestLink";
import Tooltip from "./Tooltip";

function Header({ mode }) {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [testDiv, setTestDiv] = useState(true);

  async function logout() {
    const url = "/api/logout";

    try {
      const response = await post(url); // eslint-disable-line no-unused-vars
      // console.log(response);
      removeCookie("id");
    } catch (error) {
      console.error(error);
    }
    window.location.replace("/");
    window.location.replace("/");
    window.location.replace("/");
  }

  function ActTestLink() {
    setTestDiv(!testDiv);
  }

  return (
    <ResHeader>
      <HeaderDiv>
        <Box>
          <DivLeft>
            <Logo fontSize={"45px"} />
          </DivLeft>
          <DivRight>
            <SearchBox>
              <Search />
              <TbSearch className="react-search-icon" />
            </SearchBox>
            {cookies.id ? (
              <Box>
                {/* <Tooltip userId={cookies.id} /> */}
                <Button onClick={() => logout()}>로그아웃</Button>
              </Box>
            ) : (
              <Box>
                <SLink to={"/login"}>
                  <Button>로그인</Button>
                </SLink>
                <SLink to={"/register"}>
                  <Button>회원가입</Button>
                </SLink>
              </Box>
            )}
          </DivRight>
        </Box>
        <Box>
          <DivLeft>
            <Menu>
              <MenuIcon>
                <FiMenu className="react-icon" />
              </MenuIcon>
              <MenuIcon>채용</MenuIcon>
              <MenuIcon>직무 인터뷰</MenuIcon>
              <MenuIcon>뉴스</MenuIcon>
              <MenuIcon>커뮤니티</MenuIcon>
              <MenuIcon>이벤트</MenuIcon>
            </Menu>
          </DivLeft>
          <DivRight>
            <button
              onClick={() => ActTestLink()}
              style={{ width: "100px", height: "30px" }}
            >
              ROUTE {testDiv ? <span>OFF</span> : <span>ON</span>}
            </button>
            <SLink to={"/private"}>
              <MenuIcon>
                <IoPersonSharp className="react-icon" />
                개인 서비스
              </MenuIcon>
            </SLink>
            <SLink to={"/enterprise"}>
              <MenuIcon>
                <FaBuilding className="react-icon" />
                기업 서비스
              </MenuIcon>
            </SLink>
          </DivRight>
        </Box>
      </HeaderDiv>
      {testDiv ? (
        <div style={{ display: "flex" }}>
          <TestLink />
        </div>
      ) : null}
    </ResHeader>
  );
}
export default Header;
