import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

interface Props {
  children: React.ReactNode
  isSun?: boolean
}

export default function MainLayout({ children, isSun }: Props) {
  const [isPortrait, setIsPortrait] = useState(false)
  const checkPortrait = useMediaQuery('(orientation:portrait)')

  useEffect(() => {
    setIsPortrait(checkPortrait)
  }, [checkPortrait])

  return (
    <main
      className={`mainLayout flex h-full items-center justify-between portrait:h-5/6 ${
        isPortrait
          ? 'flex-col'
          : isSun
          ? 'md:flex-row md:object-contain 2xl:grid 2xl:grid-cols-2 2xl:place-items-center'
          : 'md:grid md:h-full md:grid-cols-2 md:place-items-center'
      }`}
    >
      {children}
    </main>
  )
}
