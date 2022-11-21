import "./Vacancy.css";
import Button from "../Button/Button";
import { receba } from "../../data/mock.js";
import { BsCheckLg } from 'react-icons/bs';
import React from "react";

function Vacancy({setOpen}) {
  return (
    <section className="vacancy" id="garantirVaga">
      <div className="vacancy__box">
        <p>
          <b className="vacancy__title">GARANTA SUA VAGA</b>
          <span></span>
        </p>
        <p>
          <b className="vacancy__subtitle">COMECE AGORA E RECEBA</b>
          <span></span>
        </p>
        <div className="vacancy__guarantees">
          {receba.map((r, index) => (
            <div key={index} className="vacancy__map">
              <div className="vacancy__icon">
                
                <BsCheckLg />
              </div>
              <p className="vacancy__text"> {r} </p>
            </div>
          ))}
        </div>
        <h3>
          De: <s className="line"> R$ 697</s>
        </h3>
        <h3>por até</h3>
        <h3>12x R$ 19,66</h3>

        <Button setOpen={setOpen} id={"garantirVaga"} className={"add-to-cart"}>
          SIM! EU QUERO COMEÇAR AGORA
        </Button>

        <h3>Ou R$ 197 à vista</h3>
        <h3>ESSA OFERTE LIMITADA POR VAGAS</h3>
        <div className="vacancy__footer">
          <span className="vacancy__title">VAGAS 77% PREENCHIDAS</span>
          <img
            alt="seguro"
            src="https://camilapegado.com.br/wp-content/uploads/2022/05/Card-pagamento-V1.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Vacancy;
