import { useNavigate } from "react-router-dom";
import { Section, Div } from "./BannerSlim.style";

function BannerSlim({ bgColor, lineOne, button, link }) {
  const navigate = useNavigate();

  return (
    <Section bgColor={bgColor}>
      <Div>
        <p>{lineOne}</p>
        <span onClick={() => navigate(`/${link}`)}>{button}</span>
      </Div>
    </Section>
  );
}

export default BannerSlim;
