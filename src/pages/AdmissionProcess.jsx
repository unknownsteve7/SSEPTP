import React from "react";
import { Container, Row, Col, Badge, Card, Table, Accordion, Alert } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

/**
 * Optimized Admission Process page component
 * Displays streamlined information about the admission process at SSE
 */
function AdmissionProcess() {
  // Application deadlines
  const applicationDeadlines = [
    { id: 1, round: "Early Action Round", deadline: "January 15, 2025", notification: "February 28, 2025", status: "Open" },
    { id: 2, round: "Regular Round - Phase 1", deadline: "March 31, 2025", notification: "April 25, 2025", status: "Open" },
    { id: 3, round: "Regular Round - Phase 2", deadline: "May 15, 2025", notification: "June 10, 2025", status: "Coming Soon" },
    { id: 4, round: "Final Round", deadline: "June 30, 2025", notification: "July 15, 2025", status: "Coming Soon" }
  ];

  // Required documents
  const requiredDocuments = [
    "Completed Online Application Form",
    "Class 10th Mark Sheet and Certificate",
    "Class 12th Mark Sheet and Certificate",
    "Valid Score Card (JEE Main/State CET)",
    "Domicile/Migration Certificate (if applicable)",
    "Category Certificate (for reserved categories)",
    "Recent Passport-size Photographs",
    "Aadhar Card"
  ];

  // FAQs about admission process
  const processFaqs = [
    {
      id: 1,
      question: "Can I apply to multiple B.Tech programs with a single application?",
      answer: "Yes, you can apply to up to three B.Tech programs with a single application. You'll need to indicate your program preferences in order of priority during the application process."
    },
    {
      id: 2,
      question: "Is there any relaxation in cutoff marks for reserved category students?",
      answer: "Yes, as per government norms, there is a relaxation of 5% in the cutoff marks for SC/ST/OBC and other reserved category students. Please refer to the reservation policy section for detailed information."
    },
    {
      id: 3,
      question: "How are seats allocated if I qualify for multiple programs?",
      answer: "Seat allocation is done based on your merit rank, program preference order, and seat availability. You will be allocated to the highest preference program for which you qualify based on your rank."
    },
    {
      id: 4,
      question: "Can I upgrade my branch after admission?",
      answer: "Branch change is possible at the beginning of the second year (third semester) based on academic performance in the first year and seat availability in the desired branch. A minimum CGPA of 8.0 is required to be eligible for branch change."
    }
  ];

  return (
    <div className="admission-process-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Admission Process</h1>
              <p className="lead text-white opacity-90">
                A comprehensive guide to our streamlined admission process for undergraduate engineering programs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Timeline Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Application Journey"
            title="Step-by-Step Admission Process"
            description="Follow these simple steps to join the Sanskriti School of Engineering family"
            centered={true} />

          <Row className="g-4 justify-content-center">
            <Col lg={10}>
              <Row className="g-4">
                {[
                  {
                    step: 1,
                    title: "Online Registration",
                    icon: "fas fa-user-edit",
                    description: "Create an account on our admission portal and fill out the basic registration form with your personal details."
                  },
                  {
                    step: 2,
                    title: "Complete Application",
                    icon: "fas fa-file-alt",
                    description: "Fill out the comprehensive application form with your academic history, entrance exam details, and program preferences."
                  },
                  {
                    step: 3,
                    title: "Document Upload",
                    icon: "fas fa-cloud-upload-alt",
                    description: "Upload all required documents in PDF or JPG format. Ensure all documents are clearly scanned."
                  },
                  {
                    step: 4,
                    title: "Application Fee Payment",
                    icon: "fas fa-rupee-sign",
                    description: "Pay the non-refundable application processing fee through our secure payment gateway."
                  },
                  {
                    step: 5,
                    title: "Application Review",
                    icon: "fas fa-user-check",
                    description: "Our admissions committee will review your application based on academic merit and entrance exam scores."
                  },
                  {
                    step: 6,
                    title: "Merit List & Counselling",
                    icon: "fas fa-list-ol",
                    description: "Final merit lists will be published and selected candidates will participate in the counselling process."
                  },
                  {
                    step: 7,
                    title: "Fee Payment & Enrollment",
                    icon: "fas fa-check-circle",
                    description: "Confirm your acceptance by paying the first-semester fees and complete the enrollment process."
                  }
                ].map((step, index) => (
                  <Col md={6} lg={4} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-translate-y">
                      <Card.Body className="p-4 text-center">
                        <div className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "65px", height: "65px" }}>
                          <i className={`${step.icon} fa-lg`}></i>
                        </div>
                        <Badge bg="primary" className="mb-3 px-3 py-2">Step {step.step}</Badge>
                        <h3 className="h5 mb-3">{step.title}</h3>
                        <p className="text-muted mb-0 small">{step.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-5">
                <Button
                  variant="primary"
                  text="Apply Now"
                  href="/admissions/enquiry"
                  icon="fas fa-arrow-right" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Required Documents */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Documentation"
            title="Required Documents"
            description="Prepare these documents in advance to ensure a smooth application process"
            centered={true} />

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Row className="g-4">
                    <Col md={6}>
                      <h4 className="mb-3">
                        <i className="fas fa-file-alt text-primary me-2"></i> Document Checklist
                      </h4>
                      <ul className="list-group list-group-flush">
                        {requiredDocuments.map((doc, index) => (
                          <li key={index} className="list-group-item px-0 py-2 border-0 d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    <Col md={6}>
                      <h4 className="mb-3">
                        <i className="fas fa-exclamation-triangle text-primary me-2"></i> Important Notes
                      </h4>
                      <Card className="bg-light border-0">
                        <Card.Body>
                          <ul className="mb-0 ps-3">
                            <li className="mb-2">All documents must be in PDF or JPG format (max 2MB each)</li>
                            <li className="mb-2">Documents in regional languages must include English translation</li>
                            <li className="mb-2">Original documents will be verified during admission</li>
                            <li className="mb-0">Falsification of any document will result in admission cancellation</li>
                          </ul>
                        </Card.Body>
                      </Card>

                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our admission process"
            centered={true} />

          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" className="shadow-sm">
                {processFaqs.map((faq, index) => (
                  <Accordion.Item key={faq.id} eventKey={index.toString()} className="border-0 mb-3">
                    <Accordion.Header>
                      <span className="fw-medium">{faq.question}</span>
                    </Accordion.Header>
                    <Accordion.Body className="bg-light">
                      <p className="mb-0">{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdmissionProcess;