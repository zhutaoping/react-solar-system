import Video from '../../components/Video'
import saturnImage from '/assets/images/saturn-720-tiny.webp'

export default function SaturnVideo() {
  const img = new Image()
  img.src = saturnImage
  img.alt = 'Saturn'
  return <Video image={img} isImage isSaturn />
}
