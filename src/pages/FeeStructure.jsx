import React from "react";
import { Container, Row, Col, Card, Table, Badge, Alert } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";
import feerefund from "../assets/files/Fee-Refund-Policy-2024-25.pdf"

/**
 * Optimized Fee Structure page component
 */
const FeeStructure = () => {
  return (
    <div className="fee-structure-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Fee Structure</h1>
              <p className="lead text-white opacity-90">
                Comprehensive information about fees and payment options for the 2025-26 academic year
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fee Structure Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Financial Information"
            title="B.Tech Programme Fees"
            description="Fee structure for B.Tech programmes for the academic year 2025-26"
            centered={true}
          />

          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="g-4">
                {/* Government Quota */}
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Header className="bg-primary text-white py-3">
                      <h3 className="h4 mb-0">Government Counseling Quota</h3>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        <h4 className="text-primary mb-0">
                          <span className="small">₹</span>
                          <span className="display-4 fw-bold">40,000</span>
                          <span className="small text-muted">/year</span>
                        </h4>
                      </div>
                      
                      <h5 className="mb-3">Eligibility</h5>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2 d-flex">
                          <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                          <span>A pass in +2 M.P.C. with at least 50% marks</span>
                        </li>
                        <li className="mb-2 d-flex">
                          <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                          <span>Qualifying at EAMCET/ECET (Counseling Code: SSSE)</span>
                        </li>
                      </ul>
                      
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          text="Apply Through EAMCET"
                          href="https://eamcet.nic.in"
                          icon="fas fa-external-link-alt"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Management Quota */}
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Header className="bg-secondary text-white py-3">
                      <h3 className="h4 mb-0">Management Quota</h3>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        <h4 className="text-primary mb-0">
                          <span className="small">₹</span>
                          <span className="display-4 fw-bold">2,00,000</span>
                          <span className="small text-muted">/year</span>
                        </h4>
                      </div>
                      
                      <h5 className="mb-3">Eligibility</h5>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2 d-flex">
                          <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                          <span>A pass in +2 M.P.C. with at least 50% marks</span>
                        </li>
                        <li className="mb-2 d-flex">
                          <i className="fas fa-info-circle text-primary me-2 mt-1"></i>
                          <span>Limited seats on first-come, first-served basis</span>
                        </li>
                      </ul>
                      
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          text="Apply Directly"
                          href="/admissions/enquiry"
                          icon="fas fa-arrow-right"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Fee Inclusions & Exclusions */}
              <Row className="g-4 mt-4">
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="mb-3 text-success">
                        <i className="fas fa-check me-2"></i> Fee Includes
                      </h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0 px-0 py-2">Tuition Fee</li>
                        <li className="list-group-item border-0 px-0 py-2">Library Fee</li>
                        <li className="list-group-item border-0 px-0 py-2">Computer Lab Fee</li>
                        <li className="list-group-item border-0 px-0 py-2">Internet Access</li>
                        <li className="list-group-item border-0 px-0 py-2">Examination Fee</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="mb-3 text-danger">
                        <i className="fas fa-times me-2"></i> Fee Excludes
                      </h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0 px-0 py-2">Hostel & Mess Charges</li>
                        <li className="list-group-item border-0 px-0 py-2">Transportation Fee</li>
                        <li className="list-group-item border-0 px-0 py-2">Books & Stationery</li>
                        <li className="list-group-item border-0 px-0 py-2">Uniform Fee</li>
                        <li className="list-group-item border-0 px-0 py-2">Additional Certifications</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Important Note */}
              <Alert variant="info" className="d-flex align-items-start mt-4">
                <i className="fas fa-info-circle text-info fa-lg me-3 mt-1"></i>
                <div>
                  <h5 className="alert-heading">Important Information</h5>
                  <ul className="mb-0">
                    <li>Fees must be paid at the beginning of each academic year</li>
                    <li>Payments can be made in two equal installments (per semester)</li>
                    <li>A late fee will be charged for payments after the due date</li>
                    <li>Fees are subject to revision as per regulatory guidelines</li>
                  </ul>
                </div>
              </Alert>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fee Refund Policy Section */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <SectionHeader
            subtitle="Policy Information"
            title="Fee Refund Policy"
            description="Understanding the terms and conditions for fee refunds"
            centered={true}
          />

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <div className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                      <i className="fas fa-file-contract fa-2x"></i>
                    </div>
                    <h3 className="h4 mb-3">Fee Refund Policy Document</h3>
                    <p className="mb-4 text-muted">
                      Our comprehensive fee refund policy outlines the terms and conditions for fee refunds 
                      in various scenarios including withdrawal, cancellation, and other circumstances. 
                      Please review the document carefully to understand your rights and obligations.
                    </p>
                  </div>

                  <Row className="g-3 mb-4">
                    <Col sm={6}>
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="fas fa-clock text-primary me-3"></i>
                        <div>
                          <h6 className="mb-1">Time-based Refunds</h6>
                          <small className="text-muted">Refund amounts based on withdrawal timing</small>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="fas fa-percentage text-primary me-3"></i>
                        <div>
                          <h6 className="mb-1">Refund Percentages</h6>
                          <small className="text-muted">Clear breakdown of refund calculations</small>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="fas fa-calendar-times text-primary me-3"></i>
                        <div>
                          <h6 className="mb-1">Processing Time</h6>
                          <small className="text-muted">Expected timeframe for refund processing</small>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="fas fa-exclamation-triangle text-primary me-3"></i>
                        <div>
                          <h6 className="mb-1">Special Conditions</h6>
                          <small className="text-muted">Important terms and exceptions</small>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      text="View Refund Policy"
                      href={feerefund}  // Replace with your PDF link
                      icon="fas fa-file-pdf"
                      target="_blank"
                    />
                  </div>

                  <Alert variant="warning" className="mt-4 mb-0">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <strong>Note:</strong> All refund requests must be submitted in writing with proper documentation. 
                    Processing fees and administrative charges may apply as per the policy guidelines.
                  </Alert>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Payment Methods */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Convenient Options"
            title="Payment Methods"
            description="Multiple payment options available for fee remittance"
            centered={true}
          />

          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="g-4">
                {[
                  { name: "Online Bank Transfer", icon: "fas fa-university" },
                  { name: "Credit/Debit Cards", icon: "fas fa-credit-card" },
                  { name: "UPI Payments", icon: "fas fa-mobile-alt" },
                  { name: "Demand Draft", icon: "fas fa-money-check-alt" }
                ].map((method, index) => (
                  <Col md={6} lg={3} key={index}>
                    <Card className="text-center h-100 border-0 shadow-sm hover-translate-y">
                      <Card.Body className="p-4">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                          <i className={`${method.icon} fa-lg`}></i>
                        </div>
                        <h4 className="h5">{method.name}</h4>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

            </Col>
          </Row>
        </Container>
      </section>

      {/* Financial Assistance */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <SectionHeader
            subtitle="Support Options"
            title="Financial Assistance"
            description="We're committed to making education accessible to deserving students"
            centered={true}
          />

          <Row className="justify-content-center g-4">
            <Col lg={10}>
              <Row className="g-4">
                <Col md={4}>
                  <Card className="text-center h-100 border-0 shadow-sm hover-translate-y">
                    <Card.Body className="p-4">
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                        <i className="fas fa-medal fa-lg"></i>
                      </div>
                      <h4 className="h5 mb-3">Merit Scholarships</h4>
                      <p className="mb-3 small">Fee concessions based on academic performance in qualifying examinations</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center h-100 border-0 shadow-sm hover-translate-y">
                    <Card.Body className="p-4">
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                        <i className="fas fa-university fa-lg"></i>
                      </div>
                      <h4 className="h5 mb-3">Education Loans</h4>
                      <p className="mb-3 small">Facilitation for obtaining education loans from various nationalized banks</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center h-100 border-0 shadow-sm hover-translate-y">
                    <Card.Body className="p-4">
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                        <i className="fas fa-hand-holding-heart fa-lg"></i>
                      </div>
                      <h4 className="h5 mb-3">Financial Aid</h4>
                      <p className="mb-3 small">Need-based financial assistance for economically disadvantaged students</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeeStructure;