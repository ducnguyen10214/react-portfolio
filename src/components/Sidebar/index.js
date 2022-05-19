import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoD from '../../assets/images/logo-d.png'
import LogoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faGears,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoD} alt="logo" />
      <img classname="sub-logo" src={LogoSub} alt="logoSub" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#b1c5cb" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#b1c5cb" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="skills-link"
        to="/skills"
      >
        <FontAwesomeIcon icon={faGears} color="#b1c5cb" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon="fa-solid fa-microscope" color="#b1c5cb" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#b1c5cb" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/duc-nguyen-888390214/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#b1c5cb" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ducnguyen10214"
        >
          <FontAwesomeIcon icon={faGithub} color="#b1c5cb" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar