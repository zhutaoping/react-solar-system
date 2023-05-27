import Content from '../../components/Content'

export default function MarsContent() {
  const content = {
    heading: 'Mars',
    subheading: 'planet',
    description: [
      'On Mars, a single day is two years long',
      'Has organic material and water ice',
      'Maidenless... I mean moonless',
    ],
  }
  return <Content content={content} />
}
