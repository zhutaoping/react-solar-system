import Content from '../../components/Content'

export default function NeptuneContent() {
  const content = {
    heading: 'Neptune',
    subheading: 'planet',
    description: [
      'It is blue because of methane',
      'The most distant planet from the Sun',
      'With winds reaching speeds of almost 2,200 km/h',
    ],
  }
  return <Content content={content} />
}
