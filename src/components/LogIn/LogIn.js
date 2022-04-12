import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className="container">
        <div className='form-container'>
            <div>
            <h1 className='form-title'>Login</h1>
            <form>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <input className='form-submit' type="submit" value="Login" />
            </form>
           <div className='form-link-container'>
           <p className='new-ema'>New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link></p>
           </div>
            <div className='form-line'>
                <span></span><p>or</p> <span></span>
            </div>
            <button className='login-with'><svg width='30px' height='30px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg> Contine with Goorle</button>
            </div>
            
        </div>
        </div>
    );
};

export default LogIn;