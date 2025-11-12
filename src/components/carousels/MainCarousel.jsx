import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ssecampus from "../../assets/ssecampus.jpg";
import girlsentrance from "../../assets/girlsentrance.jpg";
import girlsSSE from "../../assets/girlsSSE.jpg";
import girlsCorridor1 from "../../assets/girlsCorridor1.jpg";
import campusGreenary from "../../assets/campusGreenary.jpg";
import classroomStylish3 from "../../assets/classroomStylish3.jpg";
import computerLabFocused from "../../assets/computerLabFocused.jpg";
import traditionalDance from "../../assets/traditionalDance.jpg";
import culturalRampWalk from "../../assets/culturalRampWalk.jpg";
import girlInLibrary from "../../assets/girlInLibrary.jpg";
import girlsTrio from "../../assets/girlsTrio.jpg";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg"; 
import slider4 from "../../assets/slider4.jpg";
import MainSSE from "../../assets/mainSSE.jpeg";
import advisoryBoard from "../../assets/advisoryBoard.png";
import desktop1 from "../../assets/desktop1.jpeg";
import desktop2 from "../../assets/desktop2.jpeg";
import desktop3 from "../../assets/desktop3.jpeg";
import desktop4 from "../../assets/desktop4.jpeg";
import desktop5 from "../../assets/desktop5.jpeg";

/**
 * Enhanced professional main carousel component with automatic rotation, vibrant imagery,
 * and React Router navigation
 */
const MainCarousel = ({ slides = [] }) => {
  // Initialize navigate hook for programmatic navigation
  const navigate = useNavigate();

  // Default slides if none provided
  const defaultSlides = [
    {
      id: 3,
       image: ssecampus,
      title: "Vibrant Campus Life",
      subtitle: "Beyond Academics",
      description:
        "Experience a holistic campus environment with diverse clubs, cultural events, and sports activities.",
      buttonText: "Life at SSE",
      buttonLink: "/life/overview",
    },
    {
      id: 4,
      image: girlsSSE,
      title: "Exceptional Placement Record",
      subtitle: "Building Career Success Stories",
      description:
        "Our graduates are recruited by top companies with 95% placement rate across engineering disciplines.",
      buttonText: "Placement Details",
      buttonLink: "/placement/placement",
    },
    {
      id: 1,
      image: girlsTrio,
      title: "Academic Excellence",
      subtitle: "NAAC Accredited Engineering Education",
      description:
        "Sanskriti School of Engineering offers industry-aligned curriculum with innovative teaching methodologies.",
      buttonText: "Explore Academics",
       buttonLink: "/academics/courses",
    },{
      id: 2,
      image: advisoryBoard,
  
    },
    {
      id: 5,
      image: desktop1,
      desktopOnly: true
    },
    {
      id: 6,
      image: desktop2,
      desktopOnly: true
    },
    {
      id: 7,
      image: desktop3,
      desktopOnly: true
    },
    {
      id: 8,
      image: desktop4,
      desktopOnly: true
    },
    {
      id: 9,
      image: desktop5,
      desktopOnly: true
    }
  ];

  // State to track if we're on desktop
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 992); // Bootstrap lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Use provided slides or defaults, filter desktop-only slides on mobile
  const baseSlides = slides.length > 0 ? slides : defaultSlides;
  const displaySlides = isDesktop ? baseSlides : baseSlides.filter(slide => !slide.desktopOnly);

  // State for animation control
  const [animationIndex, setAnimationIndex] = useState(0);

  // Update animation index when slide changes
  const handleSlideChange = (selectedIndex) => {
    setAnimationIndex(selectedIndex);
  };

  // Handle button click with navigate
  const handleNavigate = (path, event) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <section className="main-carousel-section">
      <Carousel
        interval={6000}
        indicators={true}
        controls={true}
        pause={false}
        onSlide={handleSlideChange}
        className="main-hero-carousel"
      >
        {displaySlides.map((slide, index) => (
          <Carousel.Item key={slide.id} className="carousel-item-fullheight">
            {/* Slide Background with overlay effect */}
            <div
              className="slide-background"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                maxHeight: "800px",
              }}
            ></div>

            {/* Slide Overlay */}
            <div
              className="slide-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            ></div>

            {/* Slide Content */}
            <Carousel.Caption className="text-start slide-content">
              <div className="container h-100 d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-7 col-md-10">
                    <h5
                      className={`text-uppercase fw-light mb-3 animate__animated ${
                        index === animationIndex ? "animate__fadeIn" : ""
                      }`}
                    >
                      {slide.subtitle}
                    </h5>
                    <h1
                      className={`display-4 fw-bold mb-4 animate__animated ${
                        index === animationIndex
                          ? "animate__fadeIn animate__delay-1s"
                          : ""
                      }`}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={`lead mb-4 animate__animated ${
                        index === animationIndex
                          ? "animate__fadeIn animate__delay-2s"
                          : ""
                      }`}
                    >
                      {slide.description}
                    </p>
                    <div
                      className={`animate__animated ${
                        index === animationIndex
                          ? "animate__fadeIn animate__delay-3s"
                          : ""
                      }`}
                    >
                       <button
                        onClick={(e) => handleNavigate(slide.buttonLink, e)}
                        className="btn btn-primary btn-lg rounded-pill px-4 py-2"
                      >
                        {slide.buttonText}{" "}
                        <i className="fas fa-arrow-right ms-2"></i>
                      </button> 
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default MainCarousel;