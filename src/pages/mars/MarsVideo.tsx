import Video from '../../components/Video'
import video from '/assets/videos/mars-720.webm'
import poster from '/assets/images/posters/mars-poster-720-tiny.webp'

export default function MarsVideo() {
  return <Video videoSrc={video} videoPoster={poster} />
}
