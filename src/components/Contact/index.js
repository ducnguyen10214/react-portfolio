import './index.scss'
import Typewriter from 'typewriter-effect'

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(100).typeString('Contact Me!').start()
            }}
          />
        </h1>
        <p>
          I am interested in opportunities to explore more about the industry of
          software engineering. That being said, even if you just happen to
          visit this page and want to say hi, I'm always down to having more
          friends :)
        </p>
        <p className="info">ducthang10214@berkeley.edu</p>
        <p className="info">+1 408 677 9754</p>
        <p>Looking forward to our next collaboration!</p>
      </div>
    </div>
  )
}

export default Contact