import './index.scss'
import Portrait from '../../../assets/images/self2.png'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={Portrait} width="900" height="1200" alt='P'/>
    </div>
  )
}

export default Logo;