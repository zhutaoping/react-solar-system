import Video from '../../components/Video'
import mercuryVideo from '/assets/videos/mercury-720-low.mp4'
import mercuryPoster from '/assets/posters/mercury-poster.jpg'

export default function MercuryVideo() {
  return <Video src={mercuryVideo} poster={mercuryPoster} />
}
