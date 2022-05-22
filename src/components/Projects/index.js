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
              <p>A LISP interpreter for Scheme written in Python, mostly implemented using input parsing and recursion with tail optimization.</p>
            </div>
          </Fade>
        </div>
        <div className="project2">
          <Fade bottom>
            <img src={Pathfinder} width="50%" height="100%" alt="pathfinder" />
            <div className='description'>
              <p className='title'>Pathfinding Visualizer</p>
              <p>A simulation to find the shortest way to go from one node to another based on two shortest-path algorithms: Djikstra's and A*'s. The simulation can also generate a maze using DFS concept.</p>
            </div>
          </Fade>
        </div>
        <div className="project3">
          <Fade bottom duration={600}>
            <img src={Enigma} width="50%" height="100%" alt="enigma" />
            <div className='description'>
              <p className='title'>Enigma</p>
              <p>A simulation of the famous Enigma machine during WWII that encompasses both encryption and decryption functions. This simulation can work with more characters than the original version.</p>
            </div>
          </Fade>
        </div>
        <div className="project4">
          <Fade bottom duration={600}>
            <img src={Jump61B} width="50%" height="100%" alt="jump" />
            <div className='description'>
              <p className='title'>Jump61B</p>
              <p>A board game inspired by KJumpingCube of the KDE project with size-changeable board and 2 modes of playing: 1 PvP, and 1 AI mode implemented based on the Minimax algorithm in Game Theory.</p>
            </div>
          </Fade>
        </div>
        <div className="project5">
          <Fade bottom duration={600}>
            <img src={Gitlet} width="50%" height="100%" alt="gitlet" />
            <div className='description'>
              <p className='title'>Gitlet</p>
              <p>A version-control system with features inspired by the famous Git: saving contents, reverting, viewing logs, maintaing and merging branches; can work both locally and remotely.</p>
            </div>
          </Fade>
        </div>
        <div className="project6">
          <Fade bottom duration={600}> 
            <img src={Sixteen} width="50%" height="100%" alt="sixteen" />
            <div className='description'>
              <p className='title'>S1XT33N</p>
              <p>A car simulation built on Tinkercad with the Arduino microcontroller and several other circuit components. The car is controlled by voice commands, which works based on SVD/PCA and Nearest-Neighbor Classification.</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Project