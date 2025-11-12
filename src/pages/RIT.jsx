import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col, Card, Badge, Tab, Nav } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import richard from "../assets/risefaculty/richard.jpg"
import mario from "../assets/risefaculty/mario.jpg"
import dominik from "../assets/risefaculty/dominik.jpg"
import raoul from "../assets/risefaculty/raoul.jpg"
import stefan from "../assets/risefaculty/stefan.jpg"
import karl from "../assets/risefaculty/karl.jpg"
import schemlz from "../assets/risefaculty/schmelz.jpg"
import philip from "../assets/risefaculty/philip.jpg"
import johannesR from "../assets/risefaculty/johannes.gif"
import christoph from "../assets/risefaculty/christoph.jpg"
import rene from "../assets/risefaculty/rene.jpg"
import roland from "../assets/risefaculty/roland.jpg"
import image1 from "../assets/risefaculty/image1.png"
import image2 from "../assets/risefaculty/image2.png"
import image3 from "../assets/risefaculty/image3.png"
import image4 from "../assets/risefaculty/image4.png"
import image5 from "../assets/risefaculty/image5.png"
import image6 from "../assets/risefaculty/image6.png"
import image7 from "../assets/risefaculty/image7.png"
import image8 from "../assets/risefaculty/image8.png"
import image9 from "../assets/risefaculty/image9.png"

import riseLogo from "../assets/risefaculty/rise_logo.jpg"
import christina from "../assets/risefaculty/christina.jpg"
import markus from "../assets/risefaculty/markus.jpg"
import thomas from "../assets/risefaculty/thomas.jpg"
import bachel from "../assets/risefaculty/bachel.jpg"
import christian from "../assets/risefaculty/christian.jpg"
import schanes from "../assets/risefaculty/schanes.jpg"

import aigner from "../assets/risefaculty/aigner.jpg"
import paulR from "../assets/risefaculty/paul.jpg"
import thomas2 from "../assets/risefaculty/thomas.png"


import Contact from "../components/common/Contact";
import paul from "../assets/ssefaculty/cse/paul.jpg";
import karin from "../assets/risefaculty/karin.jpg"
import raimund from "../assets/ssefaculty/cse/raimund.jpg";
import ennostubler from "../assets/ssefaculty/cse/ennostubler.jpg";
import konradzalar from "../assets/ssefaculty/cse/konradjalar.jpg";
import johannes from "../assets/ssefaculty/cse/johannes.jpg";
import ritprogram from "../assets/ritprogram.jpg";
/**
 * RIT Program Page Component
 * Displays information about the RISE Institute of Higher Technologies Program
 */
function RIT() {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for showing additional faculty
  const [showMoreFaculty, setShowMoreFaculty] = useState(false);

  // Faculty data
  const facultyData = [
    {
      name: "Dipl.-Ing. Univ.Ass. Paul Spiesberger",
      role: "RISE, Europe | INSO, Europe",
      linkedin: "https://www.linkedin.com/in/paulspiesberger/",
      image: paul,
    },
    {
      name: "Mr. Raimund Rittnauer",
      role: "Vienna University of Technology",
      linkedin: "https://www.linkedin.com/in/raimund-rittnauer/",
      image: raimund,
    },
    {
      name: "Mr. Alexander Grass",
      role: "Graz University of Technology",
      linkedin: "https://www.linkedin.com/in/alexander-grass/",
      image:
        "https://www.sseptp.org/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-9.00.38-AM.jpeg",
    },
    {
      name: "Mr. Enno Stubler",
      role: "Vienna University of Technology, Developer @ RISE",
      linkedin: "https://www.linkedin.com/in/enno-stubler/",
      image: ennostubler,
    },
    {
      name: "Mr. Konrad Zalar",
      role: "Graz University of Technology",
      linkedin: "https://www.linkedin.com/in/konrad-zalar/",
      image: konradzalar,
    },
    {
      name: "Mr. Johannes Hufnagl",
      role: "Vienna University of Technology, Software developer @ RISE",
      linkedin: "https://www.linkedin.com/in/johannes-hufnagl/",
      image: johannes,
    },
  ];

  // Rise@SSE Faculty data (20 members)
  const riseFacultyData = [
    {
      id: 1,
      name: "Dipl.-Ing. Mag. Dr. Karin Kappel",
      designation: "Professor & Deputy Head",
      department: "Computer Science Engineering",
      specialization: "Machine Learning, Data Science",
      experience: "15 years",
      image: karin,
    },

    {
      id: 2,
      name: "Dipl.-Ing. Dr. Mario Bernhart",
      designation: "Assistant Professor",
      department: "Software Engineering",
      specialization: "DevOps, Cloud Computing",
      experience: "8 years",
      image: mario,
    },
    {
      id: 3,
      name: "Dr. Andreas Staribacher",
      designation: "Associate Professor",
      department: "Data Analytics",
      specialization: "Big Data, Business Intelligence",
      experience: "10 years",
      image: riseLogo,
    },
    {
      id: 4,
      name: "Dipl.-Ing. Dr. Stefan Strobl",
      designation: "Associate Professor",
      department: "Blockchain Technology",
      specialization: "Cryptocurrency, DeFi",
      experience: "9 years",
      image: stefan,
    },
    {
      id: 5,
      name: "Dipl.-Ing. Mag. Mag. Dr. Karl Pinter",
      designation: "Assistant Professor",
      department: "Mobile App Development",
      specialization: "Android, iOS Development",
      experience: "6 years",
      image: karl,
    },
    {
      id: 6,
      name: "Dipl.-Ing. Dr. Dominik Schmelz",
      designation: "Professor",
      department: "Web Technologies",
      specialization: "Full Stack Development, MEAN/MERN",
      experience: "16 years",
      image: schemlz,
    },
    {
      id: 7,
      name: "Dipl.-Ing. Dr. Philipp Harms",
      designation: "Associate Professor",
      department: "UI/UX Design",
      specialization: "Human-Computer Interaction, Design Thinking",
      experience: "11 years",
      image: philip,
    },
    {
      id: 8,
      name: "Dr. Dominik Hölbling Bakk.rer.nat MSc",
      designation: "Professor",
      department: "Cybersecurity",
      specialization: "Information Security, Ethical Hacking",
      experience: "18 years",
      image: dominik,
    },

    {
      id: 9,
      name: "DDipl.-Ing. Dr. Raoul Vallon",
      designation: "Assistant Professor",
      department: "IoT & Embedded Systems",
      specialization: "Internet of Things, Smart Systems",
      experience: "7 years",
      image: raoul,
    },




    {
      id: 10,
      name: "Dipl.-Ing. Dr. Johannes Harms",
      designation: "Assistant Professor",
      department: "Game Development",
      specialization: "Unity 3D, Virtual Reality",
      experience: "5 years",
      image: johannesR,
    },
    {
      id: 11,
      name: "Ing. Philipp Habinger, MSc",
      designation: "Professor",
      department: "Digital Marketing",
      specialization: "SEO, Social Media Marketing",
      experience: "14 years",
      image: riseLogo,
    },
    {
      id: 12,
      name: "Dipl.-Ing. Christoph Wimmer",
      designation: "Associate Professor",
      department: "Project Management",
      specialization: "Agile, Scrum Methodologies",
      experience: "13 years",
      image: christoph,
    },
    {
      id: 13,
      name: "Dipl.-Ing. Dr. Rene Baranyi",
      designation: "Assistant Professor",
      department: "Quality Assurance",
      specialization: "Software Testing, Automation",
      experience: "8 years",
      image: rene,
    },
    {
      id: 14,
      name: "Dipl.-Ing. Mag. Roland Breiteneder",
      designation: "Associate Professor",
      department: "Database Management",
      specialization: "NoSQL, Database Optimization",
      experience: "12 years",
      image: roland,
    },
    {
      id: 15,
      name: "Mag. Franz Mairhofer",
      designation: "Professor",
      department: "Network Administration",
      specialization: "Network Security, Protocol Design",
      experience: "17 years",
      image: riseLogo,
    },
    {
      id: 16,
      name: "Dipl.-Ing. Christina Zoffi",
      designation: "Assistant Professor",
      department: "Computer Vision",
      specialization: "Image Processing, Pattern Recognition",
      experience: "7 years",
      image: christina,
    },
    {
      id: 17,
      name: "Dipl.-Ing. Markus Zoffi",
      designation: "Associate Professor",
      department: "Robotics",
      specialization: "Industrial Automation, AI Robotics",
      experience: "10 years",
      image: markus,
    },
    {
      id: 18,
      name: "Univ. Prof. Dr. Thomas Grechenig",
      designation: "Assistant Professor",
      department: "Natural Language Processing",
      specialization: "Text Analytics, Chatbots",
      experience: "6 years",
      image: thomas2,
    },
    {
      id: 19,
      name: "Dipl.-Ing. Stefan Bachl",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: bachel,
    },
    {
      id: 20,
      name: "Dipl.-Ing. Dr. Andreas Ehringfeld",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: riseLogo,
    },
    {
      id: 21,
      name: "Dipl.-Ing. Stefan Kuschnigg",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: riseLogo,
    },
    {
      id: 22,
      name: "Dr. Franz Schönbauer",
      designation: "Associate Professor",
      department: "Artificial Intelligence",
      specialization: "Deep Learning, Neural Networks",
      experience: "12 years",
      image: riseLogo,
    },
    {
      id: 23,
      name: "Dipl.-Ing. Mag. Dr. Christian Brem",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: riseLogo,
    },
    
    {
      id: 25,
      name: "Dipl.-Ing. Dr. Christian Schanes",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: schanes,
    },
    {
      id: 26,
      name: "Dipl.-Ing. Dr. Christoph Aigner",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: aigner,
    },
    {
      id: 27,
      name: "Dipl.-Ing. Monika Suppersberger",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: riseLogo,
    },
    {
      id: 28,
      name: "Dipl.-Ing. Richard Schlögl",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: richard,
    },
   
    {
      id: 30,
      name: "Dipl.-Ing. Thomas Artner",
      designation: "Professor",
      department: "Research & Innovation",
      specialization: "Technology Transfer, Patent Filing",
      experience: "20 years",
      image: thomas,
    },
  ];


  // Prepare sorted Rise faculty list: deduplicate, sort by id, then special-case placements
  // - Place Thomas Artner first (index 0)
  // - Place Paul Spiesberger second (index 1)
  const sortedRiseFaculty = useMemo(() => {
    const raw = Array.isArray(riseFacultyData) ? [...riseFacultyData] : [];

    // Extract Thomas explicitly (match by name or known id if available)
    const thomasIndex = raw.findIndex(
      (f) => (f.name && f.name.toLowerCase().includes("thomas artner")) || f.id === 18
    );
    const thomasItem = thomasIndex !== -1 ? raw.splice(thomasIndex, 1)[0] : null;

    // Extract Paul Spiesberger explicitly (match by name or known id if available)
    const paulIndex = raw.findIndex(
      (f) => (f.name && f.name.toLowerCase().includes("paul spiesberger")) || f.name?.toLowerCase().includes("paul spies") || f.id === 29
    );
    const paulItem = paulIndex !== -1 ? raw.splice(paulIndex, 1)[0] : null;

    // Deduplicate remaining entries by normalized name (keep first occurrence)
    const seen = new Set();
    const unique = [];
    for (const f of raw) {
      const key = (f.name || "").toString().trim().toLowerCase();
      if (!key) continue;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(f);
      }
    }

    // Sort the unique list by numeric id (missing ids treated as Infinity to push to end)
    unique.sort((a, b) => {
      const ai = Number.isFinite(Number(a.id)) ? Number(a.id) : Infinity;
      const bi = Number.isFinite(Number(b.id)) ? Number(b.id) : Infinity;
      return ai - bi;
    });

    // Place Thomas first and Paul second if present
    const final = [];
    if (thomasItem) final.push(thomasItem);
    if (paulItem) final.push(paulItem);
    // append the rest
    final.push(...unique);

    return final;
  }, [riseFacultyData]);

  // Module data
  const modules = [
    {
      title: "Module 1",
      subtitle: "Foundation Setup",
      description:
        "Setting up essential tools and skills for software development",
      duration: "7 teaching-blocks, 2 weeks each",
      topics: [
        "Setting up tools and skills",
        "Learning Slack, Email usage",
        "Typing practice and self-learning resources",
        "Programming mindset using Scratch",
      ],
      icon: "fas fa-laptop-code",
      color: "#F9843D", // Orange
    },
    {
      title: "Module 2",
      subtitle: "Programming Basics",
      description: "Introduction to computer programming fundamentals",
      duration: "6 teaching-blocks, 2 weeks each",
      topics: [
        "Basics of computer programming",
        "Assignments to solve using Java",
      ],
      icon: "fas fa-code",
      color: "#1D9DD9", // Blue
    },
    {
      title: "Module 3",
      subtitle: "Advanced Programming",
      description: "Deeper dive into Java programming with complex assignments",
      duration: "3 teaching-blocks, 4 weeks each",
      topics: [
        "Advanced Java programming assignments",
        "Larger assignments and longer timelines",
        "Submission reviews for feedback",
      ],
      icon: "fas fa-cogs",
      color: "#28A745", // Green
    },
    {
      title: "Module 4",
      subtitle: "Software Architecture",
      description: "Advanced concepts in software design and implementation",
      duration: "5 teaching-blocks, 3 weeks each",
      topics: [
        "Advanced Java & Software Architecture",
        "Object-Oriented Programming",
        "Design patterns and code structure",
        "SQLite database usage",
        "Learning Git and GitHub",
      ],
      icon: "fas fa-sitemap",
      color: "#E04084", // Pink
    },
  ];

  return (
    <div className="rit-page bg-light">
      {/* Navigation */}
      <Navbar />
      <Sidebar />

      {/* Page Header */}
      <section className="page-header">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <Badge bg="primary" className="mb-3 px-3 py-2">
                Special Program
              </Badge>
              <h1 className="display-4 fw-bold text-white">
                RISE Institute of Higher Technologies (RIT)
              </h1>
              <p className="lead text-white opacity-90">
                Advancing programming and software engineering skills through
                practical, hands-on learning
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Faculty and Mentors */}
      <section className="py-5 bg-light faculty-section">
        <Container className="py-4">
          <SectionHeader
            subtitle="Expert Guidance"
            title="Faculty and Mentors"
            description="Learn from experienced professionals from leading European universities and RISE"
            centered={true}
          />

          <Row className="g-4">
            {facultyData.map((faculty, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="border-0 shadow-sm h-100 hover-translate-y">
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      <div className="position-relative d-inline-block mb-3">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="rounded-circle object-fit-cover"
                          style={{ width: "120px", height: "120px" }}
                        />
                       
                      </div>
                      <h3 className="h5 mb-1">{faculty.name}</h3>
                      <p className="text-muted mb-3">{faculty.role}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* View More Button */}
          <div className="text-center mt-4">
            <button
              className={`btn ${showMoreFaculty ? 'btn-outline-primary' : 'btn-primary'} px-4 py-2 rounded-pill fw-medium`}
              onClick={() => setShowMoreFaculty(!showMoreFaculty)}
              style={{
                backgroundColor: showMoreFaculty ? 'transparent' : 'var(--sse-secondary)',
                borderColor: 'var(--sse-secondary)',
                color: showMoreFaculty ? 'var(--sse-secondary)' : 'white'
              }}
            >
              <i className={`${showMoreFaculty ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} me-2`}></i>
              {showMoreFaculty ? "Show Less Faculty" : "View More Faculty"}
            </button>
          </div>

          {/* Additional Rise@SSE Faculty - Conditionally Rendered */}
          {showMoreFaculty && (
            <div className="mt-5">
              <SectionHeader
                subtitle="Rise@SSE Faculty"
                title="Distinguished Faculty Members"
                description="Our exceptional faculty driving innovation and excellence in education"
                centered={true}
              />

              <Row className="g-4">
                {sortedRiseFaculty.map((faculty, index) => (
                  <Col lg={3} md={4} sm={6} key={faculty.id}>
                    <Card className="border-0 shadow-sm h-100 hover-translate-y faculty-card">
                      <Card.Body className="p-4">
                        <div className="text-center mb-3">
                          <div className="position-relative d-inline-block mb-3">
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="rounded-circle object-fit-cover"
                              style={{ width: "100px", height: "100px" }}
                            />
                            <div
                              className="position-absolute bottom-0 end-0 rounded-circle d-flex align-items-center justify-content-center"
                              style={{
                                width: "30px",
                                height: "30px",
                                backgroundColor: "var(--sse-secondary)",
                                border: "3px solid white"
                              }}
                            >
                              <i className="fas fa-user-graduate text-white small"></i>
                            </div>
                          </div>
                          <h3 className="h6 fw-bold mb-1 text-primary">{faculty.name}</h3>
                          {/* <p className="small text-muted mb-2">{faculty.designation}</p> */}
                          {/* <Badge bg="light" text="dark" className="mb-3">
                            {faculty.department}
                          </Badge> */}
                        </div>

                        <div className="faculty-details">
                          {/* <div className="mb-2">
                            <small className="text-muted d-block">Specialization</small>
                            <small className="fw-medium">{faculty.specialization}</small>
                          </div>
                          <div className="mb-2">
                            <small className="text-muted d-block">Experience</small>
                            <small className="fw-medium">{faculty.experience}</small>
                          </div> */}
                         
                          {/* <div className="text-center">
                            <Button
                              variant="outline-primary"
                              text="View Details"
                              href="#"
                              className="btn-sm"
                              icon="fas fa-info-circle"
                            />
                          </div> */}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </section>

      {/* Program Overview */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-4">Program Overview</h2>
              <p className="mb-4">
                The RISE Institute of Higher Technologies (RIT) Program is
                offered by Sanskriti School of Engineering in cooperation with
                RISE & INSO. This comprehensive program is designed to enhance
                the programming and software engineering skills of CSE students
                through hands-on practice and real-world problem-solving.
              </p>
              <p className="mb-4">
                With a strong focus on practical assignments, students develop
                critical coding skills by actively writing code to solve
                challenging problems. The program encourages self-learning and
                fosters innovation through access to cutting-edge technology and
                mentorship from international experts.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--sse-secondary) !important",
                  }}
                >
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h4 className="h5 mb-1">Program Duration</h4>
                  <p className="mb-0">
                    4 modules to be completed over the 4 years of study at SSE
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={3}>
              <img
                src={ritprogram}
                className="img-fluid w-100"
                alt="RIT Program"
              />
            </Col>
          </Row>

          {/* Program Highlights */}
          <Row className="g-4 mt-4">
            <Col lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-translate-y">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--sse-secondary)",
                        color: "white",
                      }}
                    >
                      <i className="fas fa-laptop"></i>
                    </div>
                    <h3 className="h4 mb-0">Practical Focus</h3>
                  </div>
                  <p className="mb-0">
                    Hands-on assignments requiring students to solve real-world
                    problems through coding, enhancing problem-solving skills
                    and practical knowledge.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-translate-y">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--sse-primary)",
                        color: "white",
                      }}
                    >
                      <i className="fas fa-globe"></i>
                    </div>
                    <h3 className="h4 mb-0">International Expertise</h3>
                  </div>
                  <p className="mb-0">
                    Guidance from experienced faculty from leading European
                    universities and RISE, bringing global perspectives and
                    industry-relevant knowledge.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-translate-y">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#1D9DD9",
                        color: "white",
                      }}
                    >
                      <i className="fas fa-brain"></i>
                    </div>
                    <h3 className="h4 mb-0">Self-Learning Skills</h3>
                  </div>
                  <p className="mb-0">
                    Encourages students to develop autonomy in learning by
                    utilizing free online resources, fostering lifelong learning
                    habits crucial for tech careers.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SSE-RISE FAB LAB */}
      <section
        className="py-5"
        style={{ backgroundColor: "rgba(249, 132, 61, 0.1)" }}
      >
        <Container className="py-4">
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0"></Col>
            <Col lg={7}>
              <div className="ps-lg-4">
                <SectionHeader
                  subtitle="Innovation Hub"
                  title="SSE-RISE FAB LAB"
                  centered={false}
                />
                <p className="mb-4">
                  A Fabrication Laboratory (Fab Lab) is a state-of-the-art
                  creative space where students access cutting-edge technology
                  to become inventors and innovators. The SSE-RISE Fab Lab goes
                  beyond providing technology—it's a comprehensive platform for
                  learning, innovation, mentorship, and invention.
                </p>
                <p className="mb-4">
                  This do-it-yourself (DIY) environment encourages tinkering and
                  experimenting with technology, allowing students to bring
                  their ideas to life using advanced equipment and tools. The
                  lab serves as a catalyst for creativity, practical application
                  of concepts, and collaborative problem-solving.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Program Modules */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Curriculum"
            title="Program Modules"
            description="A progressive learning journey over 4 years to build comprehensive software engineering skills"
            centered={true}
          />

          <Tab.Container id="modules-tabs" defaultActiveKey="module1">
            <Nav
              variant="pills"
              className="flex-row justify-content-center mb-4 flex-wrap"
            >
              {modules.map((module, index) => (
                <Nav.Item key={index}>
                  <Nav.Link
                    eventKey={`module${index + 1}`}
                    className="rounded-pill mx-2 mb-2"
                    style={{
                      backgroundColor:
                        module.color === Nav.Link.active
                          ? module.color
                          : "transparent",
                      borderColor: module.color,
                      color: Nav.Link.active ? "white" : module.color,
                    }}
                  >
                    {module.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content>
              {modules.map((module, index) => (
                <Tab.Pane key={index} eventKey={`module${index + 1}`}>
                  <Card className="border-0 shadow-sm">
                    <Card.Header
                      className="py-3 px-4 border-0"
                      style={{ backgroundColor: module.color, color: "white" }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-2 me-3">
                          <i
                            className={module.icon}
                            style={{ color: module.color }}
                          ></i>
                        </div>
                        <div>
                          <h3 className="h4 mb-1">
                            {module.title}: {module.subtitle}
                          </h3>
                          <p className="mb-0 small">{module.duration}</p>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <Row>
                        <Col lg={4} className="mb-4 mb-lg-0">
                          <h4 className="h5 mb-3">Overview</h4>
                          <p>{module.description}</p>
                          <div className="mt-3">
                            <Badge
                              bg="light"
                              className="text-dark border"
                              style={{ borderColor: module.color + "40" }}
                            >
                              <i className="fas fa-calendar-alt me-1"></i>
                              Duration: {module.duration.split(",")[0]}
                            </Badge>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <h4 className="h5 mb-3">Key Topics</h4>
                          <Row>
                            {module.topics.map((topic, i) => (
                              <Col md={6} key={i}>
                                <div className="d-flex mb-3">
                                  <div
                                    className="flex-shrink-0 me-3 mt-1"
                                    style={{ color: module.color }}
                                  >
                                    <i className="fas fa-check-circle"></i>
                                  </div>
                                  <div>{topic}</div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>

          <div className="text-center mt-5">
            <p className="text-muted mb-4">
              The RIT Program is designed to progressively build skills from
              basic programming concepts to advanced software architecture,
              providing a comprehensive foundation for a successful career in
              software engineering.
            </p>
            <Button
              variant="secondary"
              text="Download Course Syllabus"
              href="/downloads/rit-syllabus.pdf"
              icon="fas fa-file-download"
            />
          </div>
        </Container>
      </section>

      {/* Rise@SSE Section */}
      <section className="py-5 bg-gradient-primary text-white position-relative">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Rise@SSE Faculty Program
              </h2>
              <p className="lead opacity-75 mb-5">
                Discover our distinguished faculty members who are leading
                innovation and excellence in engineering education and research
                at SSE.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  className="btn btn-light text-primary fw-medium px-4 py-2 rounded-pill"
                  onClick={() => {
                    setShowMoreFaculty(true);
                    document.querySelector('.faculty-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                    color: 'var(--sse-primary)'
                  }}
                >
                  <i className="fas fa-arrow-up me-2"></i>
                  View Faculty Above
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default RIT;
