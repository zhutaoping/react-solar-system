import Content from '../../components/Content'

export default function JupiterContent() {
  const content = {
    heading: 'Jupiter',
    subheading: 'planet',
    description: [
      'The biggest planet in the solar system',
      'Has a storm name The Great Red Spot',
      'With no hopes of becoming a star',
    ],
  }
  return <Content content={content} />
}
