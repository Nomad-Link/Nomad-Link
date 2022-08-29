import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section, Box, Img, Title, HashTag, MsLoading } from "./Slide.style";

function Slide() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, zoom: "1.5", marginLeft: "30px", zIndex: "100" }}
        onClick={onClick}
      />
    );
  }
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, zoom: "1.5", marginRight: "30px", zIndex: "100" }}
        onClick={onClick}
      />
    );
  }

  const [ent, setEnt] = useState([]);

  useEffect(() => {
    const url = `/api/private/employ/enterprises`;
    axios
      .get(url)
      .then((response) => setEnt(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Section>
      {ent[0] ? (
        <Slider {...settings}>
          <Box>
            <Img src={require("./SlideSample1.jpg")} alt="" />
            <Title>
              <h1>{ent[0].enterpriseName}</h1>
              <h1>{ent[0].title}</h1>
              <HashTag>
                <span>#{ent[0].techStacks[0].techName}&emsp;</span>
                <span>#{ent[0].techStacks[1].techName}&emsp;</span>
                <span>#{ent[0].techStacks[2].techName}&emsp;</span>
              </HashTag>
            </Title>
          </Box>
          <Box>
            <Img src={require("./SlideSample2.jpg")} alt="" />
            <Title>
              <h1>{ent[1].enterpriseName}</h1>
              <h1>{ent[1].title}</h1>
              <HashTag>
                <span>#{ent[1].techStacks[0].techName}&emsp;</span>
                <span>#{ent[1].techStacks[1].techName}&emsp;</span>
                <span>#{ent[1].techStacks[2].techName}&emsp;</span>
              </HashTag>
            </Title>
          </Box>
          <Box>
            <Img src={require("./SlideSample3.jpg")} alt="" />
            <Title>
              <h1>{ent[2].enterpriseName}</h1>
              <h1>{ent[2].title}</h1>
              <HashTag>
                <span>#{ent[2].techStacks[0].techName}&emsp;</span>
                <span>#{ent[2].techStacks[1].techName}&emsp;</span>
                <span>#{ent[2].techStacks[2].techName}&emsp;</span>
              </HashTag>
            </Title>
          </Box>
        </Slider>
      ) : (
        <MsLoading>Loading...</MsLoading>
      )}
    </Section>
  );
}
export default Slide;
