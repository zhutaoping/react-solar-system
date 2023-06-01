import jupiterImage from '/assets/images/jupiter-720-tiny.webp'
import Video from '../../components/Video'

export default function JupiterVideo() {
  const img = new Image()
  img.src = jupiterImage
  img.alt = 'Jupiter'
  return <Video image={img} isImage />
}
