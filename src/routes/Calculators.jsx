import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Bifilar from '../pages/Bifilar'
import Coaxial from '../pages/Coaxial'
import Default from '../pages/Default'
import Microcinta from '../pages/Microcinta'

const Calculators = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/micro" element={<Microcinta />} />
        <Route path="/coaxial" element={<Coaxial />} />
        <Route path="/bifilar" element={<Bifilar />} />
        <Route path="/" element={<Default />} />
      </Routes>
    </Layout>
  )
}

export default Calculators
