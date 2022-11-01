import "./Faixa2.css";
import Button from "../Button/Button";

function Faixa2({setOpen}) {
  return (
    <div className="faixa2">
    <h3 className="faixa2-title">
      Inscreva-se agora no Curso Lettering na Prática
    </h3>
    <h3 className="faixa2-text">Em até 12x 19,66</h3>

    <Button setOpen={setOpen} className={"add-to-cart"}>
      SIM! EU QUERO COMEÇAR AGORA
    </Button>

  </div>
  );
}

export default Faixa2;
