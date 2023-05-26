import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home/HomePage'
import MercuryPage from './pages/mercury/MercuryPage'
import VenusPage from './pages/venus/VenusPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="mercury" element={<MercuryPage />} />
            <Route path="venus" element={<VenusPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}
