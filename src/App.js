//Library Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
function App() {
  return (
    <div>
      <Router> 
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
              <Route path="/projects" element = {<ProjectsPage/>}/>
          </Routes>
      </Router>
    </div>
  );
  }
export default App;
