import './index.scss'
import Typewriter from 'typewriter-effect'
import Scheme from '../../assets/images/scheme.png'
import Pathfinder from '../../assets/images/pathfinder.png'
import Enigma from '../../assets/images/enigma.png'
import Jump61B from '../../assets/images/jump61b.png'
import Gitlet from '../../assets/images/gitlet.png'
import Sixteen from '../../assets/images/sixteen.png'
import { Fade } from 'react-reveal'

const Project = () => {
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(100).typeString('Projects').start()
            }}
          />
        </h1>
      </div>
      <div className="projects">
        <div className="project1">
          <Fade bottom delay={1400}>
            <img src={Scheme} width="50%" height="100%" alt="scheme" />
            <div className='description'>
              <p className='title'>Scheme Interpreter</p>
              <p>A LISP interpreter for Scheme written in Python</p>
            </div>
          </Fade>
        </div>
        <div className="project2">
          <Fade bottom>
            <img src={Pathfinder} width="50%" height="100%" alt="pathfinder" />
            <div className='description'>
              <p className='title'>Pathfinding Visualizer</p>
              <p>A simulation based on shortest-path algorithms</p>
            </div>
          </Fade>
        </div>
        <div className="project3">
          <Fade bottom duration={600}>
            <img src={Enigma} width="50%" height="100%" alt="enigma" />
            <div className='description'>
              <p className='title'>Enigma</p>
              <p>A simulation of the famous Enigma machine during WWII</p>
            </div>
          </Fade>
        </div>
        <div className="project4">
          <Fade bottom duration={600}>
            <img src={Jump61B} width="50%" height="100%" alt="jump" />
            <div className='description'>
              <p className='title'>Jump61B</p>
              <p>A board game with AI mode based on Minimax algorithm</p>
            </div>
          </Fade>
        </div>
        <div className="project5">
          <Fade bottom duration={600}>
            <img src={Gitlet} width="50%" height="100%" alt="gitlet" />
            <div className='description'>
              <p className='title'>Gitlet</p>
              <p>A version control system inspired by the famous Git</p>
            </div>
          </Fade>
        </div>
        <div className="project6">
          <Fade bottom duration={600}> 
            <img src={Sixteen} width="50%" height="100%" alt="sixteen" />
            <div className='description'>
              <p className='title'>SIXT33N</p>
              <p>A self-driving car sim controlled by voice commands</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Project