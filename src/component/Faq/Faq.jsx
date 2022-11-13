import "./Faq.css";
import { perguntas } from "../../data/mock.js";
import { useState } from "react";

function Faq() {
  const [detalhesPergunta, setDetalhesPergunta] = useState(0);

  const escondeEmostraPergunta = (id) => {
    if (detalhesPergunta === id) {
      setDetalhesPergunta(0);
    } else {
      setDetalhesPergunta(id);
    }
  };

  const perguntaEscondida = (id) => detalhesPergunta === id;

  return (
    <section className="faq">
      <div className="faq__box">
        <h3 className="faq__title"> Dúvidas Frequentes </h3>
        <div>
          {perguntas.map((pergunta, index) => (
            <div
              key={index}
              className="faq__conteudo"
              onClick={() => escondeEmostraPergunta(pergunta.id)}
            >
              <p className={`faq__pergunta ${perguntaEscondida(pergunta.id) ? "faq__pergunta__ativa" : ""}`}>
                {pergunta.button}
                <span className="faq__pergunta__icone">
                  {perguntaEscondida(pergunta.id) ? "-" : "+"}{" "}
                </span>
              </p>
              <p
                className={`faq__resposta ${
                  perguntaEscondida(pergunta.id) ? "faq__resposta__aberta" : ""
                }`}
              >
                {pergunta.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
