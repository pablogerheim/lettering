import "./Guarantees.css";

function Guarantees() {
  return (
    <section className="guarantees">
    <img
      alt="selo garandia de 7 dias"
      src="https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_GARANTIA-V02.jpg"
    />
    <div>
      <h3 className="guarantees__title"> Garantia de 7 dias</h3>
      <p className="guarantees__text">
        <span>
          Estamos comprometidos com a satisfação dos nossos alunos, esse é
          o Curso de Lettering mais completo do mercado.
        </span>
        <span>
          Por isso, seu risco é zero, teste o curso por 7 dias e tire suas
          próprias conclusões, se você não gostar basta mandar um simples
          e-mail e devolvemos 100% do seu dinheiro.
        </span>
      </p>
    </div>
  </section>
  );
}

export default Guarantees;
