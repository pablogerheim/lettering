import "./Intro.css";
import Button from "../Button/Button";

function Intro() {
  return (
    <section className="intro">
    <div className="intro__content">
      <h1>
        <span className="yellow">Curso de Lettering:</span> Aprenda a
        fazer artes lindas<span className="yellow"> em até 30 dias</span>{" "}
        mesmo que você seja iniciante.
      </h1>
      <h2 className="padding-y colorDarkBlue">
        Junte-se a mais de 1.500 alunos. Assista o vídeo até o{" "}
        <b className="colorDarkBlue">FINAL</b> e veja como começar!
      </h2>
      <iframe
        className="video-frame"
        src="https://player.vimeo.com/video/689846899?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0&h=6e221cecfe&autoplay=1#t="
        title="Apresentação"
        frameBorder="1"
        allowfullscreen
      ></iframe>
      <Button href={"#garantirVaga"}>
        Sim! Quero fazer minha inscrição!
      </Button>
    </div>
  </section>
  );
}

export default Intro;
