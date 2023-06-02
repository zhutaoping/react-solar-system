import Video from '../../components/Video'
import video from '/assets/videos/sun-clip.webm'
import poster from '/assets/images/posters/sun-poster-1080-tiny.webp'

export default function SunVideo() {
  return <Video videoSrc={video} videoPoster={poster} isSun />
}
