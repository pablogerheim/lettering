import "./SuaVaga.css";
import Button from "../../component/Button/Button";
import { receba } from "../../data/mock.js";
import { v4 } from "uuid";

function SuaVaga({setOpen}) {
  return (
    <section className="suaVaga" id="garantirVaga">
      <div className="suaVaga-box">
        <p>
          <b className="suaVaga-title">GARANTA SUA VAGA</b>
          <span>
            <br />
          </span>
        </p>
        <p>
          <b className="suaVaga-subtitle">COMECE AGORA E RECEBA</b>
          <span>
            <br />
          </span>
        </p>
        <div className="suaVaga-garantias">
          {receba.map((r) => (
            <div key={v4()} className="suaVaga-map">
                  <div className="suaVaga-icon"> • </div>
              <p className="suaVaga-text"> {r} </p>
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
        <span className="suaVaga-title">VAGAS 77% PREENCHIDAS</span>
        <img
          className="suaVaga-img"
          alt="seguro"
          src="https://camilapegado.com.br/wp-content/uploads/2022/05/Card-pagamento-V1.jpg"
        />
      </div>
    </section>
  );
}

export default SuaVaga;
