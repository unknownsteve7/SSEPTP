import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/sse-logo.svg";

/**
 * Navbar component - Logo always visible, navigation flyout only on mobile
 */
const Navbar = ({ scrollPosition }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Set initial state
    handleScroll();
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        toggleRef.current && 
        !toggleRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Add body class when menu is open to prevent scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  // Toggle dropdown menu
  const toggleDropdown = (dropdown, e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Navigation data structure with colors - matched with sidebar structure
  const navData = [
    {
      name: "Programmes",
      color: "#F9843D", // Orange
      items: [
        { title: "All Programmes", link: "/programmes/all" },
        { title: "Undergraduate Programmes", link: "/programmes/undergraduate" },
      ],
    },
    {
      name: "Life @ SSE",
      color: "#1D9DD9", // Blue
      items: [
        { title: "Life @ SSE", link: "/life/overview" },
        { title: "Academic Facilities", link: "/life/academic-facilities" },
        { title: "On Campus Facilities", link: "/life/campus-facilities" },
        { title: "Health and Safety", link: "/life/health-safety" },
        { title: "SSE Sports", link: "/life/sports" },
      ],
    },
    {
      name: "Admissions",
      color: "#6C757D", // Grey
      items: [
        { title: "Overview", link: "/admissions/overview" },
        { title: "Admission Process", link: "/admissions/admissionprocess" },
        { title: "Fee Structure", link: "/admissions/fees" },
        { title: "Admission Enquiry", link: "/admissions/enquiry" },
      ],
    },
    {
      name: "Academics",
      color: "#F9843D", // Orange
      items: [
        { title: "Courses", link: "/academics/courses" },
        { title: "Scholarship", link: "/academics/scholarship" },
        { title: "Our Labs", link: "/academics/labs" },
      ],
    },
    {
      name: "About Us",
      color: "#28A745", // Green
      items: [
        { title: "About College", link: "/about/college" },
        { title: "Leadership", link: "/about/leadership" },
        { title: "Committees", link: "/about/committees" },
        { title: "NAAC", link: "/about/NAAC" },
      ],
    },
    {
      name: "Placements",
      color: "#F9843D", // Orange
      items: [
        { title: "Placements", link: "/placement/placement" },
        { title: "Success Stories", link: "/placement/placement-success" },
        { title: "Placement Contact", link: "/placement/placement-contact" },
      ],
    },
  ];

  // Navbar style based on scroll position
  const navbarStyle = {
    backgroundColor: isScrolled ? 'rgba(17, 44, 126, 0.95)' : 'transparent', 
    boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1030,
    padding: isScrolled ? '10px 0' : '15px 0',
  };

  // Logo style with responsive sizing
  const logoStyle = {
    height: isScrolled ? '40px' : '50px',
    transition: 'height 0.3s ease',
  };

  return (
    <>
      <nav className="navbar navbar-dark" style={navbarStyle}>
        <div className="container">
          {/* Logo - always visible */}
          <Link to="/" className="navbar-brand">
            <img 
              src={Logo} 
              alt="SSE Logo" 
              style={logoStyle}
            />
          </Link>
          
          {/* Mobile Toggle Button - only visible on mobile */}
          <button 
            ref={toggleRef}
            className={`navbar-toggler d-lg-none ${mobileMenuOpen ? 'active' : ''}`} 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Mobile Menu Flyout */}
      <div ref={menuRef} className={`mobile-menu-flyout ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h5 className="text-white mb-0">Menu</h5>
          <button 
            className="btn-close btn-close-white" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          ></button>
        </div>
        
        <ul className="mobile-menu-list">
          {navData.map((category, index) => (
            <li className="mobile-menu-item" key={index}>
              <div 
                className={`mobile-menu-category ${activeDropdown === category.name ? 'active' : ''}`}
                onClick={(e) => toggleDropdown(category.name, e)}
              >
                <span 
                  className="category-name"
                  style={{ borderLeftColor: category.color }}
                >
                  {category.name} 
                </span>
                <i className={`fas fa-${activeDropdown === category.name ? 'minus' : 'plus'}`}></i>
              </div>
              
              <div className={`mobile-submenu ${activeDropdown === category.name ? 'active' : ''}`}>
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        className="submenu-link"
                        to={item.link}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title} 
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        
        {/* Apply Now Button */}
        <div className="mobile-menu-footer">
          <Link 
            to="/admissions/enquiry" 
            className="btn-apply"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-graduation-cap me-2"></i>
            Apply Now
          </Link>
          
          {/* Social Media Links */}
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="copyright">© 2025 Sanskriti School of Engineering</p>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Menu Toggle Button */
        .navbar-toggler {
          border: none;
          padding: 0;
          width: 30px;
          height: 22px;
          position: relative;
          cursor: pointer;
          background-color: transparent;
        }
        
        .navbar-toggler:focus {
          box-shadow: none;
        }
        
        .navbar-toggler span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: white;
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }
        
        .navbar-toggler span:nth-child(1) {
          top: 0;
        }
        
        .navbar-toggler span:nth-child(2) {
          top: 10px;
        }
        
        .navbar-toggler span:nth-child(3) {
          top: 20px;
        }
        
        .navbar-toggler.active span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }
        
        .navbar-toggler.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        .navbar-toggler.active span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }
        
        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1035;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        
        /* Mobile Menu Flyout */
        .mobile-menu-flyout {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          max-width: 85%;
          height: 100vh;
          background-color: rgba(17, 44, 126, 0.98);
          z-index: 1040;
          overflow-y: auto;
          transition: right 0.3s ease-in-out;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }
        
        .mobile-menu-flyout.open {
          right: 0;
        }
        
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          overflow-y: auto;
        }
        
        .mobile-menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .mobile-menu-category {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .mobile-menu-category:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .mobile-menu-category.active {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .category-name {
          color: white;
          font-weight: 500;
          border-left: 4px solid transparent;
          padding-left: 10px;
        }
        
        .mobile-menu-category i {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
        }
        
        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .mobile-submenu.active {
          max-height: 500px; /* Large enough to accommodate any submenu */
        }
        
        .mobile-submenu ul {
          list-style: none;
          margin: 0;
          padding: 10px 0;
        }
        
        .submenu-link {
          display: block;
          padding: 10px 20px 10px 34px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }
        
        .submenu-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          padding-left: 40px;
        }
        
        .mobile-menu-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-apply {
          display: block;
          width: 100%;
          padding: 12px;
          text-align: center;
          background-color: var(--sse-secondary, #F9843D);
          color: white;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        
        .btn-apply:hover {
          background-color: var(--sse-primary, #8E3D19);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          color: white;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
        }
        
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: var(--sse-secondary, #F9843D);
          transform: translateY(-3px);
          color: white;
        }
        
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          text-align: center;
          margin-bottom: 0;
        }
        
        /* Custom scrollbar */
        .mobile-menu-list::-webkit-scrollbar {
          width: 5px;
        }
        
        .mobile-menu-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .mobile-menu-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
        }
        
        .mobile-menu-list::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        /* Prevent page scrolling when menu is open */
        body.overflow-hidden {
          overflow: hidden;
        }

        /* Responsive styling */
        @media (min-width: 992px) {
          .mobile-menu-flyout, 
          .navbar-toggler,
          .mobile-menu-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;