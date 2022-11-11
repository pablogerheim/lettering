import "./SuaVaga.css";
import Button from "../../component/Button/Button";
import { receba } from "../../data/mock.js";
import { BsCheckLg } from 'react-icons/bs';
import React from "react";

function SuaVaga({setOpen}) {
  return (
    <section className="suaVaga" id="garantirVaga">
      <div className="suaVaga__box">
        <p>
          <b className="suaVaga__title">GARANTA SUA VAGA</b>
          <span>
          </span>
        </p>
        <p>
          <b className="suaVaga__subtitle">COMECE AGORA E RECEBA</b>
          <span>
          </span>
        </p>
        <div className="suaVaga__garantias">
          {receba.map((r, index) => (
            <div key={index} className="suaVaga__map">
                  <div className="suaVaga__icon"> <BsCheckLg/> </div>
              <p className="suaVaga__text"> {r} </p>
            </div>
          ))}
        </div>
        <h3>
          De: <s className="line"> R$ 697</s>
        </h3>
        <h3>por até</h3>
        <h3>12x R$ 19,66</h3>

        <Button
          setOpen={setOpen}
          id={"garantirVaga"}
          className={"add-to-cart"}
        >
          SIM! EU QUERO COMEÇAR AGORA
        </Button>

        <h3>Ou R$ 197 à vista</h3>
        <h3>ESSA OFERTE LIMITADA POR VAGAS</h3>
        <div className="suaVaga__footer">
        <span className="suaVaga__title">VAGAS 77% PREENCHIDAS</span>
        <img
          className="suaVaga__img"
          alt="seguro"
          src="https://camilapegado.com.br/wp-content/uploads/2022/05/Card-pagamento-V1.jpg"
        />
        </div>
      </div>
    </section>
  );
}

export default SuaVaga;
