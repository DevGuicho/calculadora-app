import * as yup from 'yup'

const coaxialSchema = yup.object().shape({
  a: yup.number(),
  b: yup.number(),
  epsilon: yup.number(),
  mu: yup.number()
})

export default coaxialSchema
