import neptuneImage from '/assets/images/neptune-720-tiny.webp'
import Video from '../../components/Video'

export default function VenusVideo() {
  const img = new Image()
  img.src = neptuneImage
  img.alt = 'Neptune'
  return <Video image={img} isImage />
}
