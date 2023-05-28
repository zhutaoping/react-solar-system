import Content from '../../components/Content'

export default function MarsContent() {
  const content = {
    heading: 'Mars',
    subheading: 'planet',
    description: [
      'The most likely planet for humans to step on first',
      'Olympus Mons is over 21.9 km high',
      'We have pieces of Mars on Earth',
    ],
  }
  return <Content content={content} />
}
