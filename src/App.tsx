import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from './hooks/useMediaQuery'
import Layout from './Layout'
import Header from './components/Header'
import Dock from './components/Dock/Dock'
import HomePage from './pages/home/HomePage'
import MercuryPage from './pages/mercury/MercuryPage'
import VenusPage from './pages/venus/VenusPage'
import EarthPage from './pages/earth/EarthPage'
import MarsPage from './pages/mars/MarsPage'
import JupiterPage from './pages/jupiter/JupiterPage'
import SaturnPage from './pages/saturn/SaturnPage'
import UranusPage from './pages/uranus/UranusPage'
import NeptunePage from './pages/neptune/NeptunePage'

export default function App() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  const [isPortrait, setIsPortrait] = useState(false)

  const location = useLocation()
  const checkPortrait = useMediaQuery('(orientation:portrait)')

  useEffect(() => {
    setIsPortrait(checkPortrait)
  }, [checkPortrait])

  // const [ref, bounds] = useMeasure()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bounds = ref.current?.getBoundingClientRect()

    if (bounds) {
      setDimensions({ height: bounds.height, width: bounds.width })
    }
  }, [])

  return (
    <div ref={ref} className="App relative">
      <div className="stars"></div>
      <div className="twinkling"></div>

      {/* <Header /> and <Dock /> are outside of the <AnimatePresence /> component, so they won't be re-rendered on page transition. */}

      <Header height={dimensions.height} width={dimensions.width} />

      {!isPortrait && <Dock />}
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
