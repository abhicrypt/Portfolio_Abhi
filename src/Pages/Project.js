import React from 'react'
import { Card,CardHeader } from '@material-ui/core'
import './Pages.css'
function Project() {
  return (
   
<div className='project_row_four'>
  <div>

<Card className="home-header-data-card bg-success">
<CardHeader> title="Sports"
                    subheader="Select a sport from the menu"</CardHeader>
            <p>Todo list</p>
            <h5>54</h5>
            <button>view Code</button>
            <button>Preview</button>
             </Card>
  </div>
<div>
  <Card className="home-header-data-card bg-success">
  <CardHeader><p>Todo list</p></CardHeader>
            <p>Sportify clone</p>
            <h5>54</h5>
            <div class="d-grid gap-5 d-md-block ">
  <button class="btn btn-primary mr-2" type="button">view Code</button>
  <button class="btn btn-primary ml-2" type="button">Preview</button>
  </div>
  </Card>
</div>

<div>
  <Card className="home-header-data-card bg-success">
  <CardHeader><p>Todo list</p></CardHeader>
            <p>SideBar</p>
            <h5>54</h5>
            <div class="d-grid gap-5 d-md-block ">
  <a><button class="btn btn-primary mr-2" type="button" >view Code</button></a>
  <button class="btn btn-primary ml-2" type="button">Preview</button>
  </div>
  </Card>
</div>

  <div>

<Card className="home-header-data-card bg-success">
  <CardHeader><p>Running</p></CardHeader>
            <p>Pokemon Pokedex</p>
            <h5>54</h5>
            <button>view Code</button>
            <button>Preview</button>
             </Card>
  </div>
  <div>

<Card className="home-header-data-card bg-success">
  <CardHeader><p>Running</p></CardHeader>
            <p>React food Card Webpage</p>
            <h5>54</h5>
            <button>view Code</button>
            <button>Preview</button>
             </Card>
  </div>
  <div>

<Card className="home-header-data-card bg-success">
  <CardHeader><p>Running</p></CardHeader>
            <p>CRUD operation using MERN Stack</p>
            <h5>54</h5>
            <button>view Code</button>
            <button>Preview</button>
             </Card>
  </div>
      {/* <h5> Sportify clone</h5>
      <h5> Todo list</h5>
      <h5> Pokemon Pokedex</h5>
      <h5> React food Card Webpage</h5>
      <h5> CRUD operation using MERN Stack</h5> */}
    </div>
  )
}

export default Project
