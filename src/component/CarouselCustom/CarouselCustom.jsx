import "./CarouselCustom.css";
import Carousel from "react-elastic-carousel";

function CarouselCustom(Props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ]; 
  return (
    <div className="carousel__content">
      <Carousel breakPoints={breakPoints} >
        {Props.imagesList.map((item, index) => (
          <div key={index}>
            <img alt={item.alt} src={item.img} className="carousel__image"/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselCustom;
