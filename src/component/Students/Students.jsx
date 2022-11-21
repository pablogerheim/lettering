import "./Students.css";
import { imgStudents } from "../../data/mock";
import CarouselCustom from "../CarouselCustom/CarouselCustom";

function Students() {
  return (
    <section className="students">
      <div className="students__content">
        <h3>
          Veja o que alguns alunos, já estão fazendo em poucas semanas de curso
        </h3>
        <p>A maioria desses alunos nunca tinha desenhado antes. </p>
      </div>
      <CarouselCustom imagesList={imgStudents} />
    </section>
  );
}

export default Students;
