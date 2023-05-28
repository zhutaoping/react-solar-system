import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home/HomePage'
import MercuryPage from './pages/mercury/MercuryPage'
import VenusPage from './pages/venus/VenusPage'
import Dock from './components/Dock/Dock'
import Header from './components/Header'
import { useMediaQuery } from './hooks/useMediaQuery'
import useMeasure from 'react-use-measure'
import { useEffect, useState } from 'react'
import EarthPage from './pages/earth/EarthPage'
import MarsPage from './pages/mars/MarsPage'
import NeptunePage from './pages/neptune/NeptunePage'
import UranusPage from './pages/uranus/UranusPage'
import JupiterPage from './pages/jupiter/JupiterPage'
import SaturnPage from './pages/saturn/SaturnPage'

export default function App() {
  const location = useLocation()
  const isMedium = useMediaQuery('(min-width: 830px)')
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  const [ref, bounds] = useMeasure()

  useEffect(() => {
    if (!bounds) return
    setDimensions({ height: bounds.height, width: bounds.width })
  }, [bounds])

  return (
    <div ref={ref} className="App">
      {/* <Header /> and <Dock /> are outside of the <AnimatePresence /> component, so they won't be rendered on page transition. */}
      <Header height={dimensions.height} width={dimensions.width} />

      {isMedium && <Dock />}
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="mercury" element={<MercuryPage />} />
            <Route path="venus" element={<VenusPage />} />
            <Route path="earth" element={<EarthPage />} />
            <Route path="mars" element={<MarsPage />} />
            <Route path="jupiter" element={<JupiterPage />} />
            <Route path="saturn" element={<SaturnPage />} />
            <Route path="uranus" element={<UranusPage />} />
            <Route path="neptune" element={<NeptunePage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}
