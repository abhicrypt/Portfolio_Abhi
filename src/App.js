import logo from './logo.svg';
import './App.css';
import Courcel from './Component/Courcel';
import Navbar from './Component/Navbar';
import NavbarRoutes from './Routes/NavbarRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarRoutes/>
      
    </div>
  );
}

export default App;
