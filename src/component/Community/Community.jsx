import "./Community.css";

function Community() {
  return (
    <section className="community">
      <div className="community__content">
        <img
          alt="notebook"
          src="https://camilapegado.com.br/wp-content/webp-express/webp-images/uploads/2022/05/IMG-LNP_VENDAS01_comunidade-V01-1-1024x678.jpg.webp"
        />
        <div className="community__text">
          <h3 className="align-left">
            Junte-se a comunidade de Lettering que mais cresce no Brasil.
          </h3>
          <p className="align-left">
            Receba no grupo vip de alunos desafios mensais de lettering, e um
            encontro ao vivo todo mês com a professora para te incentivar a
            evoluir cada vez mais no desenho das letras.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Community;
