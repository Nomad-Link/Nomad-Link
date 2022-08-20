import { Section } from "./TitleSection.style";

function TitleSection({ middleOne, middleTwo, smallOne, smallTwo }) {
  return (
    <Section>
      <h2>{middleOne}</h2>
      <h2>{middleTwo}</h2>
      <br />
      <p>{smallOne}</p>
      <p>{smallTwo}</p>
    </Section>
  );
}

export default TitleSection;
