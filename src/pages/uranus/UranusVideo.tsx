import uranusImage from '/assets/images/uranus-720-tiny.webp'
import Video from '../../components/Video'

export default function UranusVideo() {
  const img = new Image()
  img.src = uranusImage
  img.alt = 'Uranus'
  return <Video image={img} isImage />
}
