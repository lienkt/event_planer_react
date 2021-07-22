import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Login({ setActivePageKey }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onUsernameChange(event)  {
        setUsername(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function onSignUpClick(event) {
        setActivePageKey("SignUp");
    }

    return (
        <div>
            <div className='container'>
                <div>Login Page</div>
                <div className='form-div'>

                        <input type='text'
                        placeholder='Username'
                        onChange={onUsernameChange}
                        value={username}
                        className='form-control form-group'
                        />

                        

                        <input type='password'
                        placeholder='Password'
                        onChange={onPasswordChange}
                        value={password}
                        className='form-control form-group'
                        />

                        <>
                        <input type='login' className='btn btn-login' value='Login'/>
                        <button className='btn btn-signup' onClick={onSignUpClick}>Sign Up</button>
                        </>
                        
                    
                </div>
            </div>
        </div>
    );
}


