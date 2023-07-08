
import "./App.css";
import Headertwo from "./Components/Headertwo";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import PersonalBanking from "./Components/PersonalBanking";
import featureone from './featureone.png'
import Footer from "./Components/Footer";
import { NavLink } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
     
    
              
            

      <Routes>
      <Route element={<Headertwo />} path="/" />
          <Route element={<PersonalBanking />} path="/savings" />
          <Route element={<PersonalBanking />} path="/savingplus" />
          <Route element={<PersonalBanking />} path="/taxfreesavings" />
          <Route element={<PersonalBanking />} path="/help_inpersonalbanking" />
          
</Routes>
             
</Router>
<Footer />
    </div>
  );
}

export default App;
