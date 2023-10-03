import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// let name = "<b>Nikhil</b>" // internal HTML doesn't get applied to avoid dangerous html
function App() {

  const [darkMode, setDarkMode] = useState(false); // Whether dark mode is enabled or not

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={darkMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
