import "./BannerAprender.css";
import Button from "../Button/Button";

function BannerAprender() {
  return (
    <section className="banner-aprender">
      <h3>
        Inscreva-se agora no Curso Lettering na Prática e desperte a artista
        dentro de você.
      </h3>
      <Button href={"#garantirVaga"}>Eu quero aprender Lettering!</Button>
    </section>
  );
}

export default BannerAprender;
