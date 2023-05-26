import MainLayout from '../../components/MainLayout'
import MercuryContent from './MercuryContent'
import MercuryVideo from './MercuryVideo'

export default function Mercury() {
  return (
    <MainLayout>
      <MercuryVideo />
      <MercuryContent />
    </MainLayout>
  )
}
