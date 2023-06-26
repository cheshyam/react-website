import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {Routes,Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contanct from "./Component/Contanct";
import Services from "./Component/Services";
import Error from "./Component/Error";
import NavBar from "./Component/Nav";
import Footer from "./Component/Footer";


const App =()=>{
    return(
        <>
          <NavBar/> 
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contanct" Component={Contanct}/>
            <Route path="/services" Component={Services}/>
            <Route path="*" Component={Error}/>
          </Routes>
          <Footer/>
        </>
    )
}

export default App;