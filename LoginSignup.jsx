import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/38a65e84997af121ffbcda964ed8a19a.png';
import email_icon from '../Assets/60b2c2621a29c38c75f08b6375de710a.png';
import password_icon from '../Assets/cef15db0a66d4623d4e60b3dd27a88b8.png';


const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <img src={user_icon} style={{ width: '24px', height: '24px' }} alt="" />
                <input type="text" placeholder="Username" />
            </div>}
           
            <div className="input">
                <img src={email_icon} style={{ width: '24px', height: '24px' }} alt="" />
                <input type="email" placeholder="Email Id" />
            </div>
            <div className="input">
                <img src={password_icon} style={{ width: '24px', height: '24px' }} alt="" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
