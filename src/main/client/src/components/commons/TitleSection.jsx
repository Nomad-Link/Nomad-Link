import { Section } from "./TitleSection.style";

function TitleSection({ padding, mediumOne, mediumTwo, smallOne, smallTwo }) {
  return (
    <Section padding={padding}>
      <h2>{mediumOne}</h2>
      <h2>{mediumTwo}</h2>
      <br />
      <p>{smallOne}</p>
      <p>{smallTwo}</p>
    </Section>
  );
}

export default TitleSection;
