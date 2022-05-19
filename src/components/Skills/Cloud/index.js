import { TagCloud } from "react-tagcloud";
import './index.scss'

const Cloud = () => {
  const data = [
    { value: 'Java', count: 25 },
    { value: 'Python', count: 18 },
    { value: 'C++', count: 38 },
    { value: 'C', count: 30 },
    { value: 'HTML', count: 28 },
    { value: 'CSS', count: 25 },
    { value: 'JS', count: 33 },
    { value: 'Node.js', count: 20 },
    { value: 'PostgreSQL', count: 22 },
    { value: 'MySQL', count: 7 },
    { value: 'JDBC', count: 25 },
    { value: 'Hibernate', count: 15 },
    { value: 'JPA', count: 17 },
    { value: 'Spring', count: 27 },
    { value: 'React', count: 30 },
    { value: 'NumPy', count: 15 },
    { value: 'Pandas', count: 30 },
    { value: 'JUnit', count: 11 },
  ]

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size}em`,
        border: `2px solid ${color}`,
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: 'white',
        justifyContent: 'center'
      }}
    >
      {tag.value}
    </span>
  )

  return (
    <div className="cloud-container">
      <TagCloud tags={data} minSize={3} maxSize={6} renderer={customRenderer} />
    </div>
  )
}

export default Cloud;