import "./DuvidasFrequentes.css";
import { perguntas } from "../../data/mock.js";
import { useState } from "react";

function DuvidasFrequentes() {
  const [detalhesPergunta, setDetalhesPergunta] = useState(0);

  const card17ControleDetalhePergunta = (id) => {
    if (detalhesPergunta === id) {
      setDetalhesPergunta(0);
    } else {
      setDetalhesPergunta(id);
    }
  };

  const isHiddenPergunta = (id) => detalhesPergunta === id;

  return (
    <section className="duvidas">
      <div className="duvidas__box">
        <h3 className="duvidas__title"> Dúvidas Frequentes <br /></h3>
        <div>
          {perguntas.map((p, index) => (
            <div key={index}>
              <div className="duvidas__content">
                <button
                  className="duvidas__button"
                  onClick={() => card17ControleDetalhePergunta(p.id)}
                >
                  <p
                    className={
                      !isHiddenPergunta(p.id) ? `duvidas__text` : "duvidas__text-active"
                    }
                  >
                    {!isHiddenPergunta(p.id) ? `+` : "-"} {p.button}
                  </p>
                </button>
              </div>
              <p className={!isHiddenPergunta(p.id) ? `hidden` : "duvidas__p"}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DuvidasFrequentes;
