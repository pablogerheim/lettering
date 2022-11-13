import "./Professora.css";
import {  professora} from "../../data/mock.js";

function Professora() {
  return (
    <section className="professora">
      <div className="professora__content">
        <h3>Sua Professora</h3>
        <div>
          {professora.map((p, index) => (
            <p className="professora__map align-left" key={index}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Professora;
