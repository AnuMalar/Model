
import React from "react";
import Login from './login'
import './App.css'
// import Bookstore from '../src/components/bookstore/bookstore'

import {useStateValue} from './stateprovider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//callback function of user
const App=()=> {
  const [{user}] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
              <h1>New Arrivals</h1>
              <img src="books.jpg"></img>
            <Routes>
        
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

  


export default App;
