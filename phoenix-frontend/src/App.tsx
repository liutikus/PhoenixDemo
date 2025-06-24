import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import LanguageGuard from './components/LanguageGuard';
import ProjectDetails from './pages/ProjectDetails';
import News from './pages/News';

const App = () => {
  return (
    <Routes>
      <Route path="/:lng" element={<LanguageGuard />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects/:projectStatus" element={<Projects />} />
        <Route path="projects/:projectStatus/:id" element={<ProjectDetails />} />
        <Route path="news" element={<News />} />


      </Route>


      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes>
  );
};

export default App;
