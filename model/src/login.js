import "./App.css";
import React,{ useContext,useEffect } from "react";
// import userContext from "./context"; 
// import axios from "axios";
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import './login.css'
import {useStateValue} from './stateprovider'
import {actionTypes} from './reducer'





//Sign in with google using firebase to login 

const Login = () => {
  const [state, dispatch] = useStateValue();
  console.log(state);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='login'>
            <div className='login_container'>
                <img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png'
                     alt='logo'/>
             <div className='login_text'>
                UserAdmin
            </div> 
                <button onClick={signIn}>Login</button>
            </div>
    </div>
  )
}

export default Login


