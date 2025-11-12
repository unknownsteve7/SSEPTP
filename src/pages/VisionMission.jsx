import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Import staff images from assets
import staff from "../assets/staff.jpg";
import principal from "../assets/principal.jpg";

const VisionMission = () => {
  return (
    <div className="vision-mission-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Vision & Mission</h1>
              <p className="lead text-white opacity-90">
                Our guiding principles and aspirations
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision Mission Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Our Vision</h2>
              <p className="lead">
                To develop dynamic and socially responsible engineers possessing wisdom, positive attitude, and an impeccable character. Hallmarks will be the innovation, initiative, and teamwork—the ability to anticipate and effectively respond to change and to create opportunities.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={principal} 
                alt="SSE Vision" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Our Mission</h2>
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                  <p className="mb-0">The college is devoted to serving society and the nation by providing quality education and skill development programs, thereby enabling students to become skilled engineers with the right kind of knowledge.</p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                  <p className="mb-0">Committed towards setting new benchmarks of excellence in engineering education with emphasis on research & development, innovation, and services to society, industry, and the world.</p>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="order-lg-1">
              <img 
                src={staff} 
                alt="SSE Mission" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VisionMission;