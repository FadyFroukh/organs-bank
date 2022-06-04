import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import About from './comps/pages/About/About';
import Home from './comps/pages/Home/Home';
import SignIn from "./comps/pages/SignIn/SignIn";
import SignUp from "./comps/pages/SignUp/SignUp";
import Contact from "./comps/pages/Contact/Contact";
import Admin from "./comps/pages/Admin/Admin"
import "../src/scss/utils.css";
import HiddenMenu from './comps/HiddenMenu';
import { useState } from 'react';
import Dashboard from './comps/pages/Dashboard/Dashboard';
import AdminLogin from './comps/pages/AdminLogin/AdminLogin';

function App() {

  const [click,setClick] = useState(false);
  const [isLogged,setIsLogged] = useState(false);
  const [isAdminLogged,setIsAdminLogged] = useState(false);

  return (
    <>
    <div className="App">
        <Router>
          <Routes> 
            <Route path='/' element={<Home click={click} setClick={setClick}/>} />
            <Route path="/about-us" element={<About click={click} setClick={setClick}/>}/>
            <Route path="/contact-us" element={<Contact click={click} setClick={setClick}/>}/>
            <Route path="/sign-in" element={<SignIn click={click} setClick={setClick} 
            isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
            <Route path="/sign-up" element={<SignUp click={click} setClick={setClick}/>}/>
            <Route path="/dashboard" element={<Dashboard isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
            <Route path="/admin-login" element={<AdminLogin isAdminLogged={isAdminLogged} setIsAdminLogged={setIsAdminLogged}/>}/>
            <Route path="/admin" element={<Admin isAdminLogged={isAdminLogged} setIsAdminLogged={setIsAdminLogged}/>}/>
          </Routes>
      </Router>
    </div>
    {
      click ? <HiddenMenu click={click} setClick={setClick}/> : null
    }
  
    </>
  );
}

export default App;
