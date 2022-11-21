import "./Testimony.css";

function Testimony() {
  return (
    <section className="testimony">
    <h3>Depoimento dos Alunos</h3>
    <div className="testimony__content">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/lGr-Ko8iAog"
        title="Depoimento Israel"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/O85qAhIuHHk"
        title="Depoimento Julia Kinoshita"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/j5k1JXgDEcI"
        title="Depoimento Vanusa"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
  );
}

export default Testimony;
