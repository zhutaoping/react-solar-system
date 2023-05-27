import Content from '../../components/Content'

export default function EarthContent() {
  const content = {
    heading: 'Earth',
    subheading: 'planet',
    description: ['Home sweet home...', 'We are lost, we can never go home'],
  }
  return <Content content={content} />
}
