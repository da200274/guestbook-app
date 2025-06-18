import React, {useEffect, useState} from 'react';
import './App.css';
import { getMessage } from './api';

function App() {

  const [msg, setMsg] = useState("")

  useEffect(() =>{
    getMessage().then(setMsg).catch(console.error);
  }, [])

  return (
    <div>
      <h1>Guestbook</h1>
      <p>See what people wrote about us and feel free to leave a message. </p>
      <p>{msg}</p>
    </div>
  );
}

export default App;
