import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section, Img } from "./HomeSlide.style";

function HomeSlide() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
  
  return (
    <Section>
      <Slider {...settings}>
        <Img src="https://picsum.photos/200/300?random=1.jpg" alt="" />
        <Img src="https://picsum.photos/200/300?random=2.jpg" alt="" />
        <Img src="https://picsum.photos/200/300?random=3.jpg" alt="" />
      </Slider>
    </Section>
  );
}
export default HomeSlide;
