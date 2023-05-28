import Content from '../../components/Content'

export default function UranusContent() {
  const content = {
    heading: 'Uranus',
    subheading: 'planet',
    description: [
      'Rotates on its side',
      'Average temperature is -195°C',
      'Has a funny name',
    ],
  }
  return <Content content={content} />
}
