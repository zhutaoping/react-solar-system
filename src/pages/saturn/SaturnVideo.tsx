import Video from '../../components/Video'
import saturnMedia from '/assets/images/saturn-720-tiny.webp'

export default function SaturnVideo() {
  const media = new Image()
  media.src = saturnMedia
  media.alt = 'Saturn'
  return <Video media={media} isImage isSaturn />
}
