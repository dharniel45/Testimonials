import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from"./components/Header";
import Home from"./components/Home";
import './App.css';
import useMediaQuery from "./useMediaQuery";
import classNames from 'classnames';
import styles from "./App.css";
import Experience from "./components/Experience";
import People from "./components/people";
import Josiah from "./components/Josiah";
import Footer from "./components/footer";

const App = () => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  return (
    <Router>
    <div className={classNames([
        styles.layout,
        isMobile && styles.mobile,
        isTablet && styles.tablet,
      ])}>

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
