import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home/HomePage'
import MercuryPage from './pages/mercury/MercuryPage'
import VenusPage from './pages/venus/VenusPage'
import Dock from './components/Dock/Dock'
import Header from './components/Header'
import { useMediaQuery } from './hooks/useMediaQuery'
import MobileMenu from './components/MobileMenu'
import useMeasure from 'react-use-measure'
import { useEffect, useState } from 'react'

export default function App() {
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 400px)')
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
      <Header height={dimensions.height} width={dimensions.width}>
        {isMobile && <MobileMenu />}
      </Header>
      {isMedium && <Dock />}
      <AnimatePresence initial={false} mode="wait">
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
