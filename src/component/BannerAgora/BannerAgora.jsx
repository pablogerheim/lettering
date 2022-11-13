import "./BannerAgora.css";
import Button from "../Button/Button";

function BannerAgora({ setOpen }) {
  return (
    <section className="banner-agora">
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

export default BannerAgora;
