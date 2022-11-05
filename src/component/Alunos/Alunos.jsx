import "./Alunos.css";
import { imgAlunos } from "../../data/mock";
import CarouselCustom from "../CarouselCustom/CarouselCustom";

function Alunos() {
  return (
    <section className="alunos">
      <div className="alunos__content">
        <h3>
          Veja o que alguns alunos, já estão fazendo em poucas semanas de curso
        </h3>
        <p>A maioria desses alunos nunca tinha desenhado antes. </p>
      </div>
      <CarouselCustom imagesList={imgAlunos} />
    </section>
  );
}

export default Alunos;
