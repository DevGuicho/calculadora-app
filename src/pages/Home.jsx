import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import mainImg from '../assets/undraw_education_f8ru.svg'
import microImg from '../assets/microcinta.png'
import coaxilaImg from '../assets/coaxial.png'
import bifiliarImg from '../assets/bifiliar.png'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Calculadora de Líneas de Transmisión</title>
        <meta
          name="description"
          content="Calculadora de lineas de transmisión"
        />
      </Helmet>
      <Header />
      <section className="hero">
        <div className="hero__container">
          <div className="hero__left">
            <h1 className="hero__title">
              Calculadora de Líneas de Transmisión
            </h1>
            <p className="hero__text">
              Calculadora de líneas de transmisión para tres tipos diferentes de
              líneas como microcinta, coaxial y líneas bifiliares, utilizando
              las formulas presentadas por el Dr. Rodolfo Neri Vela en su libro{' '}
              <b>"Líneas de Transmisión"</b>
            </p>
            <div className="hero__buttons">
              <a href="#microcinta" className="btn btn-secondary">
                Quiero Saber más
              </a>
              <Link to="/calculadoras" className="btn btn-primary">
                Calculadoras
              </Link>
            </div>
          </div>
          <img src={mainImg} alt="Ilustration" className="hero__image" />
        </div>
      </section>
      <section className="linea" id="microcinta">
        <div className="linea__container">
          <img src={microImg} alt="linea ilustracion" />
          <div className="linea__info">
            <h2 className="linea__title">Línea de Microcinta</h2>
            <p>
              Las líneas de microcinta hacen parte del grupo de las líneas de
              transmisión, por ello poseen las características de líneas
              coaxiales y guías de onda, como son impedancia característica y
              propagación de ondas EM.
            </p>
            <p>
              Estas líneas son dispositivos de mucho uso en la electrónica ya qu
              epermiten de acuerdo a su configuración crear varios elementos
              como filtros, resonadores, acopladores, antenas...
            </p>
            <p>
              Constan de dos placas paralelas separadas por un dieléctrico donde
              una tiene el ancho y el largo del dieléctrico (plano tierra) y la
              otra riene una ancho menor (conductor de cinta)
            </p>
            <Link to="/calculadoras/micro" className="btn btn-primary">
              Calcular Línea
            </Link>
          </div>
        </div>
      </section>
      <section className="linea" id="coaxial">
        <div className="linea__container">
          <div className="linea__info">
            <h2 className="linea__title">Línea de Cable Coaxial</h2>
            <p>
              El cable coaxial es básicamente una línea de transmisión con
              simetría cilíndrica, compuesto por un conductor central, otro
              conductor exterior y entre los conductores se encuentra un medio
              dieléctrico.
            </p>

            <Link to="/calculadoras/coaxial" className="btn btn-primary">
              Calcular Línea
            </Link>
          </div>
          <img src={coaxilaImg} alt="linea ilustracion" />
        </div>
      </section>
      <section className="linea" id="bifiliar">
        <div className="linea__container">
          <img src={bifiliarImg} alt="linea ilustracion" />
          <div className="linea__info">
            <h2 className="linea__title">Línea de Cable Bifiliar</h2>
            <p>
              Un cable bifilar es una línea de transmisión en la cual la
              distancia entre dos conductores paralelos es mantenida constante
              gracias a un material dieléctrico. El mismo material que mantiene
              el espaciado y el paralelismo entre los conductores sirve también
              de vaina.
            </p>
            <p>
              Los cables bifilares son utilizados como líneas de transmisión
              simétricas entre una antena, y un transmisor o receptor. Su
              principal ventaja reside en que las líneas de transmisión
              simétricas tienen pérdidas un orden de magnitud menores que las
              líneas de transmisión coaxiales.
            </p>
            <Link to="/calculadoras/bifilar" className="btn btn-primary">
              Calcular Línea
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
