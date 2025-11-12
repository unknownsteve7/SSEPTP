import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout.css';

/**
 * Updated site footer component with correct address and relevant links
 */
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget about-widget">
                <h3>Sanskrithi School of Engineering</h3>
                <p>Empowering future engineers with knowledge, skills, and values since 2010.</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Beedupalli Knowledgepark, Behind SSSIHMS, Puttaparthi, Sri Sathya Sai District, AP - 515134</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <p>+91 9100064545 / 74545</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>enquiry@sseptp.org / hr@sseptp.org</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://www.facebook.com/sseptp/"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://x.com/SanskrithiGroup"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/sanskrithigroup_ptp/"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/sgiputtaparthi/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/about/college">About Us</Link></li>
                  <li><Link to="/programmes/all">Programmes</Link></li>
                  <li><Link to="/admissions/overview">Admissions</Link></li>
                  <li><Link to="/placement/placement">Placements</Link></li>
                  <li><Link to="/life/campus-facilities">Infrastructure</Link></li>
                  <li><a href="https://bonafide.sseptp.org/" target="_blank" rel="noopener noreferrer">Bonafide</a></li>
                  <li><Link to="/admissions/enquiry">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget resources">
                <h3>Departments</h3>
                <ul>
                  <li><Link to="/faculty-cse">CSE</Link></li>
                  <li><Link to="/faculty-ece">ECE</Link></li>
                  <li><Link to="/faculty/eee">EEE</Link></li>
                  <li><Link to="/faculty/mechanical">Mechanical</Link></li>
                  <li><Link to="/faculty/civil">Civil</Link></li>
                  <li><Link to="/faculty/humanities">Humanities & Sciences</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget resources">
                <h3>Resources</h3>
                <ul>
                  <li><Link to="/academics/courses">Academic Programs</Link></li>
                  <li><Link to="/academics/scholarship">Scholarships</Link></li>
                  <li><Link to="/academics/labs">Laboratories</Link></li>
                  <li><Link to="/about/naac">NAAC</Link></li>
                  <li><Link to="/about/leadership">Leadership</Link></li>
                  <li><Link to="/about/committees">Committees</Link></li>
                  <li><Link to="/rit">RIT Program</Link></li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>&copy; 2025 Sanskrithi School of Engineering. All Rights Reserved.</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;