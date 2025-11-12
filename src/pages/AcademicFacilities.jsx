import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

// Import local images
import lab1 from "../assets/lab1.jpg";
import mechMachine from "../assets/mechMachine.jpg";
import hostelGirls from "../assets/hostelGirls.jpg";
import girlsCorridor1 from "../assets/girlsCorridor1.jpg";
import girlsCorridor2 from "../assets/girlsCorridor2.jpg";
import computerLabFocused from "../assets/computerLabFocused.jpg";
import campusCoridor from "../assets/campusCoridor.jpg";
import computerlab from "../assets/computerlab.jpg";
import ssecampus from "../assets/ssecampus.jpg";
import classrooms from "../assets/classrooms.jpg";
import library from "../assets/library.jpg";
import chemistryLab from "../assets/chemistryLab.jpg";
import lectureHall from "../assets/LectureHall.jpg";
import studentCommonArea from "../assets/studentCommonArea.jpg";
import cadLab from "../assets/cadLab.jpg";
import labMech from "../assets/labmech.jpg";
import CentralLibraryUpdate from "../assets/CentralLibraryUpdate.jpg";
import LibraryReadingSSE from "../assets/LibraryReadingSSE.jpg";
import physicsLab from "../assets/physicsLab.jpg";

const AcademicFacilities = () => {
  // For parallax effect (reusing from LifeAtSSE)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  // Active facility category
  const [activeCategory, setActiveCategory] = useState("classrooms");

  // Facility categories
  const categories = [
    { id: "classrooms", label: "Classrooms", icon: "fas fa-chalkboard" },
    { id: "laboratories", label: "Laboratories", icon: "fas fa-flask" },
    { id: "library", label: "Library", icon: "fas fa-book" },
    { id: "computer-labs", label: "Computer Labs", icon: "fas fa-desktop" },
    { id: "research-centers", label: "Research Centers", icon: "fas fa-microscope" }
  ];

  // Facility details for each category
  const facilityDetails = {
    classrooms: {
      title: "Modern Classrooms",
      description: "Our spacious, air-conditioned classrooms provide an inspiring environment conducive to learning and academic excellence. Each classroom is equipped with advanced audio-visual technology, interactive smart boards, and ergonomic furniture.",
      features: [
        { icon: "fas fa-tv", title: "Smart Classrooms", description: "Interactive digital boards with touchscreen capabilities" },
        { icon: "fas fa-wifi", title: "High-Speed Internet", description: "Wi-Fi enabled spaces for seamless digital learning" },
        { icon: "fas fa-chair", title: "Ergonomic Design", description: "Comfortable seating arrangement for optimal learning experience" },
        { icon: "fas fa-volume-up", title: "Advanced Acoustics", description: "Sound-optimized rooms for clear communication" }
      ],
      images: [
        {
          src: classrooms,
          alt: "Modern Smart Classroom"
        },
        {
          src: lectureHall,
          alt: "Lecture Hall"
        }
      ],
      stats: [
        { value: "60+", label: "Classrooms" },
        { value: "100%", label: "Smart Enabled" },
        { value: "40-60", label: "Seating Capacity" }
      ]
    },
    laboratories: {
      title: "State-of-the-Art Laboratories",
      description: "Our engineering laboratories are equipped with the latest equipment and technology that provide students with hands-on experience in their respective fields. Each department has dedicated labs that cater to specific curriculum requirements and research activities.",
      features: [
        { icon: "fas fa-tools", title: "Advanced Equipment", description: "Industry-standard tools and machinery" },
        { icon: "fas fa-user-tie", title: "Lab Assistants", description: "Qualified staff to guide students during experiments" },
        { icon: "fas fa-shield-alt", title: "Safety Protocols", description: "Strict safety measures and guidelines" },
        { icon: "fas fa-industry", title: "Industry Collaboration", description: "Labs developed in partnership with leading companies" }
      ],
      images: [
        {
          src: lab1,
          alt: "Engineering Lab"
        },
        {
          src: physicsLab,
          alt: "Physics Lab"
        }
      ],
      stats: [
        { value: "75+", label: "Specialized Labs" },
        { value: "₹25Cr+", label: "Equipment Value" },
        { value: "24×7", label: "Project Labs Access" }
      ]
    },
    library: {
      title: "Comprehensive Library",
      description: "Our central library is a knowledge hub with an extensive collection of books, journals, digital resources, and databases. The spacious reading areas, discussion rooms, and digital sections provide an ideal environment for academic research and study.",
      features: [
        { icon: "fas fa-book", title: "Vast Collection", description: "Over 16,000+ books covering all engineering disciplines" },
        { icon: "fas fa-newspaper", title: "Journals & Magazines", description: "Subscriptions to leading technical and scientific publications" },
        { icon: "fas fa-database", title: "Digital Repository", description: "Access to e-books, journals, and research databases" },
        { icon: "fas fa-users", title: "Study Areas", description: "Individual carrels and group discussion rooms" }
      ],
      images: [
        {
          src: CentralLibraryUpdate,
          alt: "Central Library"
        },
        {
          src: LibraryReadingSSE,
          alt: "Reading Area"
        }
      ],
      stats: [
        { value: "16,000+", label: "Books" },
        { value: "12000+", label: "Journal Subscriptions" },
        { value: "180+", label: "Seating Capacity" }
      ]
    },
    "computer-labs": {
      title: "Advanced Computer Labs",
      description: "Our computer laboratories feature high-performance workstations equipped with the latest hardware and software. These labs support various programming languages, simulation tools, and specialized software required for different engineering courses.",
      features: [
        { icon: "fas fa-laptop", title: "High-End Systems", description: "Latest configuration computers with dual monitors" },
        { icon: "fas fa-code", title: "Software Resources", description: "Licensed software for programming, design, and simulation" },
        { icon: "fas fa-server", title: "High-Speed Network", description: "Gigabit connectivity with centralized server infrastructure" },
        { icon: "fas fa-plug", title: "Uninterrupted Power", description: "Backup power supply for continuous operation" }
      ],
      images: [
        {
          src: computerlab,
          alt: "Computer Lab"
        },
        {
          src: computerLabFocused,
          alt: "Computer Workstation"
        }
      ],
      stats: [
        { value: "15+", label: "Computer Labs" },
        { value: "500+", label: "Workstations" },
        { value: "100+", label: "Software Packages" }
      ]
    },
    "research-centers": {
      title: "Research Centers of Excellence",
      description: "Our dedicated research centers provide a platform for faculty and students to pursue advanced research in emerging areas of technology. These centers are equipped with specialized tools and are often supported by government grants and industry partnerships.",
      features: [
        { icon: "fas fa-lightbulb", title: "Innovation Hubs", description: "Dedicated spaces for developing new ideas and prototypes" },
        { icon: "fas fa-handshake", title: "Industry Partnerships", description: "Collaborative research projects with leading companies" },
        { icon: "fas fa-graduation-cap", title: "PhD Programs", description: "Support for doctoral research across disciplines" },
        { icon: "fas fa-file-alt", title: "Publications", description: "Assistance with publishing research in reputed journals" }
      ],
      images: [
        {
          src: mechMachine,
          alt: "Mechanical Research Lab"
        },
        {
          src: lab1,
          alt: "Innovation Lab"
        }
      ],
      stats: [
        { value: "10", label: "Research Centers" },
        { value: "50+", label: "Ongoing Projects" },
        { value: "₹5Cr+", label: "Annual Funding" }
      ]
    }
  };

  // Department-specific labs (for the laboratories section detail)
  const departmentLabs = [
    {
      department: "Computer Science & Engineering",
      labs: ["Programming Lab", "Database Systems Lab", "Computer Networks Lab", "AI & ML Lab", "IoT Lab", "Web Technologies Lab"]
    },
    {
      department: "Electronics & Communication",
      labs: ["Basic Electronics Lab", "Digital Electronics Lab", "Communication Systems Lab", "VLSI Design Lab", "Microprocessor Lab", "Signal Processing Lab"]
    },
    {
      department: "Mechanical Engineering",
      labs: ["Thermodynamics Lab", "Fluid Mechanics Lab", "Strength of Materials Lab", "Manufacturing Technology Lab", "CAD/CAM Lab", "Robotics Lab"]
    },
    {
      department: "Electrical Engineering",
      labs: ["Electrical Machines Lab", "Power Systems Lab", "Control Systems Lab", "Power Electronics Lab", "Electrical Measurements Lab", "High Voltage Lab"]
    }
  ];

  // Setup scroll listener for parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get current facility content
  const activeFacility = facilityDetails[activeCategory];

  return (
    <div className="academic-facilities-page">
      {/* Navigation */}
      <Navbar />

      {/* Hero Parallax Section */}
      <section 
        className="parallax-header" 
        style={{ 
          backgroundImage: `url(${ssecampus})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundColor: 'var(--sse-brand)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h5 className="text-uppercase fw-light mb-3 animate__animated animate__fadeIn">World-Class Infrastructure</h5>
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">Academic Facilities</h1>
              <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-2s">
                Explore our state-of-the-art facilities designed to provide an exceptional learning environment for future engineers
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
      </section>

      {/* Facility Overview */}
      <section id="facilities" className="py-5">
        <div className="container py-5">
          <SectionHeader
            subtitle="Learning Environment"
            title="Our Academic Infrastructure"
            description="Sanskriti School of Engineering provides world-class facilities to support teaching, learning, and research activities"
            centered={true}
          />

          {/* Facility Navigation Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn rounded-pill px-4 py-2 mb-3 ${
                  activeCategory === category.id 
                    ? 'btn-brand text-white' 
                    : 'btn-outline-dark border-1'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.label}
              </button>
            ))}
          </div>

          {/* Facility Content */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4 text-primary">{activeFacility.title}</h2>
              <p className="mb-4">{activeFacility.description}</p>
              
              <div className="row g-4 mb-4">
                {activeFacility.features.map((feature, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <div className="d-flex p-3 h-100 bg-light rounded shadow-sm">
                      <div className="feature-icon-wrapper me-3 bg-primary text-white rounded-circle p-3">
                        <i className={feature.icon}></i>
                      </div>
                      <div>
                        <h4 className="h5 fw-bold mb-2">{feature.title}</h4>
                        <p className="mb-0 text-secondary small">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row stats-row text-center mb-4">
                {activeFacility.stats.map((stat, index) => (
                  <div className="col-4" key={index}>
                    <div className="p-3 rounded bg-light shadow-sm">
                      <h3 className="display-6 fw-bold text-primary mb-1">{stat.value}</h3>
                      <p className="mb-0 small text-secondary">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="row g-3">
                {activeFacility.images.map((image, index) => (
                  <div className={`col-${index === 0 ? '12' : '6'}`} key={index}>
                    <div className="position-relative rounded overflow-hidden shadow" style={{ height: index === 0 ? '300px' : '200px' }}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-100 h-100" 
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h5 className="m-0">{image.alt}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Department-specific labs section (only for Laboratories) */}
          {activeCategory === "laboratories" && (
            <div className="department-labs mt-5 pt-3">
              <div className="row">
                <div className="col-12 mb-4">
                  <h3 className="h3 fw-bold text-center mb-4">Department-Specific Laboratories</h3>
                </div>
                
                {departmentLabs.map((dept, index) => (
                  <div className="col-md-6 col-lg-3 mb-4" key={index}>
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body">
                        <h4 className="card-title h5 fw-bold text-primary mb-3">{dept.department}</h4>
                        <ul className="list-group list-group-flush">
                          {dept.labs.map((lab, idx) => (
                            <li className="list-group-item px-0" key={idx}>
                              <i className="fas fa-flask text-primary me-2"></i> {lab}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Library resources section (only for Library) */}
          {activeCategory === "library" && (
            <div className="library-resources mt-5 pt-3">
              <div className="row">
                <div className="col-12 mb-4">
                  <h3 className="h3 fw-bold text-center mb-4">Library Resources</h3>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <h4 className="card-title h5 fw-bold text-primary mb-3">Print Resources</h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-book text-primary me-2"></i> Textbooks</span>
                          <span className="badge bg-primary rounded-pill">25,000+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-book-open text-primary me-2"></i> Reference Books</span>
                          <span className="badge bg-primary rounded-pill">15,000+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-newspaper text-primary me-2"></i> Print Journals</span>
                          <span className="badge bg-primary rounded-pill">200+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-bookmark text-primary me-2"></i> Magazine Subscriptions</span>
                          <span className="badge bg-primary rounded-pill">50+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-graduation-cap text-primary me-2"></i> Thesis & Dissertations</span>
                          <span className="badge bg-primary rounded-pill">1,000+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <h4 className="card-title h5 fw-bold text-primary mb-3">Digital Resources</h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-laptop text-primary me-2"></i> E-books</span>
                          <span className="badge bg-primary rounded-pill">10,000+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-globe text-primary me-2"></i> Online Journals</span>
                          <span className="badge bg-primary rounded-pill">300+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-database text-primary me-2"></i> Digital Databases</span>
                          <span className="badge bg-primary rounded-pill">12</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-video text-primary me-2"></i> Educational Videos</span>
                          <span className="badge bg-primary rounded-pill">500+</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span><i className="fas fa-file-pdf text-primary me-2"></i> Technical Reports</span>
                          <span className="badge bg-primary rounded-pill">2,000+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <SectionHeader
            subtitle="Visual Tour"
            title="Academic Facilities Gallery"
            description="Take a visual journey through our state-of-the-art academic infrastructure"
            centered={true}
          />

          <div className="row g-4">
            <div className="col-md-8">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={ssecampus} 
                  alt="Engineering Building" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Main Academic Building</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={LibraryReadingSSE} 
                  alt="Library Reading Area" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Digital Library</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={labMech} 
                  alt="Engineering Lab" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Advanced Research Lab</h4>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="position-relative rounded overflow-hidden shadow-sm h-100">
                <img 
                  src={computerlab} 
                  alt="Computer Lab" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <h4>Computer Science Lab</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Corridor Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4 text-primary">Campus Infrastructure</h2>
              <p className="mb-4">
                Our campus is designed to provide a comprehensive learning environment with modern architecture and thoughtfully designed spaces. The corridors and common areas promote collaboration and interaction among students and faculty.
              </p>
              <p className="mb-4">
                The campus layout ensures easy access to all academic facilities while providing ample space for recreation and extracurricular activities. Our infrastructure reflects our commitment to providing a holistic educational experience.
              </p>
              
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-12">
                  <div className="position-relative rounded overflow-hidden shadow">
                    <img 
                      src={campusCoridor} 
                      alt="Campus Corridor" 
                      className="w-100" 
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                      <h4 className="m-0">Modern Campus Architecture</h4>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative rounded overflow-hidden shadow">
                    <img 
                      src={cadLab} 
                      alt="Academic Block" 
                      className="w-100" 
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                      <h5 className="m-0">Cad Labx</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative rounded overflow-hidden shadow">
                    <img 
                      src={studentCommonArea} 
                      alt="Student Area" 
                      className="w-100" 
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="position-absolute bottom-0 w-100 p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                      <h5 className="m-0">Student Common Area</h5>
                    </div>
                  </div>
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

export default AcademicFacilities;