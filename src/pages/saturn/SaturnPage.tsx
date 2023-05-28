import MainLayout from '../../components/MainLayout'
import SaturnContent from './SaturnContent'
import SaturnVideo from './SaturnVideo'

export default function SaturnPage() {
  return (
    <MainLayout>
      <SaturnVideo />
      <SaturnContent />
    </MainLayout>
  )
}
