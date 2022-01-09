import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
import Form from './components/Form';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#072b4e'
      showAlert('dark mode enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode enabled', 'success')
    }
  }
  return (
    // <Router>
    <>
      {/* <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode} /> */}
      <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode} />
      {/* below navbar component takes default values */}
      {/* <Navbar /> */}
      {/* <Alert alert={alert} /> */}
      <Alert alert={alert} />
      <Form heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      {/* <div className="container my-3">
        <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/' element={<Form heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
        </Routes>
      </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;