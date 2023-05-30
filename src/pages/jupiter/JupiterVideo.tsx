import jupiterMedia from '/assets/images/jupiter-720-tiny.webp'
import Video from '../../components/Video'

export default function JupiterVideo() {
  const media = new Image()
  media.src = jupiterMedia
  media.alt = 'Jupiter'
  return <Video media={media} isImage />
}
