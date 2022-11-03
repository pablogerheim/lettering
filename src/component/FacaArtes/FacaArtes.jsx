import "./FacaArtes.css";
import { imgCamila } from "../../data/mock"
import CarouselCustom from "../CarouselCustom/CarouselCustom";

function FacaArtes() {
  return (
    <section className="facaArtes">
      <h3>Faça artes como essas</h3>
      <div className="box450">
      <CarouselCustom className="imgAluno" imagesList={imgCamila} />
      </div>
    </section>
  );
}

export default FacaArtes;
