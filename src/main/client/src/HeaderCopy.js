// function Header() {
//     return (
//       <HeaderDiv>
//         <Box>
//           <DivLeft>
//             <SLink to={"/"}>
//               <Logo>Nomad Link</Logo>
//             </SLink>
//           </DivLeft>
//           <DivRight>
//             <DivSearch>
//               <Search />
//               <SearchIcon sx={muiSearchIcon} />
//             </DivSearch>
//             <Login>로그인</Login>
//             <Register>회원가입</Register>
//           </DivRight>
//         </Box>
//         <Box>
//           <DivLeft>
//             <Menu>
//               <MenuListIcon sx={muiMenuIcon} />
//               <MenuIcon>채용</MenuIcon>
//               <MenuIcon>직무 인터뷰</MenuIcon>
//               <MenuIcon>이력서</MenuIcon>
//               <MenuIcon>커뮤니티</MenuIcon>
//               <MenuIcon>이벤트</MenuIcon>
//             </Menu>
//           </DivLeft>
//           <DivRight>
//             <SLink to={"/"} style={{ display: "flex" }}>
//               <PersonIcon sx={muiServiceIcon} />
//               <MenuIcon>개인 서비스</MenuIcon>
//             </SLink>
//             <SLink to={"/recruit"} style={{ display: "flex" }}>
//               <ApartmentIcon sx={muiServiceIcon} />
//               <MenuIcon>기업 서비스</MenuIcon>
//             </SLink>
//           </DivRight>
//         </Box>
//       </HeaderDiv>
//     );
//   }
//   const HeaderDiv = styled.header`
//     width: 1000px;
//     justify-content: center;
//     margin: auto;
//   `;
//   const Box = styled.div`
//     display: flex;
//   `;
//   const DivLeft = styled.div`
//     display: flex;
//     align-items: center;
//     float: left;
//     margin: 20px auto 20px 0;
//     padding: 0;
//   `;
//   const DivRight = styled.div`
//     display: flex;
//     align-items: center;
//     float: right;
//     margin: 20px 0 20px auto;
//   `;
//   const Logo = styled.h1`
//     color: #000;
//     font-size: 45px;
//     font-weight: bold;
//     letter-spacing: -1px;
//     margin-left: 10px;
//   `;
//   const DivSearch = styled.div`
//     position: relative;
//   `
//   const Search = styled.input`
//     width: 200px;
//     height: 25px;
//     margin-right: 10px;
//     padding-left: 10px;
//     background-color: #d9d9d9;
//     border-radius: 20px;
//     border: 1px solid #d5d5d5;
//   `;
//   const muiSearchIcon = {
//     position: "absolute",
//     zIndex: "1000",
//     marginTop: "3px",
//     marginLeft: "-38px",
//     fontSize: "22px",
//     opacity: "0.7"
//   }
//   const Login = styled.button`
//     width: 70px;
//     height: 30px;
//     margin-right: 10px;
//     background-color: #000;
//     border-radius: 20px;
//     border: 1px solid #fff;
//     color: white;
//   `;
//   const Register = styled.button`
//     width: 70px;
//     height: 30px;
//     margin-right: 15px;
//     background-color: #fff;
//     border-radius: 20px;
//     border: 1px solid #000;
//   `;
//   const Menu = styled.ul`
//     display: flex;
//     align-items: center;
//     padding-left: 0;
//   `;
//   const muiMenuIcon = {
//     margin: "auto 10px",
//     fontSize: "30px",
//   };
//   const muiServiceIcon = {
//     color: "#000",
//     marginLeft: "15px",
//     marginRight: "-5px",
//     fontSize: "30px",
//   };
//   const MenuIcon = styled.li`
//     list-style: none;
//     margin: auto 10px;
//     font-size: 20px;
//     color: #000;
//   `;
//   const SLink = styled(Link)`
//     text-decoration: none;
//   `;
//   export default Header;


// {
//         "companyName":"Google",
//         "managerName":"Kim",
//         "managerPhoneNumber":"010-4102-9139",
//         "managerEmail":"mnb9139@gmail.com",
//         "recruitmentPosition":"FrontEnd",
//         "projectDescription":"Web service project",
//         "roleDescription":"React.js develop",
//         "minimumAnnual":"ZEROTOONE",
//         "essentialSkillStack":"React.js, axios",
//         "optionalSkillStack":"Html, Css",
//         "keywords":"FrontEnd, SPA",
//         "maximumSalary":"$1000",
//         "etcComment":"Must also have minimal backend knowledge"
//     }