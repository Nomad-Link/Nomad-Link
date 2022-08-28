import Logo from "./Logo";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ResFooter, FooterDiv, Information, ServiceLink } from "./Footer.style";

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
          <AiOutlineTwitter className="react-footer-icon" />
          <AiFillFacebook className="react-footer-icon" />
          <AiFillInstagram className="react-footer-icon" />
          <MdEmail className="react-footer-icon" />
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
