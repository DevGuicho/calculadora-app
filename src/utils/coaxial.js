const EPSILON_CERO = (8.8541878176 * 10) / 10e12
const MU_CERO = (4 * Math.PI * 10) / 10e7

const coaxialCalculator = ({
  a,
  b,
  epsilon,
  mu,
  metal,
  frequency,
  capacitancia,
  inductancia
}) => {
  if (a !== '' && b !== '' && epsilon !== '' && mu !== '' && metal !== '') {
    const metalNumber = Number(metal)

    const l = 1 / Math.sqrt(Math.PI * frequency * MU_CERO * metalNumber)
    console.log({ l })
    const inductancia = ((mu * MU_CERO) / (2 * Math.PI)) * Math.log(b / a)
    const capacitancia =
      (2 * Math.PI * EPSILON_CERO * epsilon) / Math.log(b / a)
    const resistencia =
      (1 / (a / 1000) + 1 / (b / 1000)) * (1 / (2 * Math.PI * metalNumber * l))
    const impedancia = Math.sqrt(inductancia / capacitancia)
    console.log({ MU_CERO: MU_CERO.toExponential() })
    console.log({ EPSILON_CERO: EPSILON_CERO.toExponential() })
    console.log({ capacitancia: capacitancia.toPrecision(5) })
    console.log({ inductancia: inductancia.toExponential() })
    console.log({ impedancia: impedancia.toPrecision(5) })
    console.log({ resistencia: resistencia.toPrecision(5) })

    return {
      capacitancia: capacitancia.toPrecision(5),
      inductancia: inductancia.toPrecision(5),
      impedancia: impedancia.toPrecision(5),
      resistencia: resistencia.toPrecision(5)
    }
  } else if (capacitancia !== '' && inductancia !== '') {
    console.log(inductancia)
    console.log(capacitancia)
    const impedancia = Math.sqrt(Number(inductancia) / Number(capacitancia))
    return {
      impedancia: impedancia.toPrecision(5),
      capacitancia,
      inductancia,
      resistencia: ''
    }
  }
}

export default coaxialCalculator
