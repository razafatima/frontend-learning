import React from "react";

import { useNavigate } from "react-router-dom";
import Style from "./Login.module.css";


function Login(){
    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/Main")
    };

        
    return(
            <div className={Style.Login2}>
            <div className={Style.Login}>
                
              <div className={Style.img}>
              
              </div>
              <h2 className={Style.header}>Task Manager</h2>
              <div className={Style.loginForm}>
                    <label className={Style.loginuser1}><b>UserName:</b></label>
                    <input type="text" className={Style.input1} placeholder="Username" maxLength="1000"/>
                    
                </div>
                <div className={Style.loginForm2}>
                    <label className={Style.loginuser2}><b>Password:</b></label>
                    <input type="text" className={Style.input2} placeholder="Username" maxLength="1000"/>
                </div>
                <button className={Style.btn} onClick={handleclick}><b>Login</b></button>
                <button className={Style.btn2}><b>SignUp</b></button>
            </div>
            </div>
       
       
    );
}
export default Login;