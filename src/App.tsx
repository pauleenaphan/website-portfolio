import "./style/index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Tabs } from './component/tabs';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Projects } from './pages/projects';

function App() {

  return (
    <Router>
      <Tabs/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </Router>
    
  )
}

export default App
