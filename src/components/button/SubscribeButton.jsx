import React from 'react'
import { Link } from 'react-router-dom'

import './SubscribeButton.css'

const SubscribeButton = () => {
  return (
    <Link to='/pricing'>
      <div className='subscribe-button'>Subscribe</div>
    </Link>
  )
}

export default SubscribeButton