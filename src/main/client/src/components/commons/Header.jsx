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
  Logo,
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

function Header({ mode }) {
  return (
    <ResHeader>
      <HeaderDiv>
        <Box>
          <DivLeft>
            <SLink to={"/"}>
              <Logo>Nomad Link</Logo>
            </SLink>
          </DivLeft>
          <DivRight>
            <SearchBox>
              <Search />
              <SearchIcon sx={muiSearchIcon} />
            </SearchBox>
            <Login>로그인</Login>
            <Register>회원가입</Register>
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
            <SLink to={"/"}>
              <PersonIcon
                sx={muiServiceIcon}
                style={
                  mode === "dark" ? { color: "#D4D4D4" } : { color: "#000" }
                }
              />
              <MenuIcon>개인 서비스</MenuIcon>
            </SLink>
            <SLink to={"/enterprise/recruit/form"}>
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
