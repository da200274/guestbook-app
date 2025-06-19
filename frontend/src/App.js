import './App.css';
import Home from './pages/Home'
import Message from './pages/Message';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

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
