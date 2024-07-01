import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin}) => {

    const [currantState,setCurrantState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currantState}</h2>
                <img onClick={()=> setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currantState==="Login"?<></>:  <input type="text" placeholder='your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currantState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required/>
                <p>By Counting, i  agree to the  terms of use & privacy policy.</p>
            </div>
            {currantState==="Login"?<p>Create  a new account? <span onClick={()=>setCurrantState("Sign Up")}>Click here</span></p>
            :<p>All ready have  an account? <span onClick={()=>setCurrantState("Login")}>Login here</span></p>
            }
        </form>
      
    </div>
  )
}

export default Loginpopup
