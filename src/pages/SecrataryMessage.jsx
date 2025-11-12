import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import secretary from "../assets/secretary.jpg"; // Assuming you have a secretary image
function SecretaryMessage  () {
  return (
    <div className="secretary-message-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Secretary's Message</h1>
              <p className="lead text-white opacity-90">
                From the desk of our administrative leader
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Secretary Message Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="text-center">
                <img 
                  src={secretary} 
                  alt="Secretary Mr. Pavan Reddy" 
                  className="img-fluid rounded-circle shadow mb-4"
                  style={{ maxWidth: "250px" }}
                />
                <h4 className="fw-bold">Mr. Pavan Reddy</h4>
                <p className="text-muted">Secretary, SSE Governing</p>
              </div>
            </Col>
            <Col lg={8}>
              <blockquote className="border-start border-primary ps-4 mb-4" style={{ borderLeftWidth: "4px" }}>
                <p className="lead fst-italic">
                  "Administrative excellence and transparency are the backbone of a successful educational institution."
                </p>
              </blockquote>
              <p className="mb-4">
                Dear Students and Parents,
              </p>
              <p className="mb-4">
                As the Secretary of Sanskriti School of Engineering, I am committed to ensuring that our institution maintains the highest standards of administrative efficiency and transparency. Our administrative team works diligently to create a supportive environment where students can focus on their learning and development.
              </p>
              <p>
                We believe in open communication with all stakeholders and continuous improvement of our systems and processes. Our goal is to make the administrative experience as smooth and hassle-free as possible, allowing students to make the most of their time at SSE.
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

export default SecretaryMessage;