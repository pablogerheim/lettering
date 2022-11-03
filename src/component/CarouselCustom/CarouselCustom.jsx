import "./CarouselCustom.css";
import Carousel from "react-elastic-carousel";
import { v4 } from "uuid";

function CarouselCustom(Props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ];
  return (
    <Carousel breakPoints={breakPoints}>
      {Props.imagesList.map((item) => (
        <div key={v4()} infiniteLoop={true}>
          <img className={Props.className} alt={item.alt} src={item.img} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselCustom;
