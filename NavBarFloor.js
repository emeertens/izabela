import React from 'react';
import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
        <>
           <nav className="navbar">
               <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <p>изабела </p> 
                        <p> йорданоска</p>
                     </NavLink>
                   <ul className="nav-menu">
                       < li className="nav-item">
                       <NavLink exact to="/" active className="active" className="nav-links">
                            Home
                        </NavLink>
                       </ li>
                       <li className="nav-item">
                       <NavLink exact to="/linguistics" active className="active" className="nav-links">
                            Linguistics
                        </NavLink>
                       </li>
                       <li className="nav-item">
                       <NavLink exact to="/play" active className="active" className="nav-links">
                            Play
                        </NavLink>
                       </li>
                   </ul>
                    <div className="nav-icon">
                        <i className="fas fa-times"></i>
                    </div>
               </div>
           </nav>
        </>
    );
}

export default NavBar;