import React, { useState } from "react";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// let name = "<b>Nikhil</b>" // internal HTML doesn't get applied to avoid dangerous html
function App() {

  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#213555';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }


  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>

        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About mode={mode} />}>
              </Route>

              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}>
              </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
