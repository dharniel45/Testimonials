import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from"./components/Header";
import Home from"./components/Home";
import './App.css';


import Experience from "./components/Experience";
import People from "./components/people";
import Josiah from "./components/Josiah";
import Footer from "./components/footer";

const App = () => {
  
  return (
    <Router>
    <div>

     <Header />
     <Home />
     <Experience />
     <People />
     <Josiah />
     <People />
     <Footer />
     
    </div>
    </Router>
  );
}

export default App;
