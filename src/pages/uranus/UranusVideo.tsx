import uranusMedia from '/assets/images/uranus-720-tiny.webp'
import Video from '../../components/Video'

export default function UranusVideo() {
  const media = new Image()
  media.src = uranusMedia
  media.alt = 'Uranus'
  return <Video media={media} isImage />
}
