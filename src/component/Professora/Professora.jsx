import "./Professora.css";
import {  professora} from "../../data/mock.js";
import { v4 } from "uuid";

function Professora() {
  return (
    <section className="professora">
      <div className="professora__content">
        <h3>Sua Professora</h3>
        <div>
          {professora.map((p) => (
            <p className="professora-map align-left" key={v4()}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Professora;
