import "./FacaArtes.css";

function FacaArtes(props) {
  return (
    <section className="facaArtes">
      <h3>Faça artes como essas</h3>
      <div className="box450">
        {props.children}
      </div>
    </section>
  );
}

export default FacaArtes;
