import Video from '../../components/Video'
import mercuryVideo from '/assets/videos/mercury-720.webm'
import mercuryPoster from '/assets/images/posters/mercury-poster-720-tiny.webp'

export default function MercuryVideo() {
  return <Video src={mercuryVideo} poster={mercuryPoster} />
}
