import MainLayout from '../../components/MainLayout'
import JupiterContent from './JupiterContent'
import JupiterVideo from './JupiterVideo'

export default function JupiterPage() {
  return (
    <MainLayout>
      <JupiterVideo />
      <JupiterContent />
    </MainLayout>
  )
}
