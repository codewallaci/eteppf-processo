import Carousel from "react-elastic-carousel";
import Item from "./Item";
import um from "../assets/1.jpeg";
import dois from "../assets/2.jpeg";
import tres from "../assets/3.jpeg";
import quatro from "../assets/4.jpeg";
import cinco from "../assets/5.jpeg";
import seis from "../assets/6.jpeg";
import sete from "../assets/7.jpeg";
import oito from "../assets/8.jpeg";
import nove from "../assets/9.jpeg";
import Processo from "../assets/processo.png";

interface breakPointsProps {
  with: number;
  itemToShow: number;
}

const CarouselComp = () => {
  const breakPoints = [
    { with: 1, itemToShow: 1 },
    { with: 550, itemToShow: 2 },
    { with: 768, itemToShow: 3 },
    { with: 1200, itemToShow: 4 },
  ];

  return (
    <div className="h-[250px] w-full mb-12 mt-12 flex justify-center items-center px-4">
      <Carousel
        breakPoints={breakPoints}
        showArrows={true}
        enableAutoPlay={true}
        autoPlaySpeed={8200}
        disableArrowsOnEnd={true}
      >
        <Item>
          <img src={um} alt="1" />
        </Item>
        <Item>
          <img src={dois} alt="2" />
        </Item>
        <Item>
          <img src={tres} alt="3" />
        </Item>
        <Item>
          <img src={quatro} alt="4" />
        </Item>
        <Item>
          <img src={cinco} alt="5" />
        </Item>
        <Item>
          <img src={seis} alt="6" />
        </Item>
        <Item>
          <img src={sete} alt="7" />
        </Item>
        <Item>
          <img src={oito} alt="8" />
        </Item>
        <Item>
          <img src={nove} alt="9" />
        </Item>
      </Carousel>
    </div>
  );
};
export default CarouselComp;
