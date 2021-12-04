import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
      <div className="container">
    <div className="header">

      <Link to="/">
       <img 
        className="header_logo" 
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zilmvus7r6wyhr36iuz7"
         alt=""
      />
      </Link>
      <div className="header_nav">
        
      <Link to="/" className="header_link">
            <div onClick="/" className="header_option">
            <span className="header_optionLineOne">ABOUT US</span>
            </div>
            </Link>
      
            <Link to="/" className="header_link">
            <div onClick="/" className="header_option">
            <span className="header_optionLineOne">STORIES</span>
            </div>
            </Link>

            <Link to="/" className="header_link">
            <div onClick="/" className="header_option">
            <span className="header_optionLineOne">CONTACT</span>
            </div>
            </Link>
              
            <Link to="/" className="header_link">
            <div onClick="/" className="header_option">
            <span className="header_optionLineOne">LOG IN</span>
            </div>
            </Link>

            <Link to="/" className="header_linked">
            <div onClick="/" className="header_option">
            <span className="header_optionLineOne">SIGN UP</span>
            </div>
            </Link>

      </div>

     </div> 
     <section  className="next">
      <div>   <span  className="fed" >MARKETPLACE</span> </div>
      <div> <span  className="fed" >WHOLESALE CENTER</span>  </div>
      <div> <span className="fed" >SELLER CENTER</span> </div>
      <div>  <span className="fed" >SERVICES</span> </div>
      <div>   <span className="fed" >INTERNSHIP</span> </div>
      <div>  <span className="fed" >EVENTS</span> </div>
     </section>
     </div>
  );
}

export default Header;
