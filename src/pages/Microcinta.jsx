import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast'

import diagramaImg from '../assets/microcinta_diagrama.jpg'
import { getMicroWidth, impedance } from '../utils/microcinta'

const Microcinta = () => {
  const initialState = {
    impedance: '',
    permitividad: '',
    microWidth: '',
    microHeight: '',
    dielectricHeight: '',
    permitividadSelect: '0'
  }
  const [form, setForm] = useState(initialState)
  const [isDisabled, setIsDisabled] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.permitividadSelect === '0' && form.permitividad === '') {
      return toast.error('Ingresa la permitividad')
    }

    if (
      form.microWidth === '' &&
      form.dielectricHeight === '' &&
      form.impedance === ''
    ) {
      return toast.error('Ingresa la Impedancia Zo')
    }
    if (form.impedance !== '') {
      setForm({
        ...form,
        microWidth: getMicroWidth({
          permitividad:
            form.permitividadSelect === '0'
              ? Number(form.permitividad)
              : Number(form.permitividadSelect),
          impedance: Number(form.impedance),
          dielectricHeight:
            form.dielectricHeight !== ''
              ? Number(form.dielectricHeight) / 10
              : 2.36 / 10
        }),
        dielectricHeight:
          form.dielectricHeight !== '' ? Number(form.dielectricHeight) : 2.36
      })
    } else {
      const impedanceZ = impedance({
        permitividad:
          form.permitividadSelect === '0'
            ? Number(form.permitividad)
            : Number(form.permitividadSelect),
        microWidth: Number(form.microWidth) / 10,
        dielectricHeight: Number(form.dielectricHeight) / 10
      })
      setForm({
        ...form,
        impedance: impedanceZ
      })
    }
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  useEffect(() => {
    if (form.permitividadSelect === '0') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
      setForm((form) => ({
        ...form,
        permitividad: ''
      }))
    }
  }, [form.permitividadSelect])
  return (
    <>
      <Helmet>
        <title>Microcinta | Calculadora de Líneas de Transmisión</title>
        <meta
          name="description"
          content="Calculadora de lineas de microcinta"
        />
      </Helmet>
      <main className="micro">
        <h1 className="micro__title">Linea de Microcinta</h1>
        <p className="micro__instructions">
          Ingrese la impedancia caracteristica{' '}
          <b>
            Z<sub>o</sub>
          </b>{' '}
          para obtener las dimensiones físicas de la microcinta o ingrese las
          dimensiones físicas para obtener la impedancia caracteristicas de la
          microcinta
        </p>
        <img src={diagramaImg} alt="" />
        <form className="micro__data" onSubmit={handleSubmit}>
          <div className="micro__input">
            <label htmlFor="permitividadSelect">
              Permitividad relativa{' '}
              <b>
                &epsilon;<sub>r</sub>
              </b>
            </label>
            <div>
              <select
                type="text"
                name="permitividadSelect"
                id="permitividadSelect"
                onChange={handleChange}
                value={form.permitividadSelect}
              >
                <option value="0">Seleccione una opción</option>
                <option value="4">FR4</option>
                <option value="3.3">PVC</option>
                <option value="5">Baquelita</option>
                <option value="2.27">Polietileno</option>
                <option value="2.50">Poliestireno</option>
              </select>
              <span></span>
            </div>
          </div>
          <div className="micro__input">
            <label htmlFor="permitividad">
              Permitividad relativa{' '}
              <b>
                &epsilon;<sub>r</sub>
              </b>
            </label>
            <div>
              <input
                type="text"
                name="permitividad"
                id="permitividad"
                onChange={handleChange}
                value={form.permitividad}
                disabled={isDisabled}
              />
              <span></span>
            </div>
          </div>

          <div className="micro__input">
            <label htmlFor="microWidth">
              Ancho de conductor de microcinta <b>W</b>
            </label>
            <div>
              <input
                type="text"
                name="microWidth"
                id="microWidth"
                onChange={handleChange}
                value={form.microWidth}
              />
              <span>mm</span>
            </div>
          </div>

          {/* <div className="micro__input">
            <label htmlFor="microHeight">
              Espesor de conductor de microcinta <b>t</b>
            </label>
            <div>
              <input
                type="text"
                name="microHeight"
                id="microHeight"
                onChange={handleChange}
                value={form.microHeight}
              />
              <span>mm</span>
            </div>
          </div> */}

          <div className="micro__input">
            <label htmlFor="dielectricHeight">
              Espesor de dielectrico <b>h</b>
            </label>
            <div>
              <input
                type="text"
                name="dielectricHeight"
                id="dielectricHeight"
                onChange={handleChange}
                value={form.dielectricHeight}
              />
              <span>mm</span>
            </div>
          </div>

          <div className="micro__input">
            <label htmlFor="impedance">
              Impedancia Caracterisitca{' '}
              <b>
                Z<sub>o</sub>
              </b>
            </label>
            <div>
              <input
                type="number"
                name="impedance"
                id="impedance"
                onChange={handleChange}
                value={form.impedance}
              />
              &Omega;
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

export default Microcinta
