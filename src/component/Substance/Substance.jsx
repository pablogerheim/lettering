import "./Substance.css";
import CardText from "../CardText/CardText" 
import {SubstanceItems} from "../../data/mock"
import { useState } from "react"

function Substance() {
  const [substance, setSubstance] = useState(SubstanceItems)

  const toggleCard = index => {
    setSubstance(substance.map((item, i) => {
      if (i === index) {
        item.open = !item.open
      }

      return item;
    }))
  }

  return (
    <section className="substance">
      <h3>Conteúdo do Curso</h3>
      <p className="substance__subtitle">
        Cada detalhe foi pensado para que mesmo sendo iniciante você consiga
        fazer artes lindas e profissionais.
      </p>
      <div className="substance__content">
        {substance.map((item) => (
          <CardText card={item} setOpen={toggleCard}/>
        ))}
      </div>
    </section>
  );
}

export default Substance;




