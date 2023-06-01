import Video from '../../components/Video'
import video from '/assets/videos/mercury-720.webm'
import poster from '/assets/images/posters/mercury-poster-720-tiny.webp'

export default function MercuryVideo() {
  return <Video videoSrc={video} videoPoster={poster} />
}
