import Content from '../../components/Content'

export default function SunContent() {
  const content = {
    heading: 'Sun',
    subheading: 'star',
    description: [
      'Accounts for 99.86% of the mass in the solar system',
      'Almost a perfect sphere',
      'One day the Sun will consume the Earth',
    ],
  }

  return <Content content={content} isSun />
}
