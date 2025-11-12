import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import "../styles/campusFacilities.css"; // Custom CSS for this page
import Contact from "../components/common/Contact";

// Import local images
import ssecampus from "../assets/ssecampus.jpg";
import boysInCLG from "../assets/boysInCLG.jpg";
import computerlab from "../assets/computerlab.jpg";
import boysClub from "../assets/boysClub.jpg";
import library from "../assets/library.jpg";
import outside from "../assets/outside.jpg";
import cricketSSE from "../assets/cricketSSE.jpg";
import indoorGames from "../assets/indoorGames.jpg";
import campusCoridor from "../assets/campusCoridor.jpg";
import eceLab from "../assets/eceLab.jpg";
import principal from "../assets/principal.jpg";
import girlsTrio from "../assets/girlsTrio.jpg";
import diningSSE from "../assets/diningSSE.jpg";
import dinningWithFrds from "../assets/dinningWithFrds.jpg";
import campusGardenSSE from "../assets/campusGardenSSE.jpg";
import seminarHallSSE from "../assets/seminarhallSSE.jpg";
import cyclesSSE from "../assets/cyclesSSE.jpg";
import exhibitionHallSSE from "../assets/exhibitionHallSSE.jpg";
const CampusFacilities = () => {
  // For parallax effect (reusing from LifeAtSSE)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  // State for active facility category
  const [activeCategory, setActiveCategory] = useState("sports");

  // Facility categories
  const categories = [
    { id: "sports", label: "Sports Facilities", icon: "fas fa-running" },
    { id: "cafeteria", label: "Dining & Cafeteria", icon: "fas fa-utensils" },
    { id: "events", label: "Event Spaces", icon: "fas fa-microphone" },
];

  // Content for each facility category
  const facilityDetails = {
    sports: {
      title: "Sports & Fitness Facilities",
      description:
        "Our campus features comprehensive sports infrastructure to promote physical fitness, team spirit, and overall well-being among students. From state-of-the-art indoor courts to expansive outdoor playing fields, we provide facilities for a wide range of sports activities.",
      features: [
        {
          name: "Multi-Purpose Stadium",
          description:
            "400-meter track with football field and spectator seating",
          image: cyclesSSE,
        },
        {
          name: "Indoor Sports",
          description:
            "Basketball, volleyball, badminton courts with maple wood flooring",
          image: indoorGames,
        },
        {
          name: "Fitness Center",
          description: "Modern gym with cardio and strength training equipment",
          image: boysClub,
        },
        {
          name: "Cricket Ground",
          description: "Well-maintained pitch with practice nets",
          image: cricketSSE,
        },
      ],
      highlightStats: [
        { value: "15+", label: "Sports Options" },
        { value: "10+", label: "Annual Tournaments" },
        { value: "25+", label: "Coaching Staff" },
      ],
    },
    cafeteria: {
      title: "Dining & Cafeteria Facilities",
      description:
        "Our campus offers a variety of dining options that cater to diverse tastes and dietary requirements. The spacious, well-ventilated cafeterias and food courts serve nutritious, hygienic meals in pleasant surroundings.",
      features: [
        {
          name: "Main Cafeteria",
          description:
            "Spacious dining hall serving breakfast, lunch, and dinner with multiple cuisine options",
          image: girlsTrio,
        },
        {
          name: "Food Court",
          description:
            "Multiple food stalls offering variety of snacks, beverages, and quick meals",
          image: "https://alliance.edu.in/siteassets/images/A14A3236-2.jpg",
        },
        {
          name: "Coffee Shop",
          description:
            "Cozy café serving premium coffee, tea, and light refreshments",
          image: dinningWithFrds,
        },
        {
          name: "Student Lounge",
          description: "Casual dining area with microwave and vending machines",
          image: diningSSE,
        },
      ],
      highlightStats: [
        { value: "1500+", label: "Seating Capacity" },
        { value: "3", label: "Dining Locations" },
        { value: "12+", label: "Cuisine Options" },
      ],
    },
    events: {
      title: "Event & Auditorium Spaces",
      description:
        "Our campus houses world-class auditoriums and event spaces designed to host a wide range of activities from academic conferences to cultural performances. These spaces are equipped with advanced audio-visual systems and flexible seating arrangements.",
      features: [
        {
          name: "Main Auditorium",
          description:
            "850-seat acoustically optimized hall with professional stage lighting and sound system",
          image: seminarHallSSE,
        },
        {
          name: "Seminar Halls",
          description:
            "Multiple mid-sized venues for conferences, workshops, and presentations",
          image: seminarHallSSE,
        },
      
        {
          name: "Exhibition Hall",
          description:
            "Versatile space for art exhibitions, project displays, and tech showcases",
          image: exhibitionHallSSE,
        },
      ],
      highlightStats: [
        { value: "25+", label: "Annual Events" },
        { value: "1200+", label: "Total Seating Capacity" },
        { value: "10+", label: "Event Spaces" },
      ],
    },
  };

  // Setup scroll listener for parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get active facility content
  const activeFacility = facilityDetails[activeCategory];

  return (
    <div className="campus-facilities-page">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Parallax */}
      <section
        className="parallax-header d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${ssecampus})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundColor: 'var(--sse-brand)',
          backgroundBlendMode: 'multiply',
          minHeight: "80vh",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content text-white">
                <h5 className="text-uppercase fw-light mb-3 animate__animated animate__fadeIn">
                  Campus Experience
                </h5>
                <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  On-Campus Facilities
                </h1>
                <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-2s">
                  Discover the amenities and facilities that enhance student
                  life at Sanskriti School of Engineering
                </p>
                <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeIn animate__delay-3s">
                  <Button
                    variant="brand"
                    text="Explore Facilities"
                    href="#facilities"
                    icon="fas fa-chevron-down"
                  />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section id="facilities" className="py-5 bg-light">
        <div className="container py-5">
          <SectionHeader
            subtitle="Campus Life"
            title="Comprehensive Campus Facilities"
            description="Our campus provides all the amenities needed for a fulfilling and productive college experience"
            centered={true}
          />

          {/* Facility Navigation */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`btn rounded-pill px-4 py-2 mb-3 ${
                  activeCategory === category.id
                    ? "btn-brand text-white"
                    : "btn-outline-dark border-1"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.label}
              </button>
            ))}
          </div>

          {/* Facility Details */}
          <div className="mb-5">
            <h2 className="display-5 fw-bold mb-4 text-primary text-center">
              {activeFacility.title}
            </h2>
            <p className="lead text-center mb-5">
              {activeFacility.description}
            </p>

            {/* Stats Highlight */}
            <div className="row stats-row text-center mb-5 justify-content-center">
              {activeFacility.highlightStats.map((stat, index) => (
                <div className="col-md-3 col-6 mb-4" key={index}>
                  <div className="p-4 rounded bg-white shadow h-100">
                    <h3 className="display-5 fw-bold text-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="mb-0 text-secondary">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Facility Features */}
            <div className="row g-4">
              {activeFacility.features.map((feature, index) => (
                <div className="col-lg-6 mb-4" key={index}>
                  <div className="card border-0 shadow h-100 overflow-hidden">
                    <div className="row g-0">
                      <div className="col-md-5 facility-image-container">
                        <img
                          src={feature.image}
                          alt={feature.name}
                          className="facility-image"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className="feature-icon-wrapper me-3 bg-primary text-white rounded-circle p-3">
                              <i
                                className={
                                  categories.find(
                                    (c) => c.id === activeCategory
                                  ).icon
                                }
                              ></i>
                            </div>
                            <h4 className="card-title mb-0">{feature.name}</h4>
                          </div>
                          <p className="card-text">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map Section */}
      <section className="py-5">
        <div className="container py-5">
          <SectionHeader
            subtitle="Find Your Way"
            title="Campus Facilities Map"
            description="Navigate our campus and easily locate all facilities"
            centered={true}
          />

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="bg-light p-4 rounded shadow-sm text-center mb-4">
                <img
                  src={ssecampus}
                  alt="Campus Map"
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div className="map-overlay">
                  <p className="mt-3 mb-0 text-muted">
                    Interactive map would be implemented in production
                    environment
                  </p>
                </div>
              </div>

              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-3">
                        <i className="fas fa-map-signs text-primary me-2"></i>{" "}
                        Map Legend
                      </h5>
                      <div className="row g-2">
                        <div className="col-6">
                          <div className="d-flex align-items-center mb-2">
                            <div className="map-color academic me-2"></div>
                            <small>Academic Buildings</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-center mb-2">
                            <div className="map-color sports me-2"></div>
                            <small>Sports Facilities</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-center mb-2">
                            <div className="map-color dining me-2"></div>
                            <small>Dining Facilities</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-center mb-2">
                            <div className="map-color residence me-2"></div>
                            <small>Residence Halls</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-3">
                        <i className="fas fa-clock text-primary me-2"></i>{" "}
                        Facility Hours
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <small className="fw-bold">Sports Complex:</small>
                          <br />
                          <small>5:00 AM - 9:00 PM (Daily)</small>
                        </li>
                        <li className="mb-2">
                          <small className="fw-bold">Main Cafeteria:</small>
                          <br />
                          <small>7:00 AM - 9:30 PM (Daily)</small>
                        </li>
                        <li className="mb-0">
                          <small className="fw-bold">Health Center:</small>
                          <br />
                          <small>24/7 Emergency Services</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-3">
                        <i className="fas fa-question-circle text-primary me-2"></i>{" "}
                        Need Help?
                      </h5>
                      <p className="card-text small mb-3">
                        Have questions about our campus facilities or need
                        assistance locating a specific facility?
                      </p>
                      <Button
                        variant="outline-primary"
                        text="Contact Helpdesk"
                        href="/admissions/enquiry"
                        icon="fas fa-headset"
                        className="btn-sm w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-5">
        <div className="container py-5">
          <SectionHeader
            subtitle="Visual Tour"
            title="Experience Our Campus"
            description="Take a visual journey through our vibrant campus facilities"
            centered={true}
          />

          <div className="row g-4">
            <div className="col-md-8">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={ssecampus} 
                  alt="Campus Overview" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Campus Overview</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={principal} 
                  alt="Administrative Block" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Administration Wing</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={eceLab}
                  alt="ECE Laboratory" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Advanced ECE Lab</h4>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={campusCoridor} 
                  alt="Campus Corridor" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Modern Campus Architecture</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CampusFacilities;