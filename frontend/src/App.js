import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
