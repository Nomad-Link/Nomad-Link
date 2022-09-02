import { useNavigate } from "react-router-dom";
import { Section, Button } from "./ContentHeader.style";

function ContentHeader({ title, button }) {
  const navigate = useNavigate();

  return (
    <Section>
      <h1>{title}</h1>
      {button ? <Button onClick={() => navigate(-1)}>Go Back</Button> : null}
    </Section>
  );
}

export default ContentHeader;
