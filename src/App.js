import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import All from './components/pages/All';
import FullStackDevelopment from './components/pages/FullStackDevelopment';
import DataScience from './components/pages/DataScience';
import CyberSecurity from './components/pages/CyberSecurity';
import Career from './components/pages/Career';



 
function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/FullStackDevelopment" element={<FullStackDevelopment/>}/>
        <Route path="/DataScience" element={<DataScience/>}/>
        <Route path="/CyberSecurity" element={<CyberSecurity/>}/>
        <Route path="/Career" element={<Career/>}/>
       </Routes>
       </BrowserRouter>
        
    </div>
  );
}
 
export default App;
