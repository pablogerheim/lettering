import "./css/helper.css";
import { useState } from "react";
import { imgAlunos, imgCamila } from "./data/mock.js";
import { v4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import UpdateDialog from "./component/Dialog/UpdateDialog";
import Intro from "./component/Intro/Intro";
import ComoFunciona from "./component/ComoFunciona/ComoFunciona";
import ParaVoce from "./component/ParaVoce/ParaVoce";
import Pilares from "./component/Pilares/Pilares";
import Alunos from "./component/Alunos/Alunos";
import Faixa1 from "./component/Faixa1/Faixa1.jsx";
import Comunidade from "./component/Comunidade/Comunidade";
import Conteudo from "./component/Conteudo/Conteudo";
import BonusExclusivos from "./component/BonusExclusivos/BonusExclusivos";
import SuaVaga from "./component/SuaVaga/SuaVaga";
import Depoimento from "./component/Depoimento/Depoimento";
import FacaArtes from "./component/FacaArtes/FacaArtes";
import Professora from "./component/Professora/Professora";
import Faixa2 from "./component/Faixa2/Faixa2.jsx";
import Garantia from "./component/Garantia/Garantia";
import DuvidasFrequentes from "./component/DuvidasFrequentes/DuvidasFrequentes";
import WhatsApp from "./component/WhatsApp/WhatsApp";
import Footer from "./component/Footer/Footer";

function App() {
  const [imgA] = useState([...imgAlunos]);
  const [imgB] = useState([...imgCamila]);
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ];

  return (
    <>
      {!open || (
        <UpdateDialog
          setOpen={setOpen}
          current_path={searchParams.get("src")}
        />
      )}
      <main className={!open ? "direction" : "opacity"}>
        <Intro />
        <ComoFunciona />
        <ParaVoce />
        <Pilares />
        <Alunos >
          <Carousel breakPoints={breakPoints}>
            {imgA.map((item) => (
              <div key={v4()}>
                <img
                  className="imgAluno"
                  alt="imagem aluno"
                  src={`${item}`}
                />
              </div>
            ))}
          </Carousel>
        </Alunos>
        <Faixa1 />
        <Comunidade />
        <Conteudo />
        <BonusExclusivos />
        <SuaVaga setOpen={setOpen} />
        <Depoimento />
        <FacaArtes>
          <Carousel breakPoints={breakPoints}>
            {imgB.map((item) => (
              <div key={v4()}>
                <img
                  className="imgAluno"
                  alt="imagem aluno"
                  src={`${item}`}
                />
              </div>
            ))}
          </Carousel>
        </FacaArtes>
        <Professora />
        <Faixa2 setOpen={setOpen} />
        <Garantia />
        <DuvidasFrequentes />
        <WhatsApp />
        <Footer />
      </main>
    </>
  );
}

export default App;
