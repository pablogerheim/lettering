import "./MakeArts.css";
import { imgCamila } from "../../data/mock";
import CarouselCustom from "../CarouselCustom/CarouselCustom";

function MakeArts() {
  return (
    <section className="makeArts">
      <h3>Faça artes como essas</h3>
      <CarouselCustom imagesList={imgCamila} />
    </section>
  );
}

export default MakeArts;
