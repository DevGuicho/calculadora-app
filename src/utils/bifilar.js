const EPSILON_CERO = (8.8541878176 * 10) / 10e12
const MU_CERO = (4 * Math.PI * 10) / 10e7

const bifilarCalculator = ({
  d,
  a,
  epsilon,
  mu,
  metal,
  frequency,
  inductancia,
  capacitancia
}) => {
  if (a !== '' && d !== '' && epsilon !== '' && mu !== '' && metal !== '') {
    const metalNumber = Number(metal)
    const l = 1 / Math.sqrt(Math.PI * frequency * MU_CERO * metalNumber)
    const inductancia = ((MU_CERO * mu) / Math.PI) * Math.log(d / a)
    const capacitancia = (Math.PI * EPSILON_CERO * epsilon) / Math.log(d / a)
    const resistencia = 1 / (((Math.PI * a) / 1000) * l * metal)
    const impedancia = Math.sqrt(inductancia / capacitancia)
    return {
      inductancia: inductancia.toPrecision(5),
      capacitancia: capacitancia.toPrecision(5),
      resistencia: resistencia.toPrecision(5),
      impedancia: impedancia.toPrecision(5)
    }
  } else if (capacitancia !== '' && inductancia !== '') {
    const impedancia = Math.sqrt(Number(inductancia) / Number(capacitancia))
    return {
      impedancia: impedancia.toPrecision(5),
      capacitancia,
      inductancia,
      resistencia: ''
    }
  }
}

export default bifilarCalculator
