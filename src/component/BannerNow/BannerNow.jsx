import "./BannerNow.css";
import Button from "../Button/Button";

function BannerNow({ setOpen }) {
  return (
    <section className="banner-now">
      <h3>
        Inscreva-se agora no Curso Lettering na Prática
        <span>Em até 12x 19,66</span>
      </h3>

      <Button setOpen={setOpen} className={"add-to-cart"}>
        SIM! EU QUERO COMEÇAR AGORA
      </Button>
    </section>
  );
}

export default BannerNow;
