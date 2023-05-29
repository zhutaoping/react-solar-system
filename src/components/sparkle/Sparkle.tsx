interface Props {
  color: string
  size: number
  style: React.CSSProperties
}

export default function Sparkle({ color, size, style }: Props) {
  const path =
    'M80 0C80 0 84.414 41.1995 101.607 58.3927C118.801 75.586 160 80 160 80C160 80 118.801 84.414 101.607 101.607C84.414 118.801 80 160 80 160C80 160 75.586 118.801 58.3927 101.607C41.1995 84.414 0 80 0 80C0 80 41.1995 75.586 58.3927 58.3927C75.586 41.1995 80 0 80 0Z'

  return (
    <span style={style} className="sparkle-wrapper absolute block">
      <svg
        className="sparkle-svg pointer-events-none block"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        style={style}
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  )
}
