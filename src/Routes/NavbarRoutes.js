import React from 'react'
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Courcel from '../Component/Courcel';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Skills from '../Pages/Skills';
import Resume from '../Pages/Resume';

function NavbarRoutes() {
  return (
    <div>
      <React.Fragment>
        <Router>
      
          <Switch>
          <Route path='/' exact component={Courcel}/>
           <Route path='/Aboutme' exact component={AboutMe}/> 
           <Route path='/Project' component={Project}/> 
           <Route path='/Skills' component={Skills}/> 
           <Route path='/Resume' component={Resume}/> 
           <Route path='/Contact' component={Contact}/> 
           </Switch>
         </Router>
      </React.Fragment>
    </div>
  )
}

export default NavbarRoutes
