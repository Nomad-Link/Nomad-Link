import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import {
  ResFooter,
  FooterDiv,
  Information,
  muiInforIcon,
  ServiceLink,
} from "./Footer.style";
import Logo from "./Logo";

function Footer() {
  return (
    <ResFooter>
      <FooterDiv>
        <Logo fontSize={"35px"} />
        <Information>
          <p>
            고객센터 : 02-123-4567 (평일 09:00 - 18:00, 점심시간 12:00 - 13:00,
            주말·공휴일 휴무)
          </p>
          <p>이메일 : qwer1234@abc.com / Fax : 02-3344-5566</p>
          <p>Copyright (c) &lt;Nomad Link&gt; All rights reserved.</p>
          <TwitterIcon sx={muiInforIcon} />
          <FacebookIcon sx={muiInforIcon} />
          <InstagramIcon sx={muiInforIcon} />
          <AttachEmailIcon sx={muiInforIcon} />
        </Information>
        <ServiceLink>
          <p>서비스 소개</p>
          <p>개인 서비스</p>
          <p>기업 서비스</p>
        </ServiceLink>
        <ServiceLink>
          <p>이용 약관</p>
          <p>개인정보처리방침</p>
          <p>FAQ</p>
        </ServiceLink>
      </FooterDiv>
    </ResFooter>
  );
}

export default Footer;
