import { useState } from 'react'
import { paraVoce, imgAlunos, conteudo, receba, imgCamila, professora, perguntas } from './data/mock.js'
import './css/helper.css'
import Carousel from 'react-elastic-carousel';
import { UpdateDialog } from "../src/component/updateDialog";
import { useSearchParams } from "react-router-dom";
import { v4 } from 'uuid'

function App() {
  const [imgA,] = useState([...imgAlunos])
  const [imgB,] = useState([...imgCamila])
  const [detalhesModulo, setDetalhesModulo] = useState([])
  const [detalhesPergunta, setDetalhesPergunta] = useState(0)
  const [close, setClose] = useState(true)
  const [searchParams] = useSearchParams()

  console.log("Serach Params",
    searchParams.get("utm_source"),
    searchParams.get("src"),
    searchParams.get("utm_medium"),
    searchParams.get("utm_campaign"),
    searchParams.get("utm_content"),
    searchParams.get("utm_id")
  )

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 }
  ]

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
    {close || <UpdateDialog setClose={setClose}
      utm_source={searchParams.get("utm_source")}

    />}
    <div className={close ? "direction" : "opacity"}>

      <section className="card-1 ">
        <div className="flex1">
          <h1><span className='yellow'>Curso de Lettering:</span> Aprenda a fazer artes lindas<span className='yellow'> em até 30 dias</span>  mesmo que você seja iniciante.</h1>
          <h2 className='padding-y'>Junte-se a mais de 1.500 alunos. Assista o vídeo até o <b>FINAL</b>  e veja como começar!</h2>
          
          <iframe className='video' id='v1' src="https://player.vimeo.com/video/689846899?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0&h=6e221cecfe&autoplay=1#t=" title="Apresentação" frameBorder="1" allowfullscreen></iframe>
          <p>utm_source:{searchParams.get("utm_source")}</p>
          <p>src:{searchParams.get("src")}</p>
          <p>utm_medium:{searchParams.get("utm_medium")}</p>
          <p>utm_campaign:{searchParams.get("utm_campaign")}</p>
          <p>utm_content:{searchParams.get("utm_content")}</p>
          <p>utm_id:{searchParams.get("utm_id")}</p>
          <a className='b1' href='#garantirVaga' >
            <button className='buttonSub '>Sim! Quero fazer minha inscrição!</button>
          </a>
        </div>
      </section>
      <section className='card-2'>
        <div className="flex2">
          <h3 className='card2-h3 align-left' >Como funciona o curso</h3>
          <p className='align-left' >Esse é um treinamento passo a passo, onde você aprende lettering 100% online. São mais de 90 aulas gravadas para você assistir no seu tempo, de onde quiser. Após a inscrição o acesso a plataforma chegará no seu e-mail.</p>
        </div>
      </section>
      <section className='card-3'>
        <h3 className='card3-h3'>O Curso de Lettering é para você que:</h3>
        <div className='grid-3'>
          {paraVoce.map(p => <div key={v4()} className='box150'> <p className='left'>{p.text}</p></div>)}
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
            {imgA.map(item => <div key={v4()}><img className='imgAluno' alt='imagem aluno' src={`${item}`} /></div>)}
          </Carousel>
        </div>

      </section>
      <div className='card-6'>
        <h3 className='card6-h3 align-left'>Inscreva-se agora no Curso Lettering na Prática e desperte a artista dentro de você.</h3>
        <a href='#garantirVaga' >
          <button className='buttonSub'>Eu quero aprender Lettering!</button>
        </a>
      </div>
      <section className='card-7'>
        <img className='img7' alt='notebook' src="https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_comunidade-V01-1-1024x678.jpg" />
        <div>
          <h3 className='align-left'>Junte-se a Comunidade de Lettering que mais cresce no Brasil.</h3>
          <p className='align-left'>Receba no grupo vip de alunos desafios mensais de lettering, e um encontro ao vivo todo mês com a professora para te incentivar a evoluir cada vez mais no desenho das letras.</p>
        </div>
      </section>
      <section className='card-8'>
        <h3>Conteúdo do Curso</h3>
        <p>Cada detalhe foi pensado para que mesmo sendo iniciante você consiga fazer artes lindas e profissionais.</p>
        <div className='flex8'>
          {conteudo.map(c => <div className='map8' key={v4()}>
            <img className='img8' src={`${c.img}`} alt="imagen do modulo" />
            <button className='button8' onClick={() => card8ControleDetalheModulo(c.id)}>Ver Detalhes</button>
            <p className={!isHiddenModulo(c.id) ? `hidden` : ''}>{c.text}</p>
          </div>)}
        </div>
      </section>
      <section className='card-9'>
        <h3>Inscreva-se hoje e ganhe mais 2 Bônus Exclusivos</h3>
        <div className='box9'>
          <div className='flex9'>
            <img className='img9' alt='bonus01' src='https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_BONUS-V01-01.jpg' />
            <div>
              <svg className='icon9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.21 61.73">
                <path d="M19.23,12.34c-2.89-4.52-1.02-8.77,1.51-10.74,2.5-1.95,7.3-2.75,10.9,1.42C33.16,1.2,35.06,.09,37.47,0c1.8-.07,3.43,.42,4.87,1.49,1.69,1.27,2.71,2.96,3.05,5.07,.33,2.08-.23,3.94-1.42,5.77h.88c4.45,0,8.91,0,13.36,0,3.07,0,4.99,1.93,5,5.02,0,1.81,0,3.62,0,5.43,0,2.07-.84,3.64-2.72,4.55-.46,.22-.38,.55-.38,.89,0,8.39,0,16.79,0,25.18,0,1.16,0,2.32,0,3.47-.02,2.89-1.92,4.83-4.79,4.83-15.79,.01-31.59,0-47.38,0-2.91,0-4.81-1.94-4.81-4.88,0-9.5,0-19.01,0-28.51,0-.57-.15-.86-.69-1.15C.82,26.31,.04,24.86,.02,23.03c-.02-1.98-.03-3.96,0-5.93,.04-2.81,2.02-4.75,4.82-4.76,4.5,0,9,0,13.51,0h.88ZM6.19,27.82v.56c0,9.48,0,18.96,0,28.44,0,1.27,.58,1.83,1.87,1.83,5.06,0,10.11,0,15.17,0,.21,0,.42-.03,.64-.04V27.82H6.19Zm33.17,0v30.83h.7c5.01,0,10.01,0,15.02,0,1.42,0,1.95-.54,1.95-1.98,0-9.36,0-18.72,0-28.08v-.78h-17.67Zm-12.34,30.79h9.17V27.83h-9.17v30.78Zm-3.15-43.14c-.16-.03-.23-.05-.3-.05-6.25,0-12.5-.01-18.76,0-1.14,0-1.69,.61-1.7,1.78-.01,1.83,0,3.66,0,5.49,0,1.5,.48,1.98,1.99,1.98,5.99,0,11.98,0,17.96,0,.26,0,.51,0,.8,0V15.47Zm15.45,9.15c.19,.02,.3,.05,.42,.05,6.23,0,12.46,0,18.68,0,1.11,0,1.66-.58,1.67-1.72,.01-1.83,0-3.66,0-5.49,0-1.54-.5-2.04-2.03-2.04-5.99,0-11.98,0-17.96,0-.25,0-.51,.02-.78,.04v9.17Zm-3.14,.03V15.47h-9.16v9.17h9.16Zm-6.14-12.34c0-1.63,.03-3.17,0-4.71-.06-2.5-2.02-4.45-4.45-4.51-2.51-.06-4.56,1.82-4.76,4.37-.18,2.35,1.61,4.6,4.04,4.82,1.69,.16,3.4,.03,5.18,.03Zm3.17,.03c.68,0,1.3,.02,1.92,0,1.25-.04,2.52,.05,3.74-.17,2.19-.41,3.73-2.65,3.5-4.82-.25-2.39-2.12-4.19-4.42-4.26-2.32-.07-4.48,1.57-4.7,3.83-.17,1.76-.04,3.56-.04,5.43Z" ></path>
              </svg>
              <p className='align-left'>
                <span className='title9'>Bônus 1: Valorizando a sua Arte</span><br />
                <span>Como tirar fotos bonitas do seu lettering para postar nas redes sociais.</span>
              </p>
            </div>
          </div>
          <div className='flex9'>
            <img className='img9' alt='bonus01' src='https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_BONUS-V01-02.jpg' />
            <div>
              <svg className='icon9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.21 61.73">
                <path d="M19.23,12.34c-2.89-4.52-1.02-8.77,1.51-10.74,2.5-1.95,7.3-2.75,10.9,1.42C33.16,1.2,35.06,.09,37.47,0c1.8-.07,3.43,.42,4.87,1.49,1.69,1.27,2.71,2.96,3.05,5.07,.33,2.08-.23,3.94-1.42,5.77h.88c4.45,0,8.91,0,13.36,0,3.07,0,4.99,1.93,5,5.02,0,1.81,0,3.62,0,5.43,0,2.07-.84,3.64-2.72,4.55-.46,.22-.38,.55-.38,.89,0,8.39,0,16.79,0,25.18,0,1.16,0,2.32,0,3.47-.02,2.89-1.92,4.83-4.79,4.83-15.79,.01-31.59,0-47.38,0-2.91,0-4.81-1.94-4.81-4.88,0-9.5,0-19.01,0-28.51,0-.57-.15-.86-.69-1.15C.82,26.31,.04,24.86,.02,23.03c-.02-1.98-.03-3.96,0-5.93,.04-2.81,2.02-4.75,4.82-4.76,4.5,0,9,0,13.51,0h.88ZM6.19,27.82v.56c0,9.48,0,18.96,0,28.44,0,1.27,.58,1.83,1.87,1.83,5.06,0,10.11,0,15.17,0,.21,0,.42-.03,.64-.04V27.82H6.19Zm33.17,0v30.83h.7c5.01,0,10.01,0,15.02,0,1.42,0,1.95-.54,1.95-1.98,0-9.36,0-18.72,0-28.08v-.78h-17.67Zm-12.34,30.79h9.17V27.83h-9.17v30.78Zm-3.15-43.14c-.16-.03-.23-.05-.3-.05-6.25,0-12.5-.01-18.76,0-1.14,0-1.69,.61-1.7,1.78-.01,1.83,0,3.66,0,5.49,0,1.5,.48,1.98,1.99,1.98,5.99,0,11.98,0,17.96,0,.26,0,.51,0,.8,0V15.47Zm15.45,9.15c.19,.02,.3,.05,.42,.05,6.23,0,12.46,0,18.68,0,1.11,0,1.66-.58,1.67-1.72,.01-1.83,0-3.66,0-5.49,0-1.54-.5-2.04-2.03-2.04-5.99,0-11.98,0-17.96,0-.25,0-.51,.02-.78,.04v9.17Zm-3.14,.03V15.47h-9.16v9.17h9.16Zm-6.14-12.34c0-1.63,.03-3.17,0-4.71-.06-2.5-2.02-4.45-4.45-4.51-2.51-.06-4.56,1.82-4.76,4.37-.18,2.35,1.61,4.6,4.04,4.82,1.69,.16,3.4,.03,5.18,.03Zm3.17,.03c.68,0,1.3,.02,1.92,0,1.25-.04,2.52,.05,3.74-.17,2.19-.41,3.73-2.65,3.5-4.82-.25-2.39-2.12-4.19-4.42-4.26-2.32-.07-4.48,1.57-4.7,3.83-.17,1.76-.04,3.56-.04,5.43Z" ></path>
              </svg>

              <p className='align-left'>
                <span className='title9 '>Bônus 2: Decoração Plus</span><br />
                <span >Aprenda a fazer elementos decorativos para destacar as frases do seu lettering.</span>
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
          <div className='garantias10'> {receba.map(r => <div key={v4()} className='flex10'> <div className='icon10'> •	</div>  <p className='text10'> {r} </p> </div>)}</div>
          <h3> De: <s className='line'> R$ 697</s></h3>
          <h3>por até</h3>
          <h3>12x R$ 19,66</h3>
          <div className='button10'>
            <button onClick={() => { setClose(false), fbq('track', 'AddToCart') }} className='buttonSub'>SIM! EU QUERO COMEÇAR AGORA</button>
          </div>
          <h3>Ou R$ 197 à vista</h3>
          <h3>ESSA OFERTE LIMITADA POR VAGAS</h3>
          <span className='title10'>VAGAS 77% PREENCHIDAS</span>
          <img className='img10' alt='seguro' src='https://camilapegado.com.br/wp-content/uploads/2022/05/Card-pagamento-V1.jpg' />
        </div>
      </section>
      <section className='card-11'>
        <h3>Depoimento dos Alunos</h3>
        <div className='video11'>
          <iframe className='video' src="https://www.youtube.com/embed/lGr-Ko8iAog" title="Depoimento Israel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className='video' src="https://www.youtube.com/embed/O85qAhIuHHk" title="Depoimento Julia Kinoshita" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className='video' src="https://www.youtube.com/embed/j5k1JXgDEcI" title="Depoimento Vanusa" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
      <section className='card-12'>
        <h3>Faça artes como essas</h3>
        <div className='box450'>
          <Carousel breakPoints={breakPoints}>
            {imgB.map(item => <div key={v4()}><img className='imgAluno' alt='imagem aluno' src={`${item}`} /></div>)}
          </Carousel>
        </div>
      </section>
      <section className='card-13'>
        <div className='flex13'>
          <h3>Sua Professora</h3>
          <div> {professora.map(p => <p className='professora align-left' key={v4()}> {p}</p>)}</div>
        </div>
      </section>
      <section className='card-15'>
        <h3 className='title15'>Inscreva-se agora no Curso Lettering na Prática</h3>
        <h3 className='text15'>Em até 12x 19,66</h3>
        <div className='flex15'>
          <button onClick={() => { setClose(false), fbq('track', 'AddToCart') }} className='buttonSub '>SIM! EU QUERO COMEÇAR AGORA</button>
        </div>
      </section>
      <section className='card-16'>
        <img className='img16' alt='selo garandia de 7 dias' src='https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_GARANTIA-V02.jpg' />
        <div>
          <h3 className='title16'> Garantia de 7 dias</h3>
          <p className='text16'>
            <span>Estamos comprometidos com a satisfação dos nossos alunos, esse é o Curso de Lettering mais completo do mercado. </span>
            <span>Por isso, seu risco é zero, teste o curso por 7 dias e tire suas próprias conclusões, se você não gostar basta mandar um simples e-mail e devolvemos 100% do seu dinheiro.</span>
          </p>
        </div>
      </section>
      <section className='card-17'>
        <div className='box17'>
          <h3 className='title17'> Dúvidas Frequentes <br /> </h3>
          <div >
            {perguntas.map(p => <div key={v4()}>
              <div className='flex-17' >
                <button className='button17' onClick={() => card17ControleDetalhePergunta(p.id)}> <p className={!isHiddenPergunta(p.id) ? `text17` : 'text172'}>{!isHiddenPergunta(p.id) ? `+` : '-'} {p.button}</p></button>
              </div>
              <p className={!isHiddenPergunta(p.id) ? `hidden` : ''}>{p.text}</p>
            </div>)}
          </div>
        </div>
      </section>
      <a onClick={() => fbq('track', 'Contact')} className='linkwwapp' href="https://api.whatsapp.com/send?phone=5532988468403&text=Eu%20quero%20fazer%20uma%20compra.%20Pode%20me%20ajudar?" target="_blank" >
        <img alt='WhatsApp' className='imgwwapp' src="https://camilapegado.com.br/wp-content/uploads/2022/02/whatsapp-icone-2-1020x1024-1.png" />
      </a>
      <footer><p className='footer'>Camila Pegado | Lettering na Prática  © Todos os Direitos Reservados</p></footer>
    </div>
  </>
  )
}

export default App
