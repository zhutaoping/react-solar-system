import MainLayout from '../../components/MainLayout'
import NeptuneContent from './NeptuneContent'
import NeptuneVideo from './NeptuneVideo'

export default function NeptunePage() {
  return (
    <MainLayout>
      <NeptuneVideo />
      <NeptuneContent />
    </MainLayout>
  )
}
