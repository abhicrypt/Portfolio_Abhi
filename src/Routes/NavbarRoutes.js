import React from 'react'
import{createBrowserRouter, RouterProvider} from 'react-router-dom';
import Courcel from '../Component/Courcel';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Skills from '../Pages/Skills';
import Resume from '../Pages/Resume';
import Signup from '../Authentication/Signup'
import Login from '../Authentication/Login';
import Navbar from '../Component/Navbar';
import Root from '../Pages/Root';
function NavbarRoutes() {

  const router = createBrowserRouter([

    {path:'/',
     element:<Root/>,
    children:[

    {path:'/', element:<Courcel/>},
    {path:'/Aboutme', element:<AboutMe/>},
    {path:'/Project', element:<Project/>},
    {path:'/Skills', element:<Skills/>},
    {path:'/Resume', element:<Resume/>},
    {path:'/Contact', element:<Contact/>},
    ]
    },
  ]);
  return <RouterProvider router={router}/>;
   
       
          {/*   <Navbar/> */}
          
          
           {/* <Route path='/Aboutme'  component={AboutMe}/> 
           <Route path='/Project'  component={Project}/> 
           <Route path='/Skills' component={Skills}/> 
           <Route path='/Resume' component={Resume}/> 
           <Route path='/Contact' component={Contact}/> 
           <Route path='/Signup' component={Signup}/> 
           <Route path='/Login' component={Login}/>  */}
       
    
  
}

export default NavbarRoutes
