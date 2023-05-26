import Content from '../../components/Content'

export default function MercuryContent() {
  const content = {
    heading: 'Venus',
    subheading: 'planet',
    description: [
      'On Mercury, a single day is two years long',
      'Has organic material and water ice',
      'Maidenless... I mean moonless',
    ],
  }
  return <Content content={content} />
}
