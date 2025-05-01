import React from 'react';
import './About.css'; // Make sure this CSS file exists

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <h2 className="about-subtitle">
        We are a team of dedicated professionals committed to delivering top-quality products and services.
      </h2>
      <div className="about-content">
        <h3 className="about-welcome">Welcome to our website!</h3>
        <p>
          We specialize in providing tools that make text manipulation simple and efficient. Whether you need to convert text to uppercase, lowercase, or perform other text transformations, our intuitive platform is designed to meet your needs.
        </p>
        <p>
          Our mission is to empower users with easy-to-use, reliable text processing solutions that enhance productivity and streamline workflows.
        </p>
        <p>
          With our cutting-edge technology and user-friendly interface, we aim to make text editing tasks quick and hassle-free. Thank you for choosing us as your go-to solution for all your text transformation needs.
        </p>
      </div>
    </div>
  );
}
