import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import App from './App'
import Mercury from './pages/mercury/MercuryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'mercury',
        element: <Mercury />,
      },
    ],
  },
])
export default router
