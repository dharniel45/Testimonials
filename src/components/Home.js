import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Me from "./img/me.png";

function Home () {
  return (
    <section className="r">
      <div className="i">
          <div className="i.left">
            <div className="i-left-wrapper"> 
            <h1 className="one">Amazing</h1>
            <h1 className="two">Experience from Our</h1>
            <h1 className="three">Wonderful Customers</h1>
            <h3 className="four">Here is what customers and vendors are saying about</h3>
            <h3 className="five">us, you can share your stories with us too. </h3>
           
            
            
            </div>
            </div>
          <div className="i.right">
              <div className="i-big"></div>
            <img src={Me} 
            alt="" className="i-img" />

          </div>
           
     </div>
     </section>
  );
}

export default Home;
