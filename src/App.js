import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// let name = "<b>Nikhil</b>" // internal HTML doesn't get applied to avoid dangerous html
function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#213555';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert="This is alert" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
