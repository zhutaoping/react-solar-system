import Video from '../../components/Video'
import video from '/assets/videos/earth-720.webm'
import poster from '/assets/images/posters/earth-poster-720-tiny.webp'

export default function EarthVideo() {
  return <Video videoSrc={video} videoPoster={poster} />
}
