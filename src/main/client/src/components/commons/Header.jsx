import SearchIcon from "@mui/icons-material/Search";
import MenuListIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {
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

function Header() {
  return (
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
            <MenuListIcon sx={muiMenuIcon} />
            <MenuIcon>채용</MenuIcon>
            <MenuIcon>직무 인터뷰</MenuIcon>
            <MenuIcon>이력서</MenuIcon>
            <MenuIcon>커뮤니티</MenuIcon>
            <MenuIcon>이벤트</MenuIcon>
          </Menu>
        </DivLeft>
        <DivRight>
          <SLink to={"/"}>
            <PersonIcon sx={muiServiceIcon} />
            <MenuIcon>개인 서비스</MenuIcon>
          </SLink>
          <SLink to={"/recruit"}>
            <ApartmentIcon sx={muiServiceIcon} />
            <MenuIcon>기업 서비스</MenuIcon>
          </SLink>
        </DivRight>
      </Box>
    </HeaderDiv>
  );
}
export default Header;
