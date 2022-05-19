import { Link } from 'react-router-dom'
import './index.scss'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
            <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("<h1>Hi, <br />I'm Duc<br />UC Berkeley Undergrad</h1><h2>An EECS Major</h2>")
                .start()
            }}
          />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home