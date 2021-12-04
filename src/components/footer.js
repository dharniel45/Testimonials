import React from 'react';
import './footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Me from "./img/last.png";

function Footer() {
  return (
      
    <div className='footer-container'>
      <div>
                 <img src={Me}  
                 alt="" className="getex" />
                 </div>
      <section className='footer-subscription'>
             
 
        <p className='footer-subscription-heading'>
          Be a member of our community 
        </p>
        
        <p className='footer-subscription-text'>
          We'd make sure you're always first to know whats happening on Vasiti-thus, the world.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='enter your email address'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/sign-up'>About us</Link>
            <Link to='/'>Terms of Use</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Press & Media</Link>
        
          </div>
          <div class='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Marketplce</Link>
            <Link to='/'>Magazine</Link>
            <Link to='/'>Seller</Link>
            <Link to='/'>Wholesale</Link>
            <Link to='/'>Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Careers</h2>
            <Link to='/'>Become a Campus Rep</Link>
            <Link to='/'>Become a Vasiti Influencer</Link>
            <Link to='/'>Become a Campus Writer</Link>
            <Link to='/'>Become an Affiliates</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Get in touch</h2>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Patner with us</Link>
            <Link to='/'>Advertise with us</Link>
            <Link to='/'>Help/FAQs</Link>
          </div>
             <div class='footer-link-items'>
            <h2>Join our community</h2>
            <div class='tex'>
            
            <a href='/'></a>
            <a href ='/'></a>
            <a href ='/'></a>
            <a href='/'></a>
          </div>
            <Link to='/'>Email Newsletter</Link>
            
          </div>






        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'></small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;