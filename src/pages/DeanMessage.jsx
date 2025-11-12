import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DeanMessage = () => {
  return (
    <div className="dean-message-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Dean's Message</h1>
              <p className="lead text-white opacity-90">
                Words from our academic leader
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Dean Message Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Dean Dr. Priya Sharma" 
                  className="img-fluid rounded-circle shadow mb-4"
                  style={{ maxWidth: "250px" }}
                />
                <h4 className="fw-bold">Dr. Priya Sharma</h4>
                <p className="text-muted">Dean of Academic Affairs</p>
              </div>
            </Col>
            <Col lg={8}>
              <blockquote className="border-start border-primary ps-4 mb-4" style={{ borderLeftWidth: "4px" }}>
                <p className="lead fst-italic">
                  "Academic excellence must be paired with practical skills and ethical values to create truly outstanding engineers."
                </p>
              </blockquote>
              <p className="mb-4">
                Dear Students,
              </p>
              <p className="mb-4">
                Welcome to Sanskriti School of Engineering, where we strive to provide an educational experience that goes beyond textbooks and classrooms. Our academic programs are designed to foster critical thinking, problem-solving abilities, and a spirit of innovation among students.
              </p>
              <p>
                Our curriculum is regularly updated to keep pace with industry demands, and our teaching methodology emphasizes hands-on learning through projects, internships, and industry collaborations. We believe that true education empowers students to become lifelong learners and responsible global citizens.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DeanMessage;