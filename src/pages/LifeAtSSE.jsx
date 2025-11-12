import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import "../styles/LifeAtSSE.css";
import Contact from "../components/common/Contact";

// Import campus images - updated with more relevant images
import campusGreenary from "../assets/campusGreenary.jpg"; // Updated hero image
import campusRoad from "../assets/campusRoad.jpg";
import classroomStylish3 from "../assets/classroomStylish3.jpg";
import groupDiscussion from "../assets/groupDiscussion.jpg";
import computerLabFocused from "../assets/computerLabFocused.jpg";
import girlsClub from "../assets/girlsClub.jpg";
import girlsStudying from "../assets/girlsStudying.jpg";
import library from "../assets/library.jpg";
import girlWritingExam from "../assets/girlWritingExam.jpg";
import football from "../assets/football.jpg";
import basketball from "../assets/basketball.jpg";
import innovationClub from "../assets/innovationClub.jpg";
import culturalRampWalk from "../assets/culturalRampWalk.jpg";
import traditionalDance from "../assets/traditionalDance.jpg";
import hostelLife from "../assets/hostelLife.jpg";
import atalIncubationCentre from "../assets/atalIncubationCentre.jpg";
import girlInLibrary from "../assets/girlInLibrary.jpg";
import rangoli from "../assets/rangoli.jpg";
import microsoftBootcamp from "../assets/microsoftBootcamp.jpg";
import dinnerWithFrds from "../assets/dinnerWithFrds.jpg";
import collegeProjects from "../assets/collegeProjects.jpg";
import chemistryLab from "../assets/chemistryLab.jpg";
import mechanical from "../assets/mechanical.jpg";
import drawingSSE from "../assets/drawingSSE.jpg";
import foodPicsSSE2 from "../assets/foodPicsSSE2.jpg";
import foodPicsSSE from "../assets/foodPicsSSE.jpg";
import newyearPicsSSE from "../assets/newyearPicsSSE.jpg";
import newYearPicsSSE2 from "../assets/newYearPicsSSE2.jpg";
import dancingPicsSSE from "../assets/dancingPicsSSE.jpg";
import dancingPicsSSE2 from "../assets/dancingPicsSSE.jpg";
import farewellSSE from "../assets/farewellSSE.jpg";
import hostellerSSE from "../assets/hostellerSSE.jpg";
import hostellerSSE2 from "../assets/hostellerSSE2.jpg";
import hostelRooms from "../assets/hostelRooms.jpg";
import volleySSE from "../assets/volleySSE.jpg";
import cricketSSE from "../assets/cricketSSE.jpg";
import cyclesSSE from "../assets/cyclesSSE.jpg";
import girlsOnCycle from "../assets/girlsOnCycle.jpg";

const LifeAtSSE = () => {
  // For parallax effect
  const [offsetY, setOffsetY] = useState(0);

  // Get current location (for scroll handling)
  const location = useLocation();

  // Stats for campus life
  const campusStats = [
    { value: "50+", label: "Student Clubs" },
    { value: "25+", label: "Annual Events" },
    { value: "15", label: "Sports Teams" },
    { value: "8", label: "Cultural Festivals" },
  ];

  // Tabs for different aspects of campus life
  const [activeTab, setActiveTab] = useState("academics");
  // CHANGED: Gallery filter now defaults to "academics" instead of "all"
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("academics");

  const tabs = [
    { id: "academics", label: "Academic Life", icon: "fas fa-book" },
    { id: "facilities", label: "Campus Facilities", icon: "fas fa-building" },
    { id: "sports", label: "Sports & Fitness", icon: "fas fa-running" },
    { id: "clubs", label: "Clubs & Societies", icon: "fas fa-users" },
    { id: "events", label: "Events & Festivals", icon: "fas fa-calendar-alt" },
    { id: "hostel", label: "Hostel Life", icon: "fas fa-home" },
  ];

  // Content for each tab - updated with better images
  const tabContent = {
    academics: {
      title: "Academic Excellence",
      description:
        "At Sanskriti School of Engineering, academics go beyond the classroom. Our innovative teaching methodologies, industry-aligned curriculum, and hands-on learning approach ensure that students develop both theoretical knowledge and practical skills.",
      features: [
        {
          icon: "fas fa-chalkboard-teacher",
          title: "Expert Faculty",
          description:
            "Learn from experienced professors with industry and research backgrounds",
        },
        {
          icon: "fas fa-flask",
          title: "Advanced Labs",
          description:
            "Gain hands-on experience in state-of-the-art laboratories",
        },
        {
          icon: "fas fa-industry",
          title: "Industry Connect",
          description:
            "Regular workshops, seminars, and guest lectures by industry experts",
        },
        {
          icon: "fas fa-laptop-code",
          title: "Project-Based Learning",
          description:
            "Apply theoretical knowledge to solve real-world problems",
        },
      ],
      image: girlsStudying, // Updated: Students studying
    },
    facilities: {
      title: "World-Class Facilities",
      description:
        "Our campus is equipped with modern infrastructure and facilities designed to enhance the learning experience. From tech-enabled classrooms to recreational spaces, we provide everything students need for academic and personal growth.",
      features: [
        {
          icon: "fas fa-book",
          title: "Digital Library",
          description:
            "Access to thousands of e-books, journals, and research papers",
        },
        {
          icon: "fas fa-wifi",
          title: "Campus-wide Wi-Fi",
          description: "High-speed internet connectivity throughout the campus",
        },
        {
          icon: "fas fa-utensils",
          title: "Modern Cafeteria",
          description:
            "Nutritious meals and refreshments in a comfortable setting",
        },
        {
          icon: "fas fa-first-aid",
          title: "Medical Facilities",
          description:
            "On-campus medical center with qualified healthcare professionals",
        },
      ],
      image: library, // Updated: Library
    },
    sports: {
      title: "Sports & Fitness",
      description:
        "We believe in the holistic development of our students, and sports play a crucial role in building physical fitness, teamwork, and leadership skills. Our campus offers excellent sports facilities and coaching for various indoor and outdoor games.",
      features: [
        {
          icon: "fas fa-futbol",
          title: "Sports Complex",
          description:
            "Multi-purpose stadium for cricket, football, and athletics",
        },
        {
          icon: "fas fa-volleyball-ball",
          title: "Indoor Courts",
          description:
            "Facilities for badminton, basketball, volleyball, and table tennis",
        },
        {
          icon: "fas fa-dumbbell",
          title: "Fitness Center",
          description: "Well-equipped gym with professional trainers",
        },
        {
          icon: "fas fa-trophy",
          title: "Sports Events",
          description:
            "Annual sports meet and regular inter-college tournaments",
        },
      ],
      image: football, // Updated: Football field
    },
    clubs: {
      title: "Clubs & Societies",
      description:
        "Student clubs and societies at SSE provide a platform for exploring interests, developing skills, and building lasting friendships. With over 50 active clubs spanning technology, arts, culture, and social service, there's something for everyone.",
      features: [
        {
          icon: "fas fa-robot",
          title: "Technical Clubs",
          description:
            "Robotics, coding, AI/ML, and other technology-focused groups",
        },
        {
          icon: "fas fa-paint-brush",
          title: "Cultural Clubs",
          description: "Dance, music, drama, and fine arts societies",
        },
        {
          icon: "fas fa-hand-holding-heart",
          title: "Social Service",
          description: "NSS, community outreach, and environmental initiatives",
        },
        {
          icon: "fas fa-globe",
          title: "Language & Literary",
          description: "Debate, public speaking, and multi-language clubs",
        },
      ],
      image: innovationClub, // Updated: Innovation club activities
    },
    events: {
      title: "Events & Festivals",
      description:
        "The SSE calendar is packed with exciting events and festivals throughout the academic year. From technical symposiums to cultural extravaganzas, these events provide opportunities for students to showcase their talents and organizational skills.",
      features: [
        {
          icon: "fas fa-microchip",
          title: "TechnoEdge",
          description:
            "Annual technical symposium featuring workshops, competitions, and exhibitions",
        },
        {
          icon: "fas fa-music",
          title: "Sanskriti Utsav",
          description:
            "Cultural festival celebrating diverse art forms and traditions",
        },
        {
          icon: "fas fa-lightbulb",
          title: "Innovation Summit",
          description: "Platform for startups, entrepreneurs, and innovators",
        },
        {
          icon: "fas fa-users",
          title: "Alumni Meet",
          description:
            "Annual gathering connecting current students with successful alumni",
        },
      ],
      image: culturalRampWalk, // Updated: Cultural event (fashion show)
    },
    hostel: {
      title: "Hostel Life",
      description:
        "Our on-campus hostels provide a safe, comfortable, and conducive environment for students. With modern amenities, nutritious meals, and engaging community activities, hostel life at SSE becomes a memorable part of the college experience.",
      features: [
        {
          icon: "fas fa-bed",
          title: "Comfortable Accommodation",
          description: "Well-furnished rooms with essential amenities",
        },
        {
          icon: "fas fa-utensils",
          title: "Quality Dining",
          description: "Hygienic mess facilities serving balanced meals",
        },
        {
          icon: "fas fa-couch",
          title: "Recreation Areas",
          description: "Common rooms with indoor games and entertainment",
        },
        {
          icon: "fas fa-shield-alt",
          title: "Safety & Security",
          description:
            "24/7 security, CCTV surveillance, and medical assistance",
        },
      ],
      image: hostelLife, // Updated: Hostel life
    },
  };

  // Student testimonials - Icons of the Year
  const testimonials = [
    {
      id: 1,
      name: "Bristi Ghosh",
      program: "Selected in RISE - RIT Program Impact",
      image: girlInLibrary, // Updated: Using actual asset instead of unsplash
      quote:
        "Being part of the RIT program changed the way I approach real-world problems — it sharpened my skills, broadened my perspective, and gave me the confidence to innovate with purpose.",
    },
    {
      id: 2,
      name: "Tanya Gupta",
      program: "Selected in Amazon",
      image: groupDiscussion, // Updated: Using actual asset instead of unsplash
      quote:
        "An outstanding achievement reflecting her excellence and the quality of our placement support. The rigorous training and mentorship at SSE prepared me for this incredible opportunity.",
    },
    {
      id: 3,
      name: "P. Srivalli",
      program: "Selected in SAP and 13 more Companies",
      image: girlsClub, // Updated: Using actual asset instead of unsplash
      quote:
        "The distinguished candidate from Rayalaseema chosen by SAP Labs. SSE's comprehensive curriculum and industry exposure opened multiple doors for my career growth.",
    },
    {
      id: 4,
      name: "T. Sai Geetha",
      program: "Selected in Continental and 7 more Companies",
      image: girlInLibrary, // You can cycle through your available images
      quote:
        "The only student chosen by Continental AG from over 1,600 applicants, demonstrating exceptional merit and distinction. SSE's training excellence made this achievement possible.",
    },
  ];

  // Gallery images with updated local assets
  const galleryImages = [
    {
      id: 1,
      src: classroomStylish3,
      category: "academics",
      caption: "Interactive Learning Spaces",
    },
    {
      id: 2,
      src: library,
      category: "facilities",
      caption: "State-of-the-art Library",
    },
    {
      id: 3,
      src: football,
      category: "sports",
      caption: "Football Ground",
    },
    {
      id: 4,
      src: computerLabFocused,
      category: "academics",
      caption: "Advanced Computer Lab",
    },
    {
      id: 5,
      src: microsoftBootcamp,
      category: "events",
      caption: "Microsoft Bootcamp Event",
    },
    {
      id: 6,
      src: chemistryLab,
      category: "facilities",
      caption: "Chemistry Laboratory",
    },
    {
      id: 7,
      src: collegeProjects,
      category: "academics",
      caption: "Student Projects",
    },
    {
      id: 8,
      src: dinnerWithFrds,
      category: "hostel",
      caption: "Dining with Friends",
    },
    {
      id: 9,
      src: innovationClub,
      category: "clubs",
      caption: "Innovation Club Activities",
    },
    {
      id: 10,
      src: rangoli,
      category: "events",
      caption: "Cultural Celebrations",
    },
    {
      id: 11,
      src: basketball,
      category: "sports",
      caption: "Basketball Court",
    },
    {
      id: 12,
      src: traditionalDance,
      category: "events",
      caption: "Traditional Dance Performance",
    },
    {
      id: 13,
      src: drawingSSE,
      category: "clubs",
      caption: "Drawing Club Activities",
    },
    {
      id: 14,
      src: foodPicsSSE,
      category: "clubs",
      caption: "Food Club Activities",
    },
    {
      id: 15,
      src: foodPicsSSE2,
      category: "clubs",
      caption: "Food Club Activities",
    },
    {
      id: 16,
      src: culturalRampWalk,
      category: "clubs",
      caption: "Cultural Ramp Walk",
    },
    {
      id: 17,
      src: newyearPicsSSE,
      category: "events",
      caption: " Freshers Day Performance",
    },
    {
      id: 18,
      src: newYearPicsSSE2,
      category: "events",
      caption: " New Year Performance",
    },
    
    {
      id: 20,
      src: dancingPicsSSE2,
      category: "events",
      caption: " Dancing Performance",
    },
    {
      id: 21,
      src: farewellSSE,
      category: "events",
      caption: "Farewell Celebration",
    },
    {
      id: 22,
      src: hostellerSSE,
      category: "hostel",
      caption: "Hostel Experience",
    },
    {
      id: 23,
      src: hostellerSSE2,
      category: "hostel",
      caption: "Hostel Experience",
    },
    {
      id: 24,
      src: hostelRooms,
      category: "hostel",
      caption: "Hostel Experience",
    },
    {
      id: 25,
      src: volleySSE,
      category: "sports",
      caption: "Volleyball Court",
    },
    {
      id: 26,
      src: cricketSSE,
      category: "sports",
      caption: "Cricket",
    },
    {
      id: 27,
      src: cyclesSSE,
      category: "sports",
      caption: "Fitness Cycles",
    },
    {
      id: 28,
      src: girlsOnCycle,
      category: "sports",
      caption: "Girls fitness",
    },
  ];

  // Active tab content
  const activeTabContent = tabContent[activeTab];

  // CHANGED: Now filters by activeGalleryFilter instead of showing all by default
  const filteredGallery = galleryImages.filter((img) => img.category === activeGalleryFilter);

  // Set up scroll event listener for parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section when hash changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Find the element with the hash ID
      const element = document.getElementById(location.hash.substring(1));
      // If the element exists, scroll to it
      if (element) {
        // Add a small delay to ensure DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Hero Parallax Section - Updated with campusGreenary */}
      <section
        className="parallax-header"
        style={{
          backgroundImage: `url(${campusGreenary})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h5 className="text-uppercase fw-light mb-3 animate__animated animate__fadeIn">
                Experience the Vibrant
              </h5>
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Life at Sanskriti School of Engineering
              </h1>
              <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-2s">
                Discover a perfect blend of academic excellence, cultural
                diversity, and holistic development
              </p>
              <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeIn animate__delay-3s">
                <button
                  className="btn btn-brand text-white d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-pill"
                  onClick={() => scrollToSection("campus-life")}
                >
                  <span>Explore Campus</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Introduction - Updated images */}
      <section id="campus-life" className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h5 className="text-primary text-uppercase fw-semibold mb-2">
                Campus Life
              </h5>
              <h2 className="display-5 fw-bold mb-4">
                A Thriving Community of Future Leaders
              </h2>
              <p className="mb-4">
                At Sanskriti School of Engineering, we believe that education
                extends beyond the classroom. Our vibrant campus life is
                designed to nurture holistic development, foster creativity, and
                build lifelong relationships.
              </p>
              <p className="mb-5">
                From cutting-edge academic facilities to exciting cultural
                events, from competitive sports to innovative clubs, SSE offers
                a dynamic environment where students can explore their passions,
                develop new skills, and create unforgettable memories.
              </p>
              <div className="row text-center stats-container">
                {campusStats.map((stat, index) => (
                  <div className="col-6 col-md-3 mb-4" key={index}>
                    <div className="bg-light rounded p-4 h-100 shadow-sm">
                      <h3 className="display-5 fw-bold text-primary mb-2">
                        {stat.value}
                      </h3>
                      <p className="mb-0 text-secondary">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="campus-gallery-grid">
                <div className="row g-3">
                  <div className="col-6">
                    <img
                      src={classroomStylish3}
                      alt="Modern Classroom"
                      className="img-fluid rounded shadow"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={groupDiscussion}
                      alt="Group Discussion"
                      className="img-fluid rounded shadow"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={computerLabFocused}
                      alt="Computer Lab"
                      className="img-fluid rounded shadow"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={girlsClub}
                      alt="Student Clubs"
                      className="img-fluid rounded shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Aspects Section - Fixed Parallax - Updated with campusRoad */}
      <section
        className="py-5 text-white"
        style={{
          backgroundColor: "var(--sse-brand)",
          backgroundImage: `url(${campusRoad})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "multiply",
          padding: "100px 0",
        }}
      >
        <div className="container py-5 text-white">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-4">
                Explore Every Dimension of Campus Life
              </h2>
              <p className="lead">
                From state-of-the-art academic facilities to vibrant cultural
                activities, SSE offers a rich and diverse campus experience
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-2 aspect-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`btn rounded-pill px-4 py-2 mb-3 ${
                  activeTab === tab.id
                    ? "btn-brand text-white"
                    : "btn-outline-light border-2 text-white hover-effect"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`${tab.icon} me-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content Section - Images updated for each tab */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h5 className="text-primary text-uppercase fw-semibold mb-2">
                {activeTabContent.title}
              </h5>
              <h2 className="display-5 fw-bold mb-4">
                Discover {activeTabContent.title}
              </h2>
              <p className="mb-5">{activeTabContent.description}</p>

              <div className="row g-4">
                {activeTabContent.features.map((feature, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="d-flex p-3 h-100 bg-light rounded shadow-sm">
                      <div className="feature-icon-wrapper me-3 text-white rounded-circle p-3">
                        <i className={feature.icon}></i>
                      </div>
                      <div>
                        <h4 className="h5 fw-bold mb-2">{feature.title}</h4>
                        <p className="mb-0 text-secondary small">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded overflow-hidden shadow position-relative">
                <img
                  src={activeTabContent.image}
                  alt={activeTabContent.title}
                  className="img-fluid w-100"
                />
                <div
                  className="position-absolute start-0 bottom-0 w-100 text-white p-3"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <h3 className="h4 mb-0">{activeTabContent.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials - Updated to use actual assets */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <SectionHeader
            subtitle="Student Stories"
            title="What Our Students Say"
            description="Hear from our students about their experiences at Sanskriti School of Engineering"
            centered={true}
          />

          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div className="col-lg-3 col-md-6 mb-4" key={testimonial.id}>
                <div className="card h-100 shadow-sm border-0 testimonial-card">
                  <div className="card-body p-4 position-relative">
                    <div className="mb-4 text-primary opacity-25 display-4 position-absolute top-0 end-0 p-3">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <p className="card-text mb-4">{testimonial.quote}</p>
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle overflow-hidden me-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center top",
                          }}
                        />
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                        <p className="mb-0 text-muted small">
                          {testimonial.program}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Fixed Parallax - Updated with atalIncubationCentre */}
      <section
        className="py-5 text-white"
        style={{
          backgroundColor: "var(--sse-brand-dark)",
          backgroundImage: `url(${atalIncubationCentre})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "multiply",
          padding: "100px 0",
        }}
      >
        <div className="container py-5 text-white">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-4">Campus Life Gallery</h2>
              <p className="lead">
                Visual glimpses into the vibrant and dynamic life at Sanskriti
                School of Engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          {/* CHANGED: Removed "All" button and made academics the default */}
          <div className="mb-5 d-flex justify-content-center flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`btn rounded-pill px-4 py-2 mb-2 ${
                  activeGalleryFilter === tab.id
                    ? "btn-brand text-white"
                    : "btn-outline-dark border-1"
                }`}
                onClick={() => setActiveGalleryFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filteredGallery.map((image) => (
              <div className="col-md-6 col-lg-4 mb-4" key={image.id}>
                <div className="card h-100 shadow border-0 overflow-hidden gallery-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 p-3 text-white"
                      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    >
                      <h5 className="mb-0">{image.caption}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LifeAtSSE;