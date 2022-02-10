import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'
import {BsWhatsapp, BsTwitter} from 'react-icons/bs'
import {FaRegHandPointRight, FaHandshake, FaPhotoVideo} from 'react-icons/fa'
import {GiTeamIdea, GiHouse} from 'react-icons/gi'
import {AiOutlineForm, AiOutlineFacebook} from 'react-icons/ai'
import {MdHttp, MdOutlineSupportAgent} from 'react-icons/md'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const shareUrl = 'https://beltranweb.tk'
const title = "Te recomiendo esta página para hacer tu sitio web"

export default function Home() {
  var cards = [
    {
      icon: <FaPhotoVideo color="#25a0c0" size={80}/>,
      text: 'Carruseles de imágenes'
    },
    {
      icon: <AiOutlineForm color="#25a0c0" size={80}/>,
      text: 'Formularios de contacto'
    },
    {
      icon: <AiOutlineFacebook color="#25a0c0" size={80}/>,
      text: 'Botones para compartir en redes sociales'
    },
    {
      icon: <GiHouse color="#25a0c0" size={80}/>,
      text: 'Hosting incluido primer año'
    },
    {
      icon: <MdHttp color="#25a0c0" size={80}/>,
      text: 'Dominio incluido primer año*'
    },
    {
      icon: <BsWhatsapp color="#25a0c0" size={80}/>,
      text: 'Boton WhatsApp'
    },
    {
      icon: <GiTeamIdea color="#25a0c0" size={80}/>,
      text: 'Acompañamiento en todo momento'
    },
    {
      icon: <MdOutlineSupportAgent color="#25a0c0" size={80}/>,
      text: 'Administración desde $20 al mes'
    }
  ]
  return (
    <div>
      <div>
        <Head>
          <title>Beltran Web</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="La tranquilidad no es negociable, diseñamos, creamos y administramos tu página web, contáctanos" />
          <meta name="keywords" content="paginas web, administracion paginas web, paginas web baratas" />
          <meta name="author" content="Ernesto Beltrán" />
          <meta name="copyright" content="Ernesto Beltrán" />
          <meta name="robots" content="index"/>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
      </div>
      <div className={styles.home}>
        <h1>La tranquilidad NO es negociable</h1>
        <p>Diseñamos, creamos y administramos su sitio web</p>
        <div className={styles.whatsBtn}>
          <a href="http://wa.me/+573013479980"><BsWhatsapp style={{fontSize: '3em', color: '#25d366'}}/></a>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.ulSecondPage}>
          <Zoom cascade>
            <ul>
              <li><FaRegHandPointRight className={styles.handLi} color="#25a0c0" />Páginas adaptables a vista Móvil, de Tablet y de Computadores.</li>
              <li><FaRegHandPointRight className={styles.handLi} color="#25a0c0" />Diseños personalizados.</li>
              <li><FaRegHandPointRight className={styles.handLi} color="#25a0c0" />Alta velocidad de carga.</li>
              <li><FaRegHandPointRight className={styles.handLi} color="#25a0c0" />Amigable con SEO.</li>
            </ul>
          </Zoom>
          <a href="http://wa.me/+573013479980" className={styles.btnSecond}>Contáctanos</a>
        </div>
        <div className={styles.imagenSecondPage}>
          
        </div>
      </div>
      <div className={styles.thirdPage}>
        <div className={styles.titleThirdPage}>
          Páginas desde $200
        </div>
        <div className={styles.options}>
          <Fade bottom cascade>
            {cards.map((card, index) => { return(
              <div className={styles.card} key={index}>
                <div className={styles.iconCard}>
                  {card.icon}
                </div>
                <div className={styles.textCard}>
                  {card.text}
                </div>
              </div>
            )})}
          </Fade>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.contentFooter}>
          <div className={styles.socialFooter}>
            <a href=""><BsWhatsapp color="whitesmoke" size={40}/></a>
          </div>
          <div className={styles.contactFooter}>
            <a href="https://beltranweb.tk">beltranweb.tk</a><br/>
            +57 301-3479980<br/>
            <a href="mailto:beltranernesto1982@gmail.com">beltranernesto1982@gmail.com</a>
          </div>
          <div className={styles.textShare}>
            Comparte en redes sociales
          </div>
          <div className={styles.share}>
            <FacebookShareButton
              url={shareUrl}
              quote={title}
            >
              <AiOutlineFacebook size={32} round color="#fff"/>
            </FacebookShareButton>
            <TwitterShareButton
                url={shareUrl}
                title={title}
            >
              <BsTwitter size={32} round color="#fff"/>
            </TwitterShareButton>
            <WhatsappShareButton
                url={shareUrl}
                title={title}
            >
              <BsWhatsapp size={32} round color="#fff"/>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}
