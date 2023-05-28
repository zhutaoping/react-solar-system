import MainLayout from '../../components/MainLayout'
import UranusContent from './UranusContent'
import UranusVideo from './UranusVideo'

export default function UranusPage() {
  return (
    <MainLayout>
      <UranusVideo />
      <UranusContent />
    </MainLayout>
  )
}
