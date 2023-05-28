import Content from '../../components/Content'

export default function EarthContent() {
  const content = {
    heading: 'Earth',
    subheading: 'planet',
    description: [
      'Home sweet home',
      // '逃出的地方，歸去的方向',
      'We are lost, we can never go home',
    ],
  }
  return <Content content={content} />
}
