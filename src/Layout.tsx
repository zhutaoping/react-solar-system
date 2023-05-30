import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="layout h-[100svh] overflow-hidden">
      <Outlet />
    </div>
  )
}
