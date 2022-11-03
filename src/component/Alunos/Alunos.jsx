import "./Alunos.css";
import { imgAlunos } from "../../data/mock"
import CarouselCustom from "../CarouselCustom/CarouselCustom";

function Alunos(props) {
  return (
    <section className="alunos">
      <h3 className="alunos__title">
        Veja o que alguns alunos, já estão fazendo em poucas semanas de
        curso
      </h3>
      <p>A maioria desses alunos nunca tinha desenhado antes. </p>
      <div className="box450">
        <CarouselCustom className="imgAluno" imagesList={imgAlunos} />
      </div>
    </section>
  );
}

export default Alunos;
