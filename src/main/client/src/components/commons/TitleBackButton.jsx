import { useNavigate } from "react-router-dom";
import { Section, Button } from "./TitleBackButton.style";

function TitleBackButton({ title }) {
  const navigate = useNavigate();

  return (
    <Section>
      <h1>{title}</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </Section>
  );
}

export default TitleBackButton;
