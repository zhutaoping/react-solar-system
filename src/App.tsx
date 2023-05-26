import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home/HomePage'
import MercuryPage from './pages/mercury/MercuryPage'
import VenusPage from './pages/venus/VenusPage'
import Dock from './components/Dock/Dock'
import Header from './components/Header'
import { useMediaQuery } from './hooks/useMediaQuery'

export default function App() {
  const location = useLocation()
  const isLarge = useMediaQuery('(min-width: 1024px)')

  return (
    <div className="App">
      {/* <Header /> and <Dock /> are outside of the <AnimatePresence /> component, so they will not be rendered on exit animation. */}
      <Header />
      {isLarge && <Dock />}
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
