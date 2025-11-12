import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Recognition = () => {
  return (
    <div className="recognition-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Affiliation & Recognition</h1>
              <p className="lead text-white opacity-90">
                Our institutional credentials and approvals
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recognition Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Our Accreditations</h2>
              <p className="mb-4">
                Sanskriti School of Engineering is proud to be recognized by premier educational regulatory bodies in India. These accreditations affirm our commitment to maintaining high standards of education and infrastructure.
              </p>
              <p>
                Our NAAC 'A' Grade accreditation with a score of 3.17 out of 4 reflects our dedication to quality teaching, research, and overall institutional excellence.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1571867424488-41522ba7c6a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="SSE Accreditations" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>

          <Row className="g-4 mt-3">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-award fa-2x"></i>
                  </div>
                  <h4 className="mb-3">AICTE Approved</h4>
                  <p className="text-muted">
                    All engineering programs are approved by the All India Council for Technical Education
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-university fa-2x"></i>
                  </div>
                  <h4 className="mb-3">UGC Recognized</h4>
                  <p className="text-muted">
                    Recognized by the University Grants Commission for maintaining educational standards
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-check-circle fa-2x"></i>
                  </div>
                  <h4 className="mb-3">NAAC Accredited</h4>
                  <p className="text-muted">
                    'A' Grade accreditation by National Assessment and Accreditation Council
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Recognition;