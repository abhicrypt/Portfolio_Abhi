import React from 'react'
import logoA from '../Assets/logo/logoB.png'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img
            src={logoA}
            alt="Abhishek original logo"
            height={45}
          />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Aboutme">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
      
        
        <button class="btn btn-outline-success mr-2" type="submit">Login</button>
        <button class="btn btn-outline-success ml-2" type="submit">Logout </button>
        <button class="btn btn-outline-success" type="submit">Signup</button>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
