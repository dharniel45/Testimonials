import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Josiah.css';
import Me from "./img/three.png";

function Josiah () {
  return (
    <section className="box">
      <div className="des">
          
          
          
          
          <div className="right">
            <div className="i-left-wrap"> 
            <h1 className="box-1">Josiah's Experience</h1>

            <p className="gased">VENDOR</p>
            
            <h3 className="box-2">Here is what customers and vendors are saying about
             The result of the trials generally show a reduction in the 
             duration of neutropenia with variable result when considering severe infections, 
             antibiotic use and the duration of hospitalization. 
             Combining the data from various studies especially from those with higher patient numbers, 
             event free survival and over all survival do not appear to be affected by either G-CSF or GM-CSF.
          </h3>

          
            <h3 className="box-3">SHARE YOUR OWN STORY! </h3>
           
            
            
            </div>
            </div>
          <div className="left">
              <div className="i-beg"></div>
            <img src={Me} 
            alt="" className="i-imeg" />

          </div>
           
     </div>
     </section>
  );
}

export default Josiah;
