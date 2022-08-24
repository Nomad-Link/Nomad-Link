import { post } from "axios";
import SearchIcon from "@mui/icons-material/Search";
import MenuListIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {
  ResHeader,
  HeaderDiv,
  Box,
  DivLeft,
  DivRight,
  SLink,
  SearchBox,
  Search,
  Login,
  Register,
  Menu,
  MenuIcon,
  muiSearchIcon,
  muiMenuIcon,
  muiServiceIcon,
} from "./Header.style";
import TestLink from "./TestLink";
import Logo from "./Logo";
import { useCookies } from "react-cookie";

function Header({ mode }) {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);

  async function logout() {
    const url = "/api/logout";

    try {
      const response = await post(url);
      console.log(response);
      removeCookie("id");
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
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
              <SearchIcon sx={muiSearchIcon} />
            </SearchBox>
            {cookies.id ? <p>{cookies.id} 님 환영합니다!&nbsp;&nbsp;</p> : null}
            {cookies.id ? (
              <Login onClick={() => logout()}>로그아웃</Login>
            ) : (
              <SLink to={"/login"}>
                <Login>로그인</Login>
              </SLink>
            )}
            <SLink to={"/register"}>
              <Register>회원가입</Register>
            </SLink>
          </DivRight>
        </Box>
        <Box>
          <DivLeft>
            <Menu>
              <MenuListIcon
                sx={muiMenuIcon}
                style={
                  mode === "dark" ? { color: "#D4D4D4" } : { color: "#000" }
                }
              />
              <MenuIcon>채용</MenuIcon>
              <MenuIcon>직무 인터뷰</MenuIcon>
              <MenuIcon>이력서</MenuIcon>
              <MenuIcon>커뮤니티</MenuIcon>
              <MenuIcon>이벤트</MenuIcon>
            </Menu>
          </DivLeft>
          <DivRight>
            <SLink to={"/private"}>
              <PersonIcon
                sx={muiServiceIcon}
                style={
                  mode === "dark" ? { color: "#D4D4D4" } : { color: "#000" }
                }
              />
              <MenuIcon>개인 서비스</MenuIcon>
            </SLink>
            <SLink to={"/enterprise"}>
              <ApartmentIcon
                sx={muiServiceIcon}
                style={
                  mode === "dark" ? { color: "#D4D4D4" } : { color: "#000" }
                }
              />
              <MenuIcon>기업 서비스</MenuIcon>
            </SLink>
          </DivRight>
        </Box>
      </HeaderDiv>
      <div style={{ display: "flex" }}>
        <TestLink />
      </div>
    </ResHeader>
  );
}
export default Header;
