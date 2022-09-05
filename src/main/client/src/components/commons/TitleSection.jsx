import { Section } from "./TitleSection.style";

function TitleSection({ padding, largeOne, largeTwo, mediumOne, mediumTwo, smallOne, smallTwo }) {
  return (
    <Section padding={padding}>
      <h1>{largeOne}</h1>
      <h1>{largeTwo}</h1>
      <br />
      <h2>{mediumOne}</h2>
      <h2>{mediumTwo}</h2>
      <br />
      <p>{smallOne}</p>
      <p>{smallTwo}</p>
    </Section>
  );
}

export default TitleSection;
