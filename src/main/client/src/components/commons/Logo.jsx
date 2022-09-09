import { SLink, Title } from "./Logo.style";

function Logo({ fontSize }) {
  return (
    <SLink to={"/"}>
      <Title fontSize={fontSize}>Nomad Link</Title>
    </SLink>
  );
}

export default Logo;
