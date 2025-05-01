import React from "react";
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import './App.css';
import Navbar from './components/navbar';
import TextArea from './components/TextArea';
import About  from './components/About';



function App() {
  const [mode, setmode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0d1117"
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"

    }
  }
  return (
    <>
      {/* <Router>
        <Navbar mode={mode} toggleMode={toggleMode} text="Enable Dark Mode" />

        <div className="container my-1">
          <Routes>
            <Route path="/about">
                <About />
              </Route>

            <Route path="/">
                
            </Route>

          </Routes>
          
        </div>
      
      </Router> */}


      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} text="Enable Dark Mode" />

      <Routes>
        <Route path="/" element={<TextArea mode={mode} toggleMode ={toggleMode}/>} />
        <Route path="/about" element={<About mode={mode} toggleMode ={toggleMode}/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
        
    </>
  );
}

export default App;
