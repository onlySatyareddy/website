import React from "react";
import './Navbar.css'
import '../Style/Style.css'
function Navbar() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-sm navbar-light bg-btn btn-warning">
        <a class="navbar-brand" href="#" style={{color:'#bce8e8'}}>
          {" "}
          Hotel Website
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText"style={{color:'#bce8e8'}}>
          <ul class="d-flex navbar-nav h-100 w-100 text-md-center" >
            <li class="nav-item flex-fill">
              <a class="nav-link hilite" href="#">
                Home
              </a>
            </li>
            <li class="nav-item flex-fill">
              <a class="nav-link" href="#footer">
                Features
              </a>
            </li>
            <li class="nav-item flex-fill">
              <a class="nav-link" href="#landing">
                About
              </a>
            </li>
            <li class="nav-item flex-fill">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item flex-fill">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item flex-fill">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
