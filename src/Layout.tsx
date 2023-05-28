import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="layout h-screen overflow-hidden">
      <Outlet />
    </div>
  )
}
