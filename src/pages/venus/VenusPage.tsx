import MainLayout from '../../components/MainLayout'
import VenusContent from './VenusContent'
import VenusVideo from './VenusVideo'

export default function VenusPage() {
  return (
    <MainLayout>
      <VenusVideo />
      <VenusContent />
    </MainLayout>
  )
}
