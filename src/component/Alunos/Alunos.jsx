import "./Alunos.css";

function Alunos(props) {
  return (
    <section className="alunos">
      <h3 className="alunos-h3">
        Veja o que alguns alunos, já estão fazendo em poucas semanas de
        curso
      </h3>
      <p>A maioria desses alunos nunca tinha desenhado antes. </p>
      <div className="box450">
        {props.children}
      </div>
    </section>
  );
}

export default Alunos;
