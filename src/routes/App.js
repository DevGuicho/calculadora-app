import { Toaster } from 'react-hot-toast'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Footer from '../components/Footer'

import Home from '../pages/Home'
import Calculators from './Calculators'

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadoras/*" element={<Calculators />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
