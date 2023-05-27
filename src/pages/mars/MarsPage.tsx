import MainLayout from '../../components/MainLayout'
import MarsContent from './MarsContent'
import MarsVideo from './MarsVideo'

export default function MarsPage() {
  return (
    <MainLayout>
      <MarsVideo />
      <MarsContent />
    </MainLayout>
  )
}
