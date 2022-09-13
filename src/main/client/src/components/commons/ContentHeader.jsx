import { useNavigate } from "react-router-dom";
import { Section, Back } from "./ContentHeader.style";

function ContentHeader({ title, button, link, linkName }) {
  const navigate = useNavigate();

  return (
    <Section>
      <h1 style={{ cursor: "default" }}>{title}</h1>
      {button ? <Back onClick={() => navigate(-1)}>돌아가기</Back> : null}
      {link ? <Back onClick={() => navigate(link)}>{linkName}</Back> : null}
    </Section>
  );
}

export default ContentHeader;
