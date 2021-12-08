import React from 'react'
import microImg from '../assets/microcinta.png'
import coaxilaImg from '../assets/coaxial.png'
import bifiliarImg from '../assets/bifiliar.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Default = () => {
  return (
    <>
      <Helmet>
        <title>Calculadoras | Calculadora de Líneas de Transmisión</title>
        <meta
          name="description"
          content="Calculadora de lineas de transmisión"
        />
      </Helmet>
      <main className="grid__options">
        <h1 className="calculators__title">Seleccione una Opción</h1>
        <div className="calculators__options">
          <article>
            <Link to="/calculadoras/micro">
              <img src={microImg} alt="" />
              <h2>Microcinta</h2>
            </Link>
          </article>
          <article>
            <Link to="/calculadoras/coaxial">
              <img src={coaxilaImg} alt="" />
              <h2>Coaxial</h2>
            </Link>
          </article>
          <article>
            <Link to="/calculadoras/bifilar">
              <img src={bifiliarImg} alt="" />
              <h2>Bifilar</h2>
            </Link>
          </article>
        </div>
      </main>
    </>
  )
}

export default Default
