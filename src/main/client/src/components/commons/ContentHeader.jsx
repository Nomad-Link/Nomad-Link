import { useNavigate } from "react-router-dom";
import { Section, Back } from "./ContentHeader.style";

function ContentHeader({ title, button }) {
  const navigate = useNavigate();

  return (
    <Section>
      <h1>{title}</h1>
      {button ? <Back onClick={() => navigate(-1)}>돌아가기</Back> : null}
    </Section>
  );
}

export default ContentHeader;
