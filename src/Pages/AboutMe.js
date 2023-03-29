import React from 'react'
import Abhishekpic from '../Assets/DSC_8028.jpg'
import './Pages.css'
function AboutMe() {
  return (
    <div>
     <div class="card" >
     <img src={Abhishekpic} class="card-img-top" alt="..." />
     <div class="card-body">
  </div>
</div>
<div class="card" >
     <div class="card-body">
     <h5 class="card-title">Abhishek Kumar</h5>
     <p class="card-text">Hi, I'm Abhishek Kumar and I'm a graduate student ... I'm experienced in Front End Web Development</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  )
}

export default AboutMe
