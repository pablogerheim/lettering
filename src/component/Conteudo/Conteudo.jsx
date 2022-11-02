import "./Conteudo.css";
import { conteudo } from "../../data/mock.js";
import { useState } from "react";
import { v4 } from "uuid";

function Conteudo() {
  const [detalhesModulo, setDetalhesModulo] = useState([]);

  const card8ControleDetalheModulo = (id) => {
    if (detalhesModulo.includes(id)) {
      setDetalhesModulo([...detalhesModulo.filter((i) => i !== id)]);
    } else {
      setDetalhesModulo([...detalhesModulo, id]);
    }
  };

  const isHiddenModulo = (id) => detalhesModulo.includes(id);

  return (
    <section className="conteudo">
      <h3>Conteúdo do Curso</h3>
      <p>
        Cada detalhe foi pensado para que mesmo sendo iniciante você consiga
        fazer artes lindas e profissionais.
      </p>
      <div className="conteudo__content">
        {conteudo.map((c) => (
          <div className="conteudo__map" key={v4()}>
            <img className="conteudo__img" src={`${c.img}`} alt="imagen do modulo" />
            <button
              className="conteudo__button"
              onClick={() => card8ControleDetalheModulo(c.id)}
            >
              Ver Detalhes
            </button>
            <p className={!isHiddenModulo(c.id) ? `hidden ` : ""}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Conteudo;




