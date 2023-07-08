import React from 'react'
import AnimatedLogo from '../assets/images/logo-animated.gif'
const Loader = () => {
  return (
    <div className='loader'>
      <img src={AnimatedLogo} alt="Apple Loader" className="classname" />
    </div>
  )
}

export default Loader