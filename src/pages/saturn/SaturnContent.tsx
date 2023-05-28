import Content from '../../components/Content'

export default function SaturnContent() {
  const content = {
    heading: 'Saturn',
    subheading: 'planet',
    description: [
      'King of moons: over 100 discovered moons',
      'Can float on water',
      'Has beautiful rings',
    ],
  }
  return <Content content={content} />
}
