import "./style/index.css"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// import { Tabs } from './component/tabs';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Skills } from "./pages/skills";
import { Contact } from "./pages/contact";
import { Github } from "./pages/github";
import { Resume } from "./pages/resume";
import { Screensaver } from "./pages/screensaver";

function App() {
  const location = useLocation();
  const showTabs = location.pathname !== '/screensaver';

  return (
    <>
      {showTabs}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />} />
        <Route path="/resume" element={<Resume />}/>
        <Route path="/screensaver" element={<Screensaver />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
