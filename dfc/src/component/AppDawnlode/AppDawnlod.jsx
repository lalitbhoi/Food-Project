import React from 'react'
import './AppDawnlod.css'
import { assets } from '../../assets/assets'

const AppDawnlod = () => {
  return (
    <div className='app-dawnload app' id='app-dawnload'>
        <p>For Better Experience Dawnload <br />Tomato App</p>
        <div className='app-dawnload-platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

        </div>
      
    </div>
  )
}

export default AppDawnlod
