import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";

// Import images from your collection
import ssecampus from "../assets/ssecampus.jpg";
import campusGreenary from "../assets/campusGreenary.jpg";
import campusCoridor from "../assets/campusCoridor.jpg";
import campusRoad from "../assets/campusRoad.jpg";
import outside from "../assets/outside.jpg";
import classrooms from "../assets/classrooms.jpg";
import classroomSSE from "../assets/classroomSSE.jpg";
import classroomStylish2 from "../assets/classroomStylish2.jpg";
import classroomStylish3 from "../assets/classroomStylish3.jpg";
import classroomStylish4 from "../assets/classroomStylish4.jpg";
import computerlab from "../assets/computerlab.jpg";
import library from "../assets/library.jpg";
import lab1 from "../assets/lab1.jpg";
import aluminicert from "../assets/files/aluminicert.pdf"

/**
 * Optimized About page focused on college environment
 */
const College = () => {
  return (
    <div className="about-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section 
        className="page-header mb-0" 
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.8), rgba(142, 61, 25, 0.8)), url(${campusRoad})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">About SSE</h1>
              <p className="lead text-white opacity-90">
                Discover our unique environment where tradition meets innovation
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* College Overview Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Badge bg="primary" className="mb-3 px-3 py-2">NAAC 'A' Grade Accredited</Badge>
              <h2 className="display-6 fw-bold mb-4">A Unique Educational Environment</h2>
              <p className="mb-4">
                Located in Puttaparthi, the center of Sathya Sai District, Sanskriti School of Engineering 
                offers a distinctive learning environment that blends academic excellence with timeless values. 
                Our campus benefits from the serene atmosphere of this renowned spiritual center, providing 
                students with an ideal setting for focused learning and personal growth.
              </p>
              <p>
                With effect from February 1, 2024, SSE has been accredited with 'A' Grade by the National 
                Assessment and Accreditation Council (NAAC) with a score of 3.17 out of 4, affirming our 
                commitment to quality education.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={ssecampus} 
                alt="SSE Campus" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>

          {/* Campus Highlights */}
          <SectionHeader
            subtitle="Campus Highlights"
            title="What Makes SSE Special"
            description="Experience a vibrant campus with world-class facilities and enriching environment"
            centered={true}
          />

          <Row className="g-4 mb-5">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-translate-y">
                <Card.Body className="p-4 text-center">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <h3 className="h4 mb-3">Strategic Location</h3>
                  <p className="mb-0">
                    Situated in Puttaparthi, a globally recognized town with Super Specialty Hospitals, 
                    Airport, Railway Station, and 24/7 utilities, providing students with a peaceful yet 
                    well-connected environment.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-translate-y">
                <Card.Body className="p-4 text-center">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-graduation-cap fa-2x"></i>
                  </div>
                  <h3 className="h4 mb-3">Quality Education</h3>
                  <p className="mb-0">
                    NAAC 'A' Grade accredited institution offering innovative curriculum with 
                    focus on practical skills, research opportunities, and industry-relevant training 
                    to prepare future-ready engineers.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-translate-y">
                <Card.Body className="p-4 text-center">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-users fa-2x"></i>
                  </div>
                  <h3 className="h4 mb-3">Holistic Development</h3>
                  <p className="mb-0">
                    Beyond academics, we emphasize character building, ethical values, and 
                    community service, preparing students to become responsible citizens who contribute 
                    positively to society.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Campus Facilities */}
          <Row className="align-items-center mb-5">
            <Col lg={5} className="mb-4 mb-lg-0">
              <h2 className="h2 fw-bold mb-4">Modern Campus Facilities</h2>
              <p className="mb-4">
                Our campus features state-of-the-art infrastructure designed to provide an optimal 
                learning environment. From well-equipped laboratories to digital libraries, 
                every facility is crafted to enhance the educational experience.
              </p>
              <div className="mb-4">
                <div className="d-flex mb-3">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Advanced Laboratories</h5>
                    <p className="mb-0 text-muted small">Cutting-edge equipment for practical learning</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Digital Library</h5>
                    <p className="mb-0 text-muted small">Extensive collection of digital resources</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Smart Classrooms</h5>
                    <p className="mb-0 text-muted small">Technology-integrated learning spaces</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1">Recreational Spaces</h5>
                    <p className="mb-0 text-muted small">Sports facilities and student activity areas</p>
                  </div>
                </div>
              </div>
              <Button
                variant="primary"
                text="Explore Facilities"
                href="/life/campus-facilities"
                icon="fas fa-arrow-right"
              />
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                <Col sm={6}>
                  <img 
                    src={lab1} 
                    alt="Laboratory Facility" 
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col sm={6}>
                  <img 
                    src={library} 
                    alt="Library Facility" 
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col sm={6}>
                  <img 
                    src={classroomStylish2} 
                    alt="Classroom Facility" 
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col sm={6}>
                  <img 
                    src={campusGreenary} 
                    alt="Campus View" 
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Alumni Association Certificate Section */}
          <SectionHeader
            subtitle="Alumni Network"
            title="Alumni Association Certificate"
            description="Official recognition of our strong alumni network and community"
            centered={true}
          />

          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }}>
                    <i className="fas fa-certificate fa-3x"></i>
                  </div>
                  <h3 className="h4 mb-3">Official Alumni Association Certificate</h3>
                  <p className="mb-4 text-muted">
                    Our Alumni Association plays a vital role in maintaining connections between graduates 
                    and the institution. The official certificate demonstrates our commitment to fostering 
                    lifelong relationships with our alumni community.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row">
                    <Button
                      variant="primary"
                      text="View Certificate"
                      href={aluminicert}  // Replace with your PDF link
                      icon="fas fa-eye"
                      target="_blank"
                    />
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Quick Links */}
          <Card className="border-0 shadow-sm mt-5">
            <Card.Body className="p-4">
              <h4 className="mb-4 text-center">Quick Links</h4>
              <Row className="g-3">
                {[
                  { title: "Our Heritage", link: "/about/heritage", icon: "fas fa-landmark" },
                  { title: "Vision & Mission", link: "/about/vision-mission", icon: "fas fa-eye" },
                  { title: "Chairman Message", link: "/about/chairman-message", icon: "fas fa-user-tie" },
                  { title: "Principal Message", link: "/about/principal-message", icon: "fas fa-user-graduate" },
                  { title: "Secretary Message", link: "/about/secretary-message", icon: "fas fa-user-shield" },
                  { title: "Industry Advisory", link: "/about/industry-interface", icon: "fas fa-industry" },
                  { title: "Affiliation & Recognition", link: "/about/recognition", icon: "fas fa-certificate" },
                ].map((link, index) => (
                  <Col md={4} key={index}>
                    <a href={link.link} className="text-decoration-none">
                      <div className="bg-light p-3 rounded d-flex align-items-center hover-translate-y">
                        <i className={`${link.icon} text-primary me-3`}></i>
                        <span>{link.title}</span>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 text-white text-center"
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.85), rgba(142, 61, 25, 0.85)), url(${campusCoridor})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="py-4">
          <h2 className="display-5 fw-bold mb-3">Experience SSE Yourself</h2>
          <p className="lead mb-4 opacity-90">
            Visit our campus to discover the perfect environment for your educational journey
          </p>
          <div className="d-flex gap-3 flex-column flex-sm-row justify-content-center">
            <Button
              variant="cta-primary"
              text="Schedule a Visit"
              href="/campus/visit"
              icon="fas fa-map-marker-alt"
            />
            
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default College;