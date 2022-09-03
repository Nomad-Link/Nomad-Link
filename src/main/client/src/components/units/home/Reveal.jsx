import styled from "styled-components";
import Fade from "react-reveal/Fade";

const IntroBlock = styled.div`
  height: 730px;
  background-color: ${(props) => props.bgColor};
  padding-top: 20px;

  h1 {
    font-weight: 300;
    font-size: 45px;
    animation: AppearSlideTitle 1s;
    animation-fill-mode: forwards;
    animation-delay: 0.7s;
    opacity: 0;
  }

  @keyframes AppearSlideTitle {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function Reveal() {
  return (
    <Fade>
      <IntroBlock bgColor="#5CD1E5">
        <h1>Lorem Ipsum is simply dummy</h1>
        <h1>text of the printing and typesetting industry.</h1>
      </IntroBlock>
      <IntroBlock bgColor="#6799FF">
        <h1>Lorem Ipsum is simply dummy text of the </h1>
        <h1>printing and typesetting industry. Lorem Ipsum has been </h1>
        <h1>the industry's standard dummy text ever since the 1500s</h1>
      </IntroBlock>
    </Fade>
  );
}

export default Reveal;
