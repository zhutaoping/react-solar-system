import './orbiting.css'

interface OrbitingProps {
  lis: NodeListOf<HTMLElement>
  sunEl: HTMLElement
  refHeader: React.RefObject<HTMLDivElement>
  expanded: boolean
  isSmall: boolean
}

export default function orbiting({
  lis,
  sunEl,
  refHeader,
  expanded,
  isSmall,
}: OrbitingProps) {
  const radius = isSmall ? 200 : 150
  const step = Math.PI / (180 * 180)
  let angle = 0
  let myReq = 0

  if (!expanded) {
    lis.forEach((item, index) => {
      item.style.setProperty(`--x${index + 1}`, `0px`)
      item.style.setProperty(`--y${index + 1}`, `0px`)
    })
    return
  }

  const orbit = () => {
    lis.forEach((item, index) => {
      if (isSmall) {
        item.classList.add('isSmall')
      } else {
        item.classList.remove('isSmall')
      }

      item.style.setProperty(
        `--x${index + 1}`,
        `${radius * Math.cos((index * 45 * Math.PI) / 180 + angle)}px`
      )
      item.style.setProperty(
        `--y${index + 1}`,
        `${radius * Math.sin((index * 45 * Math.PI) / 180 + angle)}px`
      )
      angle += step
    })

    myReq = window.requestAnimationFrame(orbit)
  }

  window.requestAnimationFrame(orbit)

  lis.forEach(li => {
    li.addEventListener('pointerenter', () => {
      window.cancelAnimationFrame(myReq)
    })

    li.addEventListener('pointerleave', () => {
      window.requestAnimationFrame(orbit)
    })

    li.addEventListener('click', () => {
      window.cancelAnimationFrame(myReq)
    })
  })

  sunEl.addEventListener('click', () => {
    window.cancelAnimationFrame(myReq)
  })

  refHeader.current?.addEventListener('click', () => {
    window.cancelAnimationFrame(myReq)
  })
}
