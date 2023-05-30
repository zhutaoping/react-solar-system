import neptuneMedia from '/assets/images/neptune-720-tiny.webp'
import Video from '../../components/Video'

export default function VenusVideo() {
  const media = new Image()
  media.src = neptuneMedia
  media.alt = 'Neptune'
  return <Video media={media} isImage />
}
