import Content from '../../components/Content'

export default function VenusContent() {
  const content = {
    heading: 'Venus',
    subheading: 'planet',
    description: [
      'The hottest planet in the solar system',
      'The second brightest natural object in the night',
      'Spins the wrong way',
    ],
  }
  return <Content content={content} />
}
