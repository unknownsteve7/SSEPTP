import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ChairmanMessage = () => {
  return (
    <div className="chairman-message-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Chairman's Message</h1>
              <p className="lead text-white opacity-90">
                A word from our visionary leader
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chairman Message Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Chairman Dr. Rajesh Kumar" 
                  className="img-fluid rounded-circle shadow mb-4"
                  style={{ maxWidth: "250px" }}
                />
                <h4 className="fw-bold">Dr. Rajesh Kumar</h4>
                <p className="text-muted">Chairman, SSE</p>
              </div>
            </Col>
            <Col lg={8}>
              <blockquote className="border-start border-primary ps-4 mb-4" style={{ borderLeftWidth: "4px" }}>
                <p className="lead fst-italic">
                  "Education is not just about acquiring knowledge; it's about shaping character, fostering innovation, and building a better society."
                </p>
              </blockquote>
              <p className="mb-4">
                Dear Students and Parents,
              </p>
              <p className="mb-4">
                It gives me immense pleasure to welcome you to Sanskriti School of Engineering. Our institution stands as a testament to our commitment to providing quality education that blends traditional values with modern technology.
              </p>
              <p>
                At SSE, we believe in nurturing not just skilled engineers, but compassionate human beings who will contribute meaningfully to society. Our state-of-the-art infrastructure, dedicated faculty, and industry-aligned curriculum are designed to prepare students for the challenges of the future.
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

export default ChairmanMessage;