import React from 'react'
import logoA from '../Assets/logo/logoB.png'
import { Link, BrowserRouter as Router } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
    <img
            src={logoA}
            alt="Abhishek original logo"
            height={45}
          />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Aboutme">About me</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Skills">Skills</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Project">Project</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Resume">Resume</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success me-2" type="submit">Search</button>
      </form>
      {/* <Link class="nav-link" to="/Login"><button class="btn btn-outline-primary me-1" type="submit">Login</button></Link> */}
      
      {/* <Link  to="/Signup"><button class="btn btn-outline-primary" type="submit">Signup</button></Link> */}
      
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
