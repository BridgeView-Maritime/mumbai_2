import React from "react";
import '../../src/App.css';
import lojo from "../images/bsp.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={lojo}
            className="logo"
            alt="logo"
            height="60px"
            width="70px"
          ></img>
          {/* <Link className="navbar-brand" to="/">
           BSP
          </Link> */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/charteringvessels">
                Charteringvessels
                </Link>
              </li>
              <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Get in touch
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/getaquote">Get a quote</a>
          <a class="dropdown-item" href="/generalenquiry">Generalenquiry</a>
          {/* <div class="dropdown-divider"></div> */}
         

        </div>
             </li> 
            
            
              <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ourservices
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/crewmanagement">Crewmanagement</a>
          {/* <div class="dropdown-divider"></div> */}
          <a class="dropdown-item" href="/owningvessels">Owningvessels</a>
          <a class="dropdown-item" href="/salespurchase">Salespurchase</a>
          <a class="dropdown-item" href="/technicalmanagements">Technicalmanagements</a>
          <a class="dropdown-item" href="/touge">Touge</a>

        </div>
             </li> 
             <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                Contact
                </Link>

              </li>
            </ul>
            {/* <form className="d-flex">
              <Link role="button" to="/admin" className="btn btn-primary ">
                Admin
              </Link>
             
            </form> */}
            
            
          </div>
        </div>
      </nav>
    </>
  );
}
