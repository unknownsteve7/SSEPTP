import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";

// Import the images from assets folder
import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab4 from "../assets/lab4.jpg";
import digitalLab from "../assets/digitalLab.jpg";
import eceLab from "../assets/eceLab.jpg";
import eceLab2 from "../assets/eceLab2.jpg";
import computerlab from "../assets/computerlab.jpg";
import computerLabFocused from "../assets/computerLabFocused.jpg";
import collegeProjects from "../assets/collegeProjects.jpg";
import collegeProjects2 from "../assets/collegeProjects2.jpg";
import chemistryLab from "../assets/chemistryLab.jpg";
import mechanical from "../assets/mechanical.jpg";
import mechMachine from "../assets/mechMachine.jpg";
import ssecampus from "../assets/ssecampus.jpg";

/**
 * Laboratory page component - Using all available lab images
 * Showcases the laboratory facilities at Sanskriti School of Engineering
 */
const Laboratory = () => {
  // For parallax effect (reusing from other components)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  
  // State for active department labs
  const [activeDepartment, setActiveDepartment] = useState("cse");
  
  // Setup scroll listener for parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Departments with laboratories
  const departments = [
    { id: "cse", name: "Computer Science & Engineering" },
    { id: "ece", name: "Electronics & Communication" },
    { id: "me", name: "Mechanical Engineering" },
    { id: "ce", name: "Civil Engineering" },
    { id: "eee", name: "Electrical & Electronics" }
  ];

  // Laboratory statistics
  const labStats = [
    { value: "75+", label: "Modern Labs" },
    { value: "₹80Cr+", label: "Equipment Value" },
    { value: "50+", label: "Lab Assistants" },
    { value: "24×7", label: "Research Labs" }
  ];

  // Department labs data with appropriate images
  const departmentLabs = {
    cse: [
      {
        name: "Programming Laboratory",
        description: "Equipped with high-performance systems for software development and programming practice across multiple languages and platforms.",
        equipment: [
          "120 high-performance workstations with dual monitors",
          "Development environments for all major programming languages",
          "Version control systems and collaboration tools",
          "Specialized software for algorithm visualization"
        ],
        image: computerlab
      },
      {
        name: "Database Systems Laboratory",
        description: "Dedicated facility for database design, implementation, and administration with industry-standard database management systems.",
        equipment: [
          "Enterprise database servers (Oracle, SQL Server, MongoDB)",
          "Database design and modeling tools",
          "Data visualization software",
          "Big data processing frameworks"
        ],
        image: computerLabFocused
      },
      {
        name: "Computer Networks Laboratory",
        description: "State-of-the-art networking lab for practical implementation of network protocols, security, and administration.",
        equipment: [
          "Cisco networking equipment (routers, switches, firewalls)",
          "Network simulation software",
          "Protocol analyzer tools",
          "Network security testing environment"
        ],
        image: digitalLab
      },
      {
        name: "Artificial Intelligence & Machine Learning Lab",
        description: "Advanced computing facility for AI research, machine learning model training, and data science applications.",
        equipment: [
          "GPU-accelerated computing workstations",
          "AI and ML frameworks and libraries",
          "Robotics integration platforms",
          "Large-scale data processing tools"
        ],
        image: lab4
      }
    ],
    ece: [
      {
        name: "Basic Electronics Laboratory",
        description: "Foundational lab for electronic components, circuit design, and basic measurements essential for all electronics engineering students.",
        equipment: [
          "Digital oscilloscopes and multimeters",
          "Circuit design and breadboarding stations",
          "Component testing equipment",
          "Power supply units and function generators"
        ],
        image: eceLab
      },
      {
        name: "Digital Electronics Laboratory",
        description: "Specialized facility for digital circuit design, microprocessors, and digital system implementation and testing.",
        equipment: [
          "FPGA and CPLD development boards",
          "Logic analyzers and pattern generators",
          "Microprocessor and microcontroller kits",
          "Hardware description language tools"
        ],
        image: eceLab2
      },
      {
        name: "Communication Systems Laboratory",
        description: "Advanced lab for analog and digital communication systems, signal processing, and telecommunications engineering.",
        equipment: [
          "Spectrum analyzers and network analyzers",
          "Digital signal processing hardware",
          "Telecommunication training systems",
          "Antenna design and testing equipment"
        ],
        image: collegeProjects
      },
      {
        name: "VLSI Design Laboratory",
        description: "Cutting-edge facility for Very Large Scale Integration design, simulation, and implementation of integrated circuits.",
        equipment: [
          "EDA tools for IC design (Cadence, Synopsys)",
          "ASIC and SoC development platforms",
          "Physical verification tools",
          "Semiconductor device simulation software"
        ],
        image: lab1
      }
    ],
    me: [
      {
        name: "Thermodynamics Laboratory",
        description: "Comprehensive lab for experimental study of thermal systems, heat transfer, and energy conversion processes.",
        equipment: [
          "Heat exchanger testing units",
          "Refrigeration and air conditioning test rigs",
          "Steam power plant simulator",
          "Thermal conductivity measurement apparatus"
        ],
        image: mechanical
      },
      {
        name: "Fluid Mechanics Laboratory",
        description: "State-of-the-art facility for studying fluid behavior, hydraulics, and fluid power systems with experimental setups.",
        equipment: [
          "Flow measurement and visualization equipment",
          "Hydraulic bench with various attachments",
          "Hydro turbine and pump test rigs",
          "Wind tunnel for aerodynamic studies"
        ],
        image: mechMachine
      },
      {
        name: "Manufacturing Technology Laboratory",
        description: "Comprehensive facility for conventional and advanced manufacturing processes, metrology, and quality control.",
        equipment: [
          "CNC machines (lathe, milling, and machining center)",
          "3D printers and additive manufacturing systems",
          "Welding and joining equipment",
          "Precision measurement instruments"
        ],
        image: collegeProjects2
      },
      {
        name: "Robotics and Automation Laboratory",
        description: "Advanced facility for industrial robotics, automation systems, and mechatronics applications.",
        equipment: [
          "Industrial robot arms with various end effectors",
          "PLC and automation control systems",
          "Mechatronics development platforms",
          "IoT and Industry 4.0 demonstration units"
        ],
        image: lab2
      }
    ],
    ce: [
      {
        name: "Structural Engineering Laboratory",
        description: "Advanced facility for structural analysis, testing of construction materials, and structural design verification.",
        equipment: [
          "Universal testing machine",
          "Concrete and cement testing equipment",
          "Structural models and loading frames",
          "Strain measurement systems"
        ],
        image: lab2
      },
      {
        name: "Geotechnical Engineering Laboratory",
        description: "Specialized lab for soil testing, foundation engineering, and ground improvement techniques.",
        equipment: [
          "Soil classification and index property testing equipment",
          "Direct shear and triaxial testing apparatus",
          "Consolidation test setup",
          "Field testing simulators"
        ],
        image: lab1
      },
      {
        name: "Transportation Engineering Laboratory",
        description: "Comprehensive facility for highway materials testing, traffic engineering, and transportation system analysis.",
        equipment: [
          "Bitumen and asphalt testing equipment",
          "Traffic flow simulation software",
          "Pavement design and analysis tools",
          "Transportation survey instruments"
        ],
        image: collegeProjects2
      },
      {
        name: "Environmental Engineering Laboratory",
        description: "State-of-the-art lab for water quality analysis, air pollution monitoring, and environmental impact assessment.",
        equipment: [
          "Water and wastewater testing apparatus",
          "Air quality monitoring equipment",
          "Solid waste characterization tools",
          "Environmental simulation software"
        ],
        image: chemistryLab
      }
    ],
    eee: [
      {
        name: "Electrical Machines Laboratory",
        description: "Comprehensive facility for studying various electrical machines, their characteristics, and control methods.",
        equipment: [
          "DC machines, induction motors, and synchronous machines",
          "Transformer testing equipment",
          "Motor-generator sets",
          "Machine control panels and instrumentation"
        ],
        image: eceLab
      },
      {
        name: "Power Systems Laboratory",
        description: "Advanced lab for power system analysis, protection, and grid simulation for transmission and distribution studies.",
        equipment: [
          "Power system simulators",
          "Relay testing equipment",
          "Transmission line models",
          "Load flow and stability analysis tools"
        ],
        image: lab1
      },
      {
        name: "Power Electronics Laboratory",
        description: "State-of-the-art facility for power electronic circuits, converters, and drives for modern power applications.",
        equipment: [
          "Power converter development systems",
          "Electric drive test benches",
          "Power analyzer instruments",
          "Thermal imaging equipment"
        ],
        image: eceLab2
      },
      {
        name: "Control Systems Laboratory",
        description: "Specialized lab for control system design, implementation, and analysis for automation and process control.",
        equipment: [
          "Process control trainers",
          "Servo and stepper motor control units",
          "PID controller implementation platforms",
          "SCADA and industrial control systems"
        ],
        image: digitalLab
      }
    ]
  };

  // Lab safety guidelines
  const safetyGuidelines = [
    "Always wear appropriate personal protective equipment (PPE)",
    "Familiarize yourself with emergency exits and procedures",
    "Report any accidents or equipment malfunctions immediately",
    "Never work alone in laboratories"
  ];

  // Get active department labs
  const activeDeptLabs = departmentLabs[activeDepartment];
  const activeDeptInfo = departments.find(dept => dept.id === activeDepartment);

  return (
    <div className="laboratory-page">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section 
        className="parallax-header d-flex align-items-center justify-content-center" 
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.8), rgba(142, 61, 25, 0.8)), url(${computerlab})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPositionY: `${offsetY * 0.5}px`,
          minHeight: "60vh"
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content text-white">
                <h5 className="text-uppercase fw-light mb-3 animate__animated animate__fadeIn">Academic Facilities</h5>
                <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">Laboratory Facilities</h1>
                <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-2s">
                  State-of-the-art laboratories providing hands-on learning experience
                </p>
                <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeIn animate__delay-3s">
                  <Button
                    variant="brand"
                    text="Explore Labs"
                    href="#department-labs"
                    icon="fas fa-chevron-down"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Overview */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h5 className="text-primary text-uppercase fw-semibold mb-2">Practical Learning</h5>
              <h2 className="fw-bold mb-4 position-relative pb-3 about-heading">Our Laboratory Infrastructure</h2>
              <p className="mb-4">
                At Sanskriti School of Engineering, we believe that theoretical knowledge must be complemented with 
                practical experience. Our laboratories are equipped with the latest equipment and technology to 
                provide students with hands-on learning opportunities that bridge the gap between theory and practice.
              </p>
              
              <div className="row g-4 mb-4">
                {labStats.map((stat, index) => (
                  <div className="col-6 col-md-3 col-lg-6" key={index}>
                    <div className="stat-card bg-white rounded p-3 shadow-sm text-center h-100">
                      <h3 className="stat-value text-primary mb-0">{stat.value}</h3>
                      <p className="stat-label mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="about-image-border position-absolute d-none d-md-block"
                  style={{
                    top: '30px',
                    left: '-30px',
                    width: '100%',
                    height: '100%',
                    border: '5px solid var(--sse-secondary)',
                    borderRadius: '10px',
                    zIndex: 0
                  }}></div>
                <img 
                  src={digitalLab} 
                  alt="SSE Laboratory Facility" 
                  className="img-fluid rounded shadow"
                  style={{ position: "relative", zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Labs */}
      <section id="department-labs" className="py-5">
        <div className="container py-5">
          <SectionHeader
            subtitle="Specialized Facilities"
            title="Department Laboratories"
            description="Explore our discipline-specific laboratories equipped with modern technology and equipment"
            centered={true}
          />

          {/* Department Navigation Tabs */}
          <div className="d-flex justify-content-center flex-wrap mb-5">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`btn rounded-pill px-4 py-2 mb-3 mx-2 ${
                  activeDepartment === dept.id 
                    ? 'btn-primary text-white' 
                    : 'btn-outline-primary'
                }`}
                onClick={() => setActiveDepartment(dept.id)}
              >
                {dept.name}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <div className="note-box">
              <div className="note-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="note-content">
                <h4>{activeDeptInfo.name} Department</h4>
                <p className="mb-0">The following laboratories support the curriculum and research activities of the {activeDeptInfo.name} Department.</p>
              </div>
            </div>
          </div>

          {/* Lab Cards */}
          <div className="row g-4">
            {activeDeptLabs.map((lab, index) => (
              <div className="col-lg-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-translate-y">
                  <div className="row g-0 h-100">
                    <div className="col-md-5 facility-image-container">
                      <img 
                        src={lab.image} 
                        alt={lab.name} 
                        className="facility-image"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="feature-icon-wrapper me-3 bg-primary text-white rounded-circle p-3">
                            <i className="fas fa-flask"></i>
                          </div>
                          <h3 className="card-title mb-0">{lab.name}</h3>
                        </div>
                        <p className="card-text mb-3">{lab.description}</p>
                        <h5 className="h6 fw-bold mb-2">Key Equipment:</h5>
                        <ul className="list-unstyled mb-0">
                          {lab.equipment.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="mb-1 d-flex">
                              <i className="fas fa-check-circle text-primary me-2 mt-1"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section 
        className="parallax-cta py-5 text-white text-center d-flex align-items-center justify-content-center" 
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.85), rgba(142, 61, 25, 0.85)), url(${ssecampus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPositionY: `${offsetY * 0.5}px`,
          minHeight: "40vh"
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Experience Hands-on Learning</h2>
              <p className="lead mb-5">
                Join Sanskriti School of Engineering to access our state-of-the-art laboratories
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  variant="cta-primary"
                  text="Apply Now"
                  href="/admissions/equiry"
                  icon="fas fa-arrow-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Laboratory;