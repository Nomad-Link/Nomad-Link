import { SLink, Title } from "./Logo.style";
import "styles/Logo.scss";

function Logo({ fontSize }) {
  return (
    <SLink to={"/"}>
      <Title fontSize={fontSize}><span className="logo">Nomad Link</span></Title>
    </SLink>
  );
}

export default Logo;
