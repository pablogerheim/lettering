import "./Teacher.css";
import {  teacher} from "../../data/mock.js";

function Teacher() {
  return (
    <section className="teacher">
      <div className="teacher__content">
        <h3>Sua Professora</h3>
        <div>
          {teacher.map((p, index) => (
            <p className="teacher__map align-left" key={index}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teacher;
