import "./DuvidasFrequentes.css";
import { perguntas } from "../../data/mock.js";
import { v4 } from "uuid";
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
      <div className="duvidas-box">
        <h3 className="duvidas-title"> Dúvidas Frequentes <br /></h3>
        <div>
          {perguntas.map((p) => (
            <div key={v4()}>
              <div className="duvidas-div">
                <button
                  className="duvidas-button"
                  onClick={() => card17ControleDetalhePergunta(p.id)}
                >
                  <p
                    className={
                      !isHiddenPergunta(p.id) ? `duvidas-text` : "duvidas-text-active"
                    }
                  >
                    {!isHiddenPergunta(p.id) ? `+` : "-"} {p.button}
                  </p>
                </button>
              </div>
              <p className={!isHiddenPergunta(p.id) ? `hidden` : "duvidas-p"}>
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
