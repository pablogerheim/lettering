import "./css/helper.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UpdateDialog from "./component/Dialog/UpdateDialog";
import Intro from "./component/Intro/Intro";
import ComoFunciona from "./component/ComoFunciona/ComoFunciona";
import ParaVoce from "./component/ParaVoce/ParaVoce";
import Pilares from "./component/Pilares/Pilares";
import Students from "./component/Students/Students";
import BannerAprender from "./component/BannerAprender/BannerAprender.jsx";
import Comunidade from "./component/Comunidade/Comunidade";
import Conteudo from "./component/Conteudo/Conteudo";
import BonusExclusivos from "./component/BonusExclusivos/BonusExclusivos";
import SuaVaga from "./component/SuaVaga/SuaVaga";
import Depoimento from "./component/Depoimento/Depoimento";
import FacaArtes from "./component/FacaArtes/FacaArtes";
import Professora from "./component/Professora/Professora";
import BannerAgora from "./component/BannerAgora/BannerAgora.jsx";
import Garantia from "./component/Garantia/Garantia";
import Faq from "./component/Faq/Faq";
import WhatsApp from "./component/WhatsApp/WhatsApp";
import Footer from "./component/Footer/Footer";

function App() {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

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
        <Students />
        <BannerAprender />
        <Comunidade />
        <Conteudo />
        <BonusExclusivos />
        <SuaVaga setOpen={setOpen} />
        <Depoimento />
        <FacaArtes />
        <Professora />
        <BannerAgora setOpen={setOpen} />
        <Garantia />
        <Faq />
        <WhatsApp />
        <Footer />
      </main>
    </>
  );
}

export default App;
