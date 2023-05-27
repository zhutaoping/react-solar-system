interface OrbitProps {
  lis: NodeListOf<HTMLElement>
  expanded: boolean
  isSmall: boolean
}

export default function orbit({ lis, expanded, isSmall }: OrbitProps) {
  if (!expanded) {
    lis.forEach((item, index) => {
      item.style.setProperty(`--x${index + 1}`, `0px`)
      item.style.setProperty(`--y${index + 1}`, `0px`)
    })
  } else {
    const radius = isSmall ? 200 : 150
    const step = Math.PI / (180 * 180)
    let angle = 0
    let myReq: number

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

    // for (const [idx, li] of lis.entries()) {
    lis.forEach(li => {
      li.addEventListener('mouseenter', () => {
        window.cancelAnimationFrame(myReq)
      })

      li.addEventListener('mouseleave', () => {
        window.requestAnimationFrame(orbit)
      })
    })
  }
}
