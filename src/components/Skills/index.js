import './index.scss'
import Typewriter from 'typewriter-effect'
import Cloud from './Cloud'

const Skills = () => {
  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(100).typeString('Skills').start()
            }}
          />
        </h1>
        <ul>
          <li>
            <u>Programming languages:</u> Java; Python; C/C++; HTML/CSS/JS;
            Node.js
          </li>
          <br />
          <li>
            <u>Databases:</u> PostgreSQL/MySQL; JDBC; Hibernate; JPA
          </li>
          <br />
          <li>
            <u>Frameworks/Libraries:</u> Spring/Spring Boot; React; NumPy;
            Pandas
          </li>
          <br />
          <li>
            <u>Other:</u> Data Analytics; JUnit; Git; GitHub;
          </li>
          <br />
        </ul>
      </div>
      <Cloud />
    </div>
  )
}

export default Skills