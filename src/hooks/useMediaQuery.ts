import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener)
    } else {
      // media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener)
      } else {
        // media.removeListener(listenerList);
      }
    }
  }, [matches, query])

  return matches
}
// const isMobile = useMediaQuery("(max-width: 400px)");
// const isXS = useMediaQuery("(min-width: 480px)");
// const isSmall = useMediaQuery("(min-width: 680px)");
// const isMedium = useMediaQuery("(min-width: 830px)");
// const isLarge = useMediaQuery("(min-width: 1024px)");
// const isXL = useMediaQuery("(min-width: 1280px)");
