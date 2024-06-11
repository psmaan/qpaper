import './App.css';
import logo from './logo.svg';
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exampage from './components/Exampage';
import Result from './components/Result';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/exampage' element={<Exampage />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  )
}
export default App