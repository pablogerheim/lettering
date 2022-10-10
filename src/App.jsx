import { useState } from 'react'
import { paraVoce, imgAlunos, conteudo, receba, imgCamila, professora, perguntas } from './data/mock.js'
import './css/helper.css'
import { BsCheckLg, BsPlusLg, BsDashLg } from 'react-icons/Bs';
import Carousel from 'react-elastic-carousel';
import { UpdateDialog } from "../src/component/updateDialog";


function App() {
  const [imgA,] = useState([...imgAlunos])
  const [imgB,] = useState([...imgCamila])
  const [detalhesModulo, setDetalhesModulo] = useState([])
  const [detalhesPergunta, setDetalhesPergunta] = useState(0)
  const [close, setClose] = useState(true)

  const breakPoints = [{ wideth: 1, itemToShow: 1 }]

  const card8ControleDetalheModulo = (id) => {
    if (detalhesModulo.includes(id)) { setDetalhesModulo([...detalhesModulo.filter(i => i !== id)]) }
    else { setDetalhesModulo([...detalhesModulo, id]) }
  }

  const isHiddenModulo = (id) => detalhesModulo.includes(id)

  const card17ControleDetalhePergunta = (id) => {
    if (detalhesPergunta === id) { setDetalhesPergunta(0) }
    else { setDetalhesPergunta(id) }
  }

  const isHiddenPergunta = (id) => detalhesPergunta === id

  ! function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '896121291775054');

  return (<>
    {close || <UpdateDialog setClose={setClose} />}
    <div className={close ? "direction" : "opacity"}>
      <section className="card-1 ">
        <div className="felx-col-1">
          <h1><span className='yellow'>Curso de Lettering:</span>  Aprenda a fazer artes lindas<span className='yellow'> em até 30 dias</span>  mesmo que você seja iniciante.</h1>
          <h2 className='padding-y'>Junte-se a mais de 1.500 alunos. Assista o vídeo até o <b>FINAL</b>  e veja como começar!</h2>
          <iframe className='video' src="https://player.vimeo.com/video/689846899?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0&h=6e221cecfe&autoplay=1#t=" title="Apresentação" frameborder="1" allowfullscreen></iframe>
          <a href='#garantirVaga' >
            <button className='buttonSub'>Sim! Quero fazer minha inscrição!</button>
          </a>
        </div>
      </section>
      <section className='card-2'>
        <div className="felx-col-2">
          <h3 className='card2-h3'>Como funciona o curso</h3>
          <p >Esse é um treinamento passo a passo, onde você aprende lettering 100% online. São mais de 90 aulas gravadas para você assistir no seu tempo, de onde quiser. Após a inscrição o acesso a plataforma chegará no seu e-mail.</p>
        </div>
      </section>
      <section className='card-3'>
        <h3 className='card3-h3'>O Curso de Lettering é para você que:</h3>
        <div className='grid-3'>
          {paraVoce.map((p, i) => <div key={i} className='box150'><img className='box70' src={`../src/icon/${p.icon}`} alt="imagem" /> <p className='left'>{p.text}</p></div>)}
        </div>
      </section>
      <section className='card-4'>
        <h3 className=''>Esses são os 3 pilares para aprender o desenho das letras.</h3>
        <p>
          <span>Você não precisa saber desenhar, ou ter materiais caros para começar.</span><br />
          <span>Fazer artes lindas e profissionais pode ser mais simples do que você imagina.</span>
        </p>
      </section>
      <section className='card-5'>
        <h3 className='card5-h3'>Veja o que alguns alunos, já estão fazendo em poucas semanas de curso</h3>
        <p>A maioria desses alunos nunca tinha desenhado antes. </p>
        <div className='box450'>
          <Carousel breakPoints={breakPoints}>
            {imgA.map((item, i) => <div key={i}><img className='imgAluno' alt='imagem aluno' src={`../src/img/alunos/${item}`} /></div>)}
          </Carousel>
        </div>

      </section>
      <div className='card-6'>
        <h3 className='card6-h3'>Inscreva-se agora no Curso Lettering na Prática e desperte a artista dentro de você.</h3>
        <a href='#garantirVaga' >
          <button className='buttonSub'>Eu quero aprender Lettering!</button>
        </a>
      </div>
      <section className='card-7'>
        <img className='img7' alt='notebook' src="../src/img/IMG-LNP_VENDAS01_comunidade-V01-1-1024x678.jpg" />
        <h3>Junte-se a Comunidade de Lettering que mais cresce no Brasil.</h3>
        <p>Receba no grupo vip de alunos desafios mensais de lettering, e um encontro ao vivo todo mês com a professora para te incentivar a evoluir cada vez mais no desenho das letras.</p>
      </section>
      <section className='card-8'>
        <h3>Conteúdo do Curso</h3>
        <p>Cada detalhe foi pensado para que mesmo sendo iniciante você consiga fazer artes lindas e profissionais.</p>
        <div className='flex8'>
          {conteudo.map(c => <div className='map8' key={c.id}>
            <img className='img8' src={`../src/img/venda/${c.img}`} alt="imagen do modulo" />
            <button className='button8' onClick={() => card8ControleDetalheModulo(c.id)}>Ver Detalhes</button>
            <p className={!isHiddenModulo(c.id) ? `hidden` : ''}>{c.text}</p>
          </div>)}
        </div>
      </section>
      <section className='card-9'>
        <h3>Inscreva-se hoje e ganhe mais 2 Bônus Exclusivos</h3>
        <div >
          <div className='flex9'>
            <img className='img9' alt='bonus01' src='../src/img/IMG-LNP_VENDAS01_BONUS-V01-01.jpg.webp' />
            <div>
              <img className='icon9' alt='presente' src='../src/icon/BONUS-ICON.svg' />
              <p>
                <span className='title9'>Bônus 1: Valorizando a sua Arte</span><br />
                <span>Como tirar fotos bonitas do seu lettering para postar nas redes sociais.</span>
              </p>
            </div>
          </div>
          <div className='flex9'>
            <img className='img9' alt='bonus01' src='../src/img/IMG-LNP_VENDAS01_BONUS-V01-02.jpg.webp' />
            <div>
              <img className='icon9' alt='presente' src='../src/icon/BONUS-ICON.svg' />
              <p>
                <span className='title9'>Bônus 2: Decoração Plus</span><br />
                <span className='text9'>Aprenda a fazer elementos decorativos para destacar as frases do seu lettering.</span>
              </p>
            </div>
          </div>
        </div>
        <h3>Somando são mais de R$100 reais em bônus.</h3>
      </section>
      <section className='card-10' id='garantirVaga'>
        <div className='box10'>
          <p><b className='title10'>GARANTA SUA VAGA</b><span><br /></span></p>
          <p><b className='subtitle10'>COMECE AGORA E RECEBA</b><span><br /></span></p>
          <div className='garantias10'> {receba.map((r, i) => <div className='flex10'> <div className='icon10'><BsCheckLg /></div>  <p className='text10' key={i}> {r} </p> </div>)}</div>
          <h3> De: <s className='line'> R$ 697</s></h3>
          <h3>por até</h3>
          <h3>12x R$ 19,66</h3>
          <div className='button10'>

            <button onClick={() => { setClose(false),bq('track', 'Lead')}} className='buttonSub'>SIM! EU QUERO COMEÇAR AGORA</button>

          </div>
          <h3>Ou R$ 197 à vista</h3>
          <h3>ESSA OFERTE LIMITADA POR VAGAS</h3>
          <span className='title10'>VAGAS 77% PREENCHIDAS</span>
          <img className='img10' alt='seguro' src='../src/img/Card-pagamento-V1.jpg.webp' />
        </div>
      </section>
      <section className='card-11'>
        <h3>Depoimento dos Alunos</h3>
        <div className='video11'>
          <iframe className='video' src="https://www.youtube.com/embed/lGr-Ko8iAog" title="Depoimento Israel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className='video' src="https://www.youtube.com/embed/O85qAhIuHHk" title="Depoimento Julia Kinoshita" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className='video' src="https://www.youtube.com/embed/j5k1JXgDEcI" title="Depoimento Vanusa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
      <section className='card-12'>
        <h3>Faça artes como essas</h3>
        <div className='box450'>
          <Carousel breakPoints={breakPoints}>
            {imgB.map((item, i) => <div key={i}><img className='imgAluno' alt='imagem aluno' src={`../src/img/camila/${item}`} /></div>)}
          </Carousel>
        </div>
      </section>
      <section className='card-13'>
        <div className='flex13'>
          <h3>Sua Professora</h3>
          <div> {professora.map((p, i) => <p className='professora' key={i}> {p}</p>)}</div>
        </div>
      </section>
      <section className='card-15'>
        <h3 className='title15'>Inscreva-se agora no Curso Lettering na Prática</h3>
        <h3 className='text15'>Em até 12x 19,66</h3>
        <button onClick={() =>{ setClose(false),bq('track', 'Lead')}} className='buttonSub'>SIM! EU QUERO COMEÇAR AGORA</button>
      </section>
      <section className='card-16'>
        <img className='img16' alt='selo garandia de 7 dias' src='../src/img/IMG-LNP_VENDAS01_GARANTIA-V02.jpg.webp' />
        <div>
          <h3> Garantia de 7 dias</h3>
          <p className='text16'>
            <span>Estamos comprometidos com a satisfação dos nossos alunos, esse é o Curso de Lettering mais completo do mercado. </span>
            <span>Por isso, seu risco é zero, teste o curso por 7 dias e tire suas próprias conclusões, se você não gostar basta mandar um simples e-mail e devolvemos 100% do seu dinheiro.</span>
          </p>
        </div>
      </section>
      <section className='card-17'>
        <h3>Dúvidas Frequentes</h3>
        <div>
          {perguntas.map(p => <div key={p.id}>
            <div className='flex-17' >
              <div className={!isHiddenPergunta(p.id) ? `icon17` : 'icon172'}>          {!isHiddenPergunta(p.id) ? <BsPlusLg /> : <BsDashLg />}            </div>
              <button className='button17' onClick={() => card17ControleDetalhePergunta(p.id)}> <p className={!isHiddenPergunta(p.id) ? `text17` : 'text172'}>{p.button}</p></button>
            </div>
            <p className={!isHiddenPergunta(p.id) ? `hidden` : ''}>{p.text}</p>
          </div>)}
        </div>
      </section>
      <footer><p className='footer'>Camila Pegado | Lettering na Prática  © Todos os Direitos Reservados</p></footer>
    </div>
  </>
  )
}

export default App
