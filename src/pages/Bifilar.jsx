import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast'
import diagramaBifilar from '../assets/bifilarImg.svg'
import bifilarCalculator from '../utils/bifilar'
import coaxialCalculator from '../utils/coaxial'

const initialState = {
  d: '',
  a: '',
  metal: '0',
  epsilon: '',
  mu: '',
  resistencia: '',
  inductancia: '',
  capacitancia: '',
  impedancia: '',
  frequency: ''
}

const Bifilar = () => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      (form.d !== '' &&
        form.a !== '' &&
        form.metal !== 0 &&
        form.epsilon !== '' &&
        form.mu !== '' &&
        form.frequency !== '') ||
      (form.inductancia !== '' && form.capacitancia !== '')
    ) {
      setForm({
        ...form,
        d: Number(form.d),
        a: Number(form.a),
        epsilon: Number(form.epsilon),
        mu: Number(form.mu),
        frequency: Number(form.frequency)
      })
      const { resistencia, inductancia, capacitancia, impedancia } =
        bifilarCalculator({
          d: form.d,
          a: form.a,
          epsilon: form.epsilon,
          mu: form.mu,
          metal: form.metal,
          frequency: form.frequency,
          inductancia: form.inductancia,
          capacitancia: form.capacitancia
        })
      setForm({
        ...form,
        resistencia,
        inductancia,
        capacitancia,
        impedancia
      })
      return true
    }
    toast.error('Ingrese los datos correctamente')
  }

  return (
    <>
      <Helmet>
        <title>Bifilar | Calculadora de Líneas de Transmisión</title>
        <meta
          name="description"
          content="Calculadora de lineas de microcinta"
        />
      </Helmet>
      <main className="coaxial__wrapper">
        <h1 className="micro__title">Linea Bifilar</h1>
        <p className="micro__instructions">
          Ingrese las caracteristicas físicas de la línea y obtendrá las
          caracteristicas electricas de la línea. También puedes ingresar
          algunas caracteristicas electricas y obtener la impedacia
          caracteristica{' '}
          <b>
            Z <sub>o</sub>
          </b>{' '}
          de la línea
        </p>
        <img src={diagramaBifilar} alt="" className="coaxial__img" />
        <form onSubmit={handleSubmit} className="coaxial__form">
          <div className="coaxial__frequency">
            <label htmlFor="frequency">
              <b>Frequency</b>
            </label>
            <input
              type="text"
              name="frequency"
              id="frequency"
              value={form.frequency}
              onChange={handleChange}
            />
            <span>mm</span>
          </div>
          <div className="physics__params">
            <div>
              <label htmlFor="d">
                <b>d:</b>
              </label>
              <input
                type="text"
                name="d"
                id="d"
                value={form.d}
                onChange={handleChange}
              />
              <span>mm</span>
            </div>
            <div>
              <label htmlFor="a">
                <b>a:</b>
              </label>
              <input
                type="text"
                name="a"
                id="a"
                value={form.a}
                onChange={handleChange}
              />
              <span>mm</span>
            </div>
            <div>
              <label htmlFor="metal">
                <b>Metal</b>
              </label>
              <select
                name="metal"
                id="metal"
                onChange={handleChange}
                value={form.metal}
              >
                <option value="0">Seleccione una opción</option>
                <option value="37.8e6">Aluminio</option>
                <option value="5.7e7">Cobre</option>
                <option value="45.2e6">Oro</option>
                <option value="63.01e6">Plata</option>
              </select>
            </div>
            <div>
              <label htmlFor="epsilon">
                <b>
                  &epsilon;<sub>r</sub>
                </b>
              </label>
              <input
                type="text"
                name="epsilon"
                id="epsilon"
                value={form.epsilon}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mu">
                <b>
                  &mu;<sub>r</sub>
                </b>
              </label>
              <input
                type="text"
                name="mu"
                id="mu"
                value={form.mu}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="electric__params">
            <div>
              <label htmlFor="resistencia">
                <b>R'</b>
              </label>
              <input
                type="text"
                name="resistencia"
                id="resistencia"
                value={form.resistencia}
                onChange={handleChange}
              />
              <span>&#8486; /m</span>
            </div>
            <div>
              <label htmlFor="inductancia">
                <b>L'</b>
              </label>
              <input
                type="text"
                name="inductancia"
                id="inductancia"
                value={form.inductancia}
                onChange={handleChange}
              />
              <span>H/m</span>
            </div>
            <div>
              <label htmlFor="capacitancia">
                <b>C'</b>
              </label>
              <input
                type="text"
                name="capacitancia"
                id="capacitancia"
                value={form.capacitancia}
                onChange={handleChange}
              />
              <span>F/m</span>
            </div>
            <div>
              <label htmlFor="impedancia">
                <b>
                  Z<sub>o</sub>
                </b>
              </label>
              <input
                type="text"
                name="impedancia"
                id="impedancia"
                value={form.impedancia}
                onChange={handleChange}
              />
              <span>&#8486;</span>
            </div>
          </div>
          <div className="micro__buttons">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setForm(initialState)}
            >
              Limpiar
            </button>
            <button className="btn btn-primary" type="submit">
              Calcular
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Bifilar
