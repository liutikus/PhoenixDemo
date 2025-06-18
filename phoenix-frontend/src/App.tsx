import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
   <Routes>
      <Route path="/:lng" element={<Home />} />
      <Route path="/:lng/about" element={<About />} />
    </Routes>
  )
}

export default App
