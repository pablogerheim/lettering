import "./Faixa1.css";
import Button from "../../component/Button/Button";

function Faixa1() {
  return (
    <div className="faixa1">
      <h3 className="faixa1-h3 align-left">
        Inscreva-se agora no Curso Lettering na Prática e desperte a artista
        dentro de você.
      </h3>
      <Button href={"#garantirVaga"}>Eu quero aprender Lettering!</Button>
    </div>
  );
}

export default Faixa1;
