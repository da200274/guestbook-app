import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './pages/Home'
import Message from './pages/Message';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  /*
  const [msg, setMsg] = useState("")

  //used for testing the database connection
  useEffect(() =>{
    getMessage().then(setMsg).catch(console.error);
  }, [])

  return ( );*/

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/message' element={<Message />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
