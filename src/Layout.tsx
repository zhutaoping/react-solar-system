import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="h-screen overflow-hidden">
      <Outlet />
    </div>
  )
}
