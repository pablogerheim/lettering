import "./Conteudo.css";
import CardText from "../CardText/CardText" 
import {ConteudoItems} from "../../data/mock"
import { useState } from "react"

function Conteudo() {
  const [conteudo, setConteudo] = useState(ConteudoItems)

  const toggleCard = index => {
    setConteudo(conteudo.map((item, i) => {
      if (i === index) {
        item.open = !item.open
      }

      return item;
    }))
  }

  return (
    <section className="conteudo">
      <h3>Conteúdo do Curso</h3>
      <p className="conteudo__subtitle">
        Cada detalhe foi pensado para que mesmo sendo iniciante você consiga
        fazer artes lindas e profissionais.
      </p>
      <div className="conteudo__content">
        {conteudo.map((item) => (
          <CardText card={item} setOpen={toggleCard}/>
        ))}
      </div>
    </section>
  );
}

export default Conteudo;




