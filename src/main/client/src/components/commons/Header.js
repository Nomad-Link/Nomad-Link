// import styled from "styled-components";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuListIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-box">
        <div className="header-left">
          <Link to={"/"} style={SLink}>
            <h1 className="header-logo">Nomad Link</h1>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-search-div">
            <input className="header-search" />
            <SearchIcon sx={muiSearchIcon} />
          </div>
          <button className="header-button-login">로그인</button>
          <button className="header-button-register">회원가입</button>
        </div>
      </div>
      <div className="header-box">
        <div className="header-left">
          <ul className="header-menu-list">
            <MenuListIcon sx={muiMenuIcon} />
            <li>채용</li>
            <li>직무 인터뷰</li>
            <li>이력서</li>
            <li>커뮤니티</li>
            <li>이벤트</li>
          </ul>
        </div>
        <div className="header-right">
          <Link to={"/"} style={SLink}>
            <PersonIcon sx={muiServiceIcon} />
            <li>개인 서비스</li>
          </Link>
          <Link to={"/recruit"} style={SLink}>
            <ApartmentIcon sx={muiServiceIcon} />
            <li>기업 서비스</li>
          </Link>
        </div>
      </div>
    </header>
  );
}
const SLink = {
  display: "flex",
  textDecoration: "none",
};
const muiSearchIcon = {
  position: "absolute",
  zIndex: "1000",
  marginTop: "4px",
  marginLeft: "-42px",
  fontSize: "22px",
  opacity: "0.7",
};
const muiMenuIcon = {
  margin: "auto 10px",
  fontSize: "30px",
};
const muiServiceIcon = {
  color: "#000",
  marginLeft: "15px",
  marginRight: "-5px",
  fontSize: "30px",
};
export default Header;
