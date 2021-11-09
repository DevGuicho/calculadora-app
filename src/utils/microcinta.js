export const permitividadEff = ({
  permitividad,
  microWidth,
  dielectricHeight
}) => {
  const t1 = (permitividad + 1) / 2
  const t2 =
    (permitividad - 1) /
    (2 * Math.sqrt(1 + (12 * dielectricHeight) / microWidth))
  return t1 + t2
}

export const impedance = ({ permitividad, microWidth, dielectricHeight }) => {
  const permitividadR = permitividadEff({
    permitividad,
    microWidth,
    dielectricHeight
  })
  if (microWidth / dielectricHeight <= 1) {
    return (
      (60 *
        Math.log(
          (8 * dielectricHeight) / microWidth + microWidth / dielectricHeight
        )) /
      Math.sqrt(permitividadR)
    )
  } else {
    return (
      (120 * Math.PI) /
      (Math.sqrt(permitividadR) *
        (microWidth / dielectricHeight +
          1.393 +
          0.667 * Math.log(microWidth / dielectricHeight + 1.414)))
    )
  }
}

export const cteA = ({ impedance, permitividad }) => {
  const t1 = (impedance / 60) * Math.sqrt((permitividad + 1) / 2)
  const t2 =
    ((permitividad - 1) / (permitividad + 1)) * (0.23 + 0.11 / permitividad)
  const total = t1 + t2
  console.log('cteA ' + total)
  return total
}

export const cteB = ({ impedance, permitividad }) => {
  console.log(
    'cteB ' +
      (60 * Math.pow(Math.PI, 2)) / (impedance * Math.sqrt(permitividad))
  )
  return (60 * Math.pow(Math.PI, 2)) / (impedance * Math.sqrt(permitividad))
}

export const getRelation = ({ impedance, permitividad }) => {
  const A = cteA({ impedance, permitividad })
  const B = cteB({ impedance, permitividad })
  const c1 = (8 * Math.exp(A)) / (Math.exp(2 * A) - 2)
  const c2 =
    (2 / Math.PI) *
    (B -
      1 -
      Math.log(2 * B - 1) +
      ((permitividad - 1) / 2) *
        permitividad *
        (Math.log(B - 1) + 0.39 - 0.61 / permitividad))

  if (c1 < 2) {
    console.log(c1)
    return c1
  } else if (c2 > 2) {
    console.log(c2)
    return c2
  } else {
    return c1
  }
}

export const getMicroWidth = ({
  permitividad,
  impedance,
  dielectricHeight
}) => {
  const relation = getRelation({ impedance, permitividad })

  return dielectricHeight * relation * 10
}
export const getDielectricHeight = ({
  permitividad,
  impedance,
  microWidth
}) => {
  const relation = getRelation({ impedance, permitividad })

  return (relation / microWidth) * 10
}
