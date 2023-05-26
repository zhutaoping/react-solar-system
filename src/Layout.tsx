import { Outlet } from 'react-router-dom'
import Dock from './components/Dock/Dock'
import Header from './components/Header'
import { useMediaQuery } from './hooks/useMediaQuery'

export default function Layout() {
  const isXL = useMediaQuery('(min-width: 1280px)')

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      {isXL && <Dock />}
      <Outlet />
    </div>
  )
}
