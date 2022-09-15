import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
import Questions from './pages/Questions/Questions';
import Results from './pages/Results/Results';

function App() {
  return (
    <div className="App">
      <Questions/>
    </div>
  );
}

export default App;
