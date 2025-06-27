import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import LanguageGuard from './components/LanguageGuard';
import ProjectDetails from './pages/ProjectDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import LanguageSync from './components/LanguageSync';

const App = () => {
  return (
    <div>
      <LanguageSync />
    <Routes>
      <Route path="/:lng" element={<LanguageGuard />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects/:projectStatus" element={<Projects />} />
        <Route path="projects/:projectStatus/:id" element={<ProjectDetails />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="donation" element={<Donation />} />
        <Route path="contact" element={<Contact />} />
      </Route>


      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes>
    </div>
  );
};

export default App;
