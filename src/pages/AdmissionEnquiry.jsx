import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Alert, Badge } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";

/**
 * Optimized Admission Enquiry page component
 */
const AdmissionEnquiry = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    category: "General",
    message: "",
    hearAbout: ""
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Available courses for dropdown
  const courses = [
    { value: "", label: "Select Programme" },
    { value: "B.Tech-CSE", label: "B.Tech - Computer Science & Engineering" },
    { value: "B.Tech-ECE", label: "B.Tech - Electronics & Communication" },
    { value: "B.Tech-ME", label: "B.Tech - Mechanical Engineering" },
    { value: "B.Tech-CE", label: "B.Tech - Civil Engineering" },
    { value: "B.Tech-EEE", label: "B.Tech - Electrical & Electronics" },
    { value: "B.Tech-IT", label: "B.Tech - Information Technology" }
  ];

  // Categories
  const categories = [
    { value: "General", label: "General" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "OBC", label: "OBC" },
    { value: "EWS", label: "EWS" },
    { value: "Other", label: "Other" }
  ];

  // How did you hear options
  const referralSources = [
    { value: "", label: "Select Option" },
    { value: "website", label: "College Website" },
    { value: "social", label: "Social Media" },
    { value: "newspaper", label: "Newspaper/Advertisement" },
    { value: "alumni", label: "Alumni" },
    { value: "friend", label: "Friend/Family" },
    { value: "education-fair", label: "Education Fair" },
    { value: "school", label: "School/College" },
    { value: "other", label: "Other" }
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    // Clear previous errors
    setError(null);
    setIsSubmitting(true);

    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        category: "General",
        message: "",
        hearAbout: ""
      });
    }, 1500);
  };

  return (
    <div className="admission-enquiry-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Admission Enquiry</h1>
              <p className="lead text-white opacity-90">
                We're here to help with any questions you may have about our admission process
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="g-4">
                <Col lg={7} className="mb-4 mb-lg-0">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4 p-lg-5">
                      {submitted ? (
                        <div className="text-center py-4">
                          <div className="display-1 text-success mb-4">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h3 className="mb-3">Thank You for Your Enquiry!</h3>
                          <p className="mb-4">
                            Your message has been successfully submitted. One of our admission officers will contact you shortly.
                          </p>
                          <p className="mb-4">
                            <Badge bg="primary" className="py-2 px-3">
                              Reference Number: ENQ-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                            </Badge>
                          </p>
                          <Button 
                            variant="primary"
                            text="Submit Another Enquiry"
                            onClick={() => setSubmitted(false)}
                          />
                        </div>
                      ) : (
                        <>
                          <SectionHeader
                            subtitle="Get in Touch"
                            title="Send Us Your Query"
                            description="Fill out the form below and our admissions team will get back to you within 24 hours"
                            centered={false}
                          />

                          {error && (
                            <Alert variant="danger" className="d-flex align-items-center mb-4">
                              <i className="fas fa-exclamation-circle me-2"></i> {error}
                            </Alert>
                          )}
                          
                          <Form onSubmit={handleSubmit}>
                            <Row className="g-3">
                              <Col md={6}>
                                <Form.Group controlId="name">
                                  <Form.Label>
                                    Full Name <span className="text-danger">*</span>
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              
                              <Col md={6}>
                                <Form.Group controlId="email">
                                  <Form.Label>
                                    Email Address <span className="text-danger">*</span>
                                  </Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              
                              <Col md={6}>
                                <Form.Group controlId="phone">
                                  <Form.Label>
                                    Phone Number <span className="text-danger">*</span>
                                  </Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              
                              <Col md={6}>
                                <Form.Group controlId="course">
                                  <Form.Label>
                                    Programme of Interest
                                  </Form.Label>
                                  <Form.Select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                  >
                                    {courses.map((course) => (
                                      <option key={course.value} value={course.value}>
                                        {course.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              
                              <Col md={6}>
                                <Form.Group controlId="category">
                                  <Form.Label>Category</Form.Label>
                                  <Form.Select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                  >
                                    {categories.map((category) => (
                                      <option key={category.value} value={category.value}>
                                        {category.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              
                              <Col md={6}>
                                <Form.Group controlId="hearAbout">
                                  <Form.Label>
                                    How did you hear about us?
                                  </Form.Label>
                                  <Form.Select
                                    name="hearAbout"
                                    value={formData.hearAbout}
                                    onChange={handleChange}
                                  >
                                    {referralSources.map((source) => (
                                      <option key={source.value} value={source.value}>
                                        {source.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              
                              <Col xs={12}>
                                <Form.Group controlId="message">
                                  <Form.Label>
                                    Your Message/Query <span className="text-danger">*</span>
                                  </Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Please describe your query in detail"
                                    rows="4"
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              
                              <Col xs={12}>
                                <Form.Group className="mb-4">
                                  <Form.Check
                                    type="checkbox"
                                    id="privacyPolicy"
                                    label={
                                      <span>
                                        I have read and agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to the processing of my personal information.
                                      </span>
                                    }
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              
                              <Col xs={12}>
                                <div className="d-grid">
                                  <Button
                                    variant="primary"
                                    text={isSubmitting ? "Submitting..." : "Submit Enquiry"}
                                    type="submit"
                                    disabled={isSubmitting}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col lg={5}>
                  <div className="h-100 d-flex flex-column gap-4">
                    <Card className="border-0 shadow-sm bg-primary text-white">
                      <Card.Body className="p-4">
                        <h3 className="mb-4">Contact Information</h3>
                        <div className="d-flex mb-3">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", flexShrink: 0 }}>
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div>
                            <h5 className="mb-1 fs-6">Address</h5>
                            <p className="mb-0">Sanskrithi School of Engineering<br />Beedupalli Knowledgepark, Behind SSSIHMS,<br />Puttaparthi, Sri Sathya Sai District, AP - 515134</p>
                          </div>
                        </div>
                        
                        <div className="d-flex mb-3">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", flexShrink: 0 }}>
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div>
                            <h5 className="mb-1 fs-6">Email</h5>
                            <p className="mb-0">enquiry@sseptp.org / hr@sseptp.org</p>
                          </div>
                        </div>
                        
                        <div className="d-flex mb-3">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", flexShrink: 0 }}>
                            <i className="fas fa-phone-alt"></i>
                          </div>
                          <div>
                            <h5 className="mb-1 fs-6">Phone</h5>
                            <p className="mb-0">+91 9100064545 / 74545</p>
                          </div>
                        </div>
                        
                        <div className="d-flex">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", flexShrink: 0 }}>
                            <i className="fas fa-clock"></i>
                          </div>
                          <div>
                            <h5 className="mb-1 fs-6">Office Hours</h5>
                            <p className="mb-0">Monday to Saturday: 9:00 AM to 5:00 PM</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="p-4">
                        <h4 className="mb-3">Admission Helplines</h4>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0 px-0 py-2 d-flex justify-content-between">
                            <span>Admissions Office</span>
                            <span className="text-primary fw-bold">+91 9100064545</span>
                          </li>
                          <li className="list-group-item border-0 px-0 py-2 d-flex justify-content-between">
                            <span>Alternative Contact</span>
                            <span className="text-primary fw-bold">9100074545</span>
                          </li>
                          <li className="list-group-item border-0 px-0 py-2 d-flex justify-content-between">
                            <span>Email Enquiry</span>
                            <span className="text-primary fw-bold">enquiry@sseptp.org</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="p-4">
                        <h4 className="mb-3">Quick Links</h4>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">
                            <a href="/admissions/overview" className="text-decoration-none">
                              <i className="fas fa-chevron-right text-primary me-2"></i> Admissions Overview
                            </a>
                          </li>
                          <li className="mb-2">
                            <a href="/admissions/process" className="text-decoration-none">
                              <i className="fas fa-chevron-right text-primary me-2"></i> Application Process
                            </a>
                          </li>
                          <li className="mb-2">
                            <a href="/admissions/fees" className="text-decoration-none">
                              <i className="fas fa-chevron-right text-primary me-2"></i> Fee Structure
                            </a>
                          </li>
                          <li className="mb-2">
                            <a href="/academics/scholarship" className="text-decoration-none">
                              <i className="fas fa-chevron-right text-primary me-2"></i> Scholarships
                            </a>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <Container className="py-4">
          <h2 className="display-5 fw-bold mb-3">Experience Our Campus Virtually</h2>
          <p className="lead mb-4 opacity-90">
            Can't visit us in person? Take a virtual tour of our campus facilities, classrooms, laboratories, and more.
          </p>
          <Button
            variant="cta-primary"
            text="Take Virtual Tour"
            href="/campus/virtual-tour"
            icon="fas fa-play-circle"
          />
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdmissionEnquiry;