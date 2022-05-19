import Typewriter from 'typewriter-effect'
import './index.scss'
import Logo from './Logo'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(110).typeString('Introduction!').start()
            }}
          />
        </h1>
        <p>
          I'm a rising junior at UC Berkeley with a strong passion in
          programming and engineering, especially in backend/system engineering
          and AI/ML. As an ambitious and motivated individual, I always strive
          to broaden my horizons, improve myself day after day, and contribute
          as much knowledge of mine as possible to the future of technology.
        </p>
        <p>
          Besides studying, in my free time, I enjoy building projects, solving
          coding problems, and reading documentations of some applications that
          I recently have my eyes on!
        </p>
        <p>
          As of right now, I am currently looking for opportunities to challenge
          myself in a professional working environment where I can make
          contributions based on my capabilities and extend my perspective about
          the industry.
        </p>
      </div>
      <Logo />
    </div>
  )
}

export default About
