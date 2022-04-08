import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
