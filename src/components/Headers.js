import React from 'react';
import HomepageImage from './HomepageImage';
import logoimage from '../images/logo.jpg';


function Headers() {
  return (
    <header>
      <div class="logo">
        <img src={logoimage} class="logo" alt='Office Discussion' />
      </div>
      <nav>
        <ul class="main-menu">
            <li><a href="">Home</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Solutions</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
      </nav>
	  <HomepageImage />
	  
    </header>
  );
}

export default Headers;