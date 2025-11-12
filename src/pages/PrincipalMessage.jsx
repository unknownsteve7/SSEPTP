import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import principal from "../assets/principal.jpg"; // Importing the principal's image

const PrincipalMessage = () => {
  return (
    <div className="principal-message-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Principal's Message</h1>
              <p className="lead text-white opacity-90">
                Insights from our institutional head
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Principal Message Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="text-center">
                <img 
                  src={principal} 
                  alt="Principal Prof." 
                  className="img-fluid rounded-circle shadow mb-4"
                  style={{ maxWidth: "250px" }}
                />
                <h4 className="text-muted">Principal, SSE</h4>
              </div>
            </Col>
            <Col lg={8}>
              <blockquote className="border-start border-primary ps-4 mb-4" style={{ borderLeftWidth: "4px" }}>
                <p className="lead fst-italic">
                  "Our aim is to create a learning environment where students can develop both technical expertise and personal character."
                </p>
              </blockquote>
              <p className="mb-4">
                Dear Students,
              </p>
              <p className="mb-4">
                As the Principal of Sanskriti School of Engineering, I am proud to lead an institution that strives for excellence in engineering education. Our focus on holistic development ensures that students graduate not just with a degree, but with the skills, knowledge, and values needed to excel in their careers.
              </p>
              <p>
                SSE offers a unique blend of rigorous academics, practical training, and opportunities for personal growth. Our dedicated faculty, state-of-the-art infrastructure, and strong industry connections create an ecosystem where innovation thrives and students are prepared to meet the challenges of the rapidly evolving technological landscape.
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

export default PrincipalMessage;