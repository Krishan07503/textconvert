
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has been enabled", "success")
      document.title = "text-darkMode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
      document.title = "text-ligthMode"

    }
  }
  return (
    <>
      {/* <Navbar title="krishan" about="about us"  /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="krishan" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="enter the text analyze" mode={mode} />
            </Route>
          </Switch> */}
        <TextForm showAlert={showAlert} heading="enter the text analyze" mode={mode} />

      </div>
    {/* </Router > */}

    </>
  );
}

export default App;
