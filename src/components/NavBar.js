import React from 'react';
import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
        <>
           <nav className="navbar">
               <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <div className="logo-container">
                            <div><img src="iza logo2.jpg" /></div>
                            <div class="name-container">
                                <h2>Izabela Jordanoska</h2>
                                <h3 className="logo-sub">Изабела Йорданоска</h3>
                            </div>
                        </div>
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
               </div>
           </nav>
        </>
    );
}

export default NavBar;