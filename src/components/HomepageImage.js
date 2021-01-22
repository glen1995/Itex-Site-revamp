import React, { Component } from 'react';
import MainImage from '../images/MainImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function HomepageImage() {
  return (
    <div class="header-image-wrapper">
    	<img src={MainImage} class="main-image" alt='Office Discussion' />
      	<div class="floating-div">
			<div class="floating-div-content-wrapper">
				<h1>
					IT Consulting & Services
				</h1>
				<p>
					Founded in 2009, Itex Technology Inc. with head office in Vancouver, BC, Canada, is a growing firm in the field of Information Technology, providing solutions for small to medium business enterprises in the fields of applications/software development, data analysis and tools development, web development, testing and automation framework development across multiple tools, embedded software development and testing.
				</p>
				<div class="find-out-button-wrapper">
					<Button href="#" size="lg" class="find-out-button">Link</Button>
				</div>
		  	</div>
	    </div>
    </div>
  );
}

export default HomepageImage;