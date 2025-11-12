import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import images from your collection
import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab4 from "../assets/lab4.jpg";
import digitalLab from "../assets/digitalLab.jpg";
import computerlab from "../assets/computerlab.jpg";
import computerLabFocused from "../assets/computerLabFocused.jpg";
import eceLab from "../assets/eceLab.jpg";
import eceLab2 from "../assets/eceLab2.jpg";
import collegeProjects from "../assets/collegeProjects.jpg";
import collegeProjects2 from "../assets/collegeProjects2.jpg";
import chemistryLab from "../assets/chemistryLab.jpg";
import mechanical from "../assets/mechanical.jpg";
import mechMachine from "../assets/mechMachine.jpg";
import groupDiscussion from "../assets/groupDiscussion.jpg";

/**
 * Research Overview page component
 */
const ResearchOverview = () => {
  // Research areas information
  const researchAreas = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      description: "Research in AI/ML algorithms, natural language processing, computer vision, and intelligent systems.",
      icon: "fas fa-brain",
      color: "#1D9DD9" // Blue
    },
    {
      id: 2,
      title: "Advanced Materials & Nanotechnology",
      description: "Development of novel materials, nano-structures, and their applications in engineering and technology.",
      icon: "fas fa-atom",
      color: "#F9843D" // Orange
    },
    {
      id: 3,
      title: "Renewable Energy Systems",
      description: "Research in solar, wind, biomass energy systems, energy storage, and sustainable grid solutions.",
      icon: "fas fa-solar-panel",
      color: "#28A745" // Green
    },
    {
      id: 4,
      title: "IoT & Embedded Systems",
      description: "Innovations in connected devices, sensor networks, and embedded system applications.",
      icon: "fas fa-microchip",
      color: "#6610F2" // Purple
    },
    {
      id: 5,
      title: "Structural Engineering & Design",
      description: "Advanced structures, earthquake-resistant designs, and innovative construction materials.",
      icon: "fas fa-building",
      color: "#8E3D19" // Brown
    },
    {
      id: 6,
      title: "Data Science & Analytics",
      description: "Research in big data, predictive analytics, business intelligence, and statistical modeling.",
      icon: "fas fa-chart-bar",
      color: "#E04084" // Pink
    }
  ];

  return (
    <div className="research-overview-page bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section 
        className="page-header"
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.8), rgba(142, 61, 25, 0.8)), url(${lab4})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Research at SSE</h1>
              <p className="lead text-white opacity-90">
                Advancing knowledge through innovation and disciplined inquiry
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Introduction Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h5 className="text-primary text-uppercase fw-semibold mb-2">Research Vision</h5>
              <h2 className="fw-bold mb-4">Driving Innovation Through Research Excellence</h2>
              <p className="mb-4">
                At Sanskriti School of Engineering, research is integral to our academic mission. We foster an 
                environment where students and faculty engage in cutting-edge research that addresses real-world 
                challenges and contributes to societal development.
              </p>
              <p>
                Our research initiatives emphasize interdisciplinary collaboration, industrial partnerships, 
                and technological innovation. We are committed to developing sustainable solutions that have 
                a meaningful impact on industry and society.
              </p>
            </Col>
            <Col lg={6}>
              <div className="position-relative rounded overflow-hidden shadow">
                <img 
                  src={computerLabFocused} 
                  alt="Research at SSE" 
                  className="img-fluid w-100"
                  style={{ height: "350px", objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Research Areas */}
      <section className="py-5">
        <Container>
          <SectionHeader
            subtitle="Focus Areas"
            title="Our Research Domains"
            description="Explore the diverse fields where SSE researchers are making significant contributions"
            centered={true}
          />
          
          <Row className="g-4">
            {researchAreas.map(area => (
              <Col lg={4} md={6} key={area.id}>
                <Card className="h-100 border-0 shadow-sm hover-translate-y">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle p-3 me-3 text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: area.color, width: '60px', height: '60px' }}>
                        <i className={`${area.icon} fa-lg`}></i>
                      </div>
                      <h3 className="h5 mb-0">{area.title}</h3>
                    </div>
                    <p className="mb-0">{area.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Research Statistics */}
      <section className="py-5 bg-primary text-white">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="h1 mb-5">Research Impact</h2>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {[
              { value: "50+", label: "Ongoing Projects" },
              { value: "200+", label: "Publications" },
              { value: "15", label: "Research Centers" },
              { value: "₹5Cr+", label: "Research Funding" }
            ].map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <div className="bg-white bg-opacity-10 rounded p-4 text-center h-100">
                  <h3 className="display-5 fw-bold mb-2">{stat.value}</h3>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Research Process */}
      <section className="py-5 bg-white">
        <Container>
          <SectionHeader
            subtitle="Our Approach"
            title="Research Methodology"
            description="How we conduct research at Sanskriti School of Engineering"
            centered={true}
          />
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="position-relative mb-5">
                <Row className="g-4">
                  {[
                    { 
                      icon: "fas fa-lightbulb", 
                      title: "Problem Identification", 
                      description: "Identifying and defining real-world problems with industrial and social relevance" 
                    },
                    { 
                      icon: "fas fa-search", 
                      title: "Methodology Development", 
                      description: "Crafting innovative approaches to address complex challenges" 
                    },
                    { 
                      icon: "fas fa-flask", 
                      title: "Experimentation", 
                      description: "Rigorous testing and validation in our state-of-the-art laboratories" 
                    },
                    { 
                      icon: "fas fa-clipboard-check", 
                      title: "Analysis & Validation", 
                      description: "Critical evaluation of results and peer review process" 
                    },
                    { 
                      icon: "fas fa-file-alt", 
                      title: "Publication & Dissemination", 
                      description: "Sharing findings through journals, conferences, and industry forums" 
                    },
                    { 
                      icon: "fas fa-cogs", 
                      title: "Implementation", 
                      description: "Translating research outcomes into practical applications" 
                    }
                  ].map((step, index) => (
                    <Col md={4} key={index}>
                      <Card className="border-0 shadow-sm h-100">
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className="rounded-circle bg-primary text-white p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                              <i className={step.icon}></i>
                            </div>
                            <h4 className="h5 mb-0">{step.title}</h4>
                          </div>
                          <p className="mb-0 text-secondary">{step.description}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Student Research */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <h5 className="text-primary text-uppercase fw-semibold mb-2">Student Engagement</h5>
              <h2 className="fw-bold mb-4">Research Opportunities for Students</h2>
              <p className="mb-4">
                We believe in nurturing the next generation of researchers by providing students with meaningful 
                research experiences. Our undergraduate and postgraduate students actively participate in research 
                projects, working alongside faculty members and industry partners.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Final Year Projects</h5>
                    <p className="mb-0 text-muted">Research-focused capstone projects aligned with industry needs</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Research Internships</h5>
                    <p className="mb-0 text-muted">Opportunities to work on funded research projects</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Innovation Contests</h5>
                    <p className="mb-0 text-muted">Regular hackathons and competitions to foster creative thinking</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                <Col sm={6}>
                  <img 
                    src={collegeProjects} 
                    alt="Student Research" 
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col sm={6}>
                  <img 
                    src={eceLab} 
                    alt="Lab Research" 
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col sm={12}>
                  <img 
                    src={groupDiscussion} 
                    alt="Group Research" 
                    className="img-fluid rounded shadow"
                    style={{ height: "250px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Research Centers */}
      <section className="py-5 bg-white">
        <Container>
          <SectionHeader
            subtitle="Research Infrastructure"
            title="Our Research Centers"
            description="Specialized facilities dedicated to cutting-edge research and innovation"
            centered={true}
          />
          
          <Row className="g-4">
            {[
              {
                name: "Advanced Computing Research Center",
                description: "Focused on cutting-edge computing technologies, AI, machine learning, and high-performance computing solutions.",
                image: computerlab
              },
              {
                name: "Materials Science Laboratory",
                description: "Equipped for research in advanced materials, composites, nanomaterials, and material characterization.",
                image: chemistryLab
              },
              {
                name: "Energy Systems Innovation Hub",
                description: "Developing sustainable energy solutions, including renewable energy systems and smart grid technologies.",
                image: mechanical
              },
              {
                name: "Digital Manufacturing Center",
                description: "Working on advanced manufacturing processes, including 3D printing, automation, and Industry 4.0 technologies.",
                image: mechMachine
              }
            ].map((center, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm hover-translate-y">
                  <Row className="g-0 h-100">
                    <Col md={5} className="facility-image-container">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="facility-image"
                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                      />
                    </Col>
                    <Col md={7}>
                      <Card.Body className="p-4">
                        <h3 className="h5 fw-bold mb-3">{center.name}</h3>
                        <p className="mb-0">{center.description}</p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResearchOverview;