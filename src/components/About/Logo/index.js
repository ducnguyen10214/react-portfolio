import './index.scss'
import Portrait from '../../../assets/images/self2.png'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={Portrait} alt='P'/>
    </div>
  )
}

export default Logo;