import "./style/index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Tabs } from './component/tabs';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Skills } from "./pages/skills";
import { Contact } from "./pages/contact";

function App() {

  return (
    <Router>
      <Tabs/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    
  )
}

export default App
