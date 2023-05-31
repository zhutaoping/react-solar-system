import MainLayout from '../../components/MainLayout'
import SunContent from './SunContent'
import SunVideo from './SunVideo'

export default function HomePage() {
  return (
    <MainLayout isSun>
      <SunVideo />
      <SunContent />
    </MainLayout>
  )
}
