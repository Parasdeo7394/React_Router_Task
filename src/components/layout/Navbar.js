import React from 'react'
import {NavLink} from 'react-router-dom';
 
// import Navbar from './Navbar';
 
const Navbar = () => {
  return (
    <div className='navbar_start'>
         
     <nav className="navbar navbar-expand-lg  p-4">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
 
        
 
</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
 
      <ul className="navbar-nav">
 
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">All</NavLink>
        </li>
 
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/FullStackDevelopment">FullStackDevelopment</NavLink>
        </li>
 
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/DataScience">DataScience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/CyberSecurity">CyberSecurity</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Career">Career</NavLink>
        </li>
        
      </ul>
    </div>
    
 
  </div>
     </nav>
      
    </div>
  )
}
 
export default Navbar