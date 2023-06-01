import Video from '../../components/Video'
import video from '/assets/videos/venus-720.webm'
import poster from '/assets/images/posters/venus-poster-720-tiny.webp'

export default function VenusVideo() {
  return <Video videoSrc={video} videoPoster={poster} />
}
