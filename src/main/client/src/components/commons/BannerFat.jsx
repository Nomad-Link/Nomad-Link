import { useNavigate } from "react-router-dom";
import { Section, Div } from "./BannerFat.style";

function BannerFat({ bgColor, lineOne, lineTwo, lineThree, button, link }) {
  const navigate = useNavigate();

  return (
    <Section bgColor={bgColor}>
      <Div>
        <h1>{lineOne}</h1>
        <h3>{lineTwo}</h3>
        <h3>{lineThree}</h3>
        <button onClick={() => navigate(`/${link}`)}>{button}</button>
      </Div>
    </Section>
  );
}

export default BannerFat;
