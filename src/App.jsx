import "./css/helper.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UpdateDialog from "./component/Dialog/UpdateDialog";
import Intro from "./component/Intro/Intro";
import Operation from "./component/Operation/Operation";
import ForYou from "./component/ForYou/ForYou";
import Pillars from "./component/Pillars/Pillars";
import Students from "./component/Students/Students";
import BannerLearn from "./component/BannerLearn/BannerLearn.jsx";
import Community from "./component/Community/Community";
import Substance from "./component/Substance/Substance";
import BonusExclusivos from "./component/BonusExclusivos/BonusExclusivos";
import Vacancy from "./component/Vacancy/Vacancy";
import Testimony from "./component/Testimony/Testimony";
import MakeArts from "./component/MakeArts/MakeArts";
import Teacher from "./component/Teacher/Teacher";
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
        <Operation />
        <ForYou />
        <Pillars />
        <Students />
        <BannerLearn />
        <Community />
        <Substance />
        <BonusExclusivos />
        <Vacancy setOpen={setOpen} />
        <Testimony />
        <MakeArts />
        <Teacher />
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
