import React from "react";
import { Container, Row, Col, Card, Tab, Nav } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import chairmanMessage from "../assets/ChairmanMessage.jpg";
import TG from "../assets/TG.jpeg";
import Principal from "../assets/principal.jpg";
import Secretary from "../assets/secretary.jpg";
// Import more staff photos as needed
import staff from "../assets/staff.jpg";
import girlsTrio from "../assets/girlsTrio.jpg";
import viceprincipaldirectoradmissions from "../assets/viceprincipal&directoradmissions.jpeg";

/**
 * Leadership Component for About page
 */
const Leadership = () => {
  return (
    <div className="leadership-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Our Leadership</h1>
              <p className="lead text-white opacity-90">
                Meet the visionaries and dedicated professionals guiding
                Sanskriti School of Engineering
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership Message Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <SectionHeader
            subtitle="Leadership Messages"
            title="Guided by Vision & Excellence"
            description="Words from our institutional leaders"
            centered={true}
          />
          
          {/* Chairman Vijay Reddy */}
          <Row className="align-items-center mb-5">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <div
                  className="bg-primary position-absolute"
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "15px",
                    left: "15px",
                    zIndex: 0,
                    borderRadius: "10px",
                  }}
                ></div>
                <img
                  src={chairmanMessage}
                  alt="Chairman Vijay Reddy"
                  className="img-fluid rounded shadow position-relative"
                  style={{ zIndex: 1 }}
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="h4 mb-1">Vijay Reddy</h3>
                <p className="text-primary fw-medium mb-2">
                  Chairman – Sanskrithi Group
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="mailto:chairman@sanskrithibschool.com"
                    className="btn btn-sm btn-outline-primary rounded-circle"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vijay-reddy"
                    className="btn btn-sm btn-outline-primary rounded-circle"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="ps-lg-4">
                <div className="mb-4">
                  <span className="badge bg-primary mb-2 px-3 py-2">
                    Message from the Chairman
                  </span>
                  <h2 className="display-6 fw-bold mb-4">
                    Bringing Glory Back to Engineering Education
                  </h2>
                </div>
                <p className="mb-3">
                  Greetings from the Sanskrithi School of Engineering -
                  Puttaparthi. At the outset, let me first congratulate you
                  all for opting for the Engineering domain as your future
                  career.
                </p>
                <p className="mb-3">
                  This college is a part of the group of institutions we are
                  developing under the banner of "Sanskrithi Group." At a time
                  when engineering education is said to be in doldrums in the
                  state of AP, we have taken a bold step to bring the glory
                  back to the Engineering Profession with international
                  standards and industry-collaborations for excellence in
                  education and employment for the aspiring youth.
                </p>
                <p className="mb-0">
                  At SSE we have created world-class facilities for best of
                  the best education in Engineering with professionally
                  qualified faculty and state-of-the-art laboratories and
                  infrastructure.
                </p>
              </div>
            </Col>
          </Row>

          {/* Chairman Academics Dr. Thomas Grechenig */}
          <Row className="align-items-center py-4 border-top">
            <Col lg={4} className="mb-4 mb-lg-0 order-lg-last">
              <div className="position-relative">
                <div
                  className="bg-primary position-absolute"
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "15px",
                    right: "15px",
                    zIndex: 0,
                    borderRadius: "10px",
                  }}
                ></div>
                <img
                  src={TG}
                  alt="Dr. Thomas Grechenig"
                  className="img-fluid rounded shadow position-relative"
                  style={{ zIndex: 1 }}
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="h4 mb-1">Dr. Thomas Grechenig</h3>
                <p className="text-primary fw-medium mb-2">
                  Chairman Academics
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="mailto:thomas.grechenig@sse.edu"
                    className="btn btn-sm btn-outline-primary rounded-circle"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thomas-grechenig"
                    className="btn btn-sm btn-outline-primary rounded-circle"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="pe-lg-4">
                <div className="mb-4">
                  <span className="badge bg-primary mb-2 px-3 py-2">
                    Academic Leadership
                  </span>
                  <h2 className="display-6 fw-bold mb-4">
                    Excellence Through Collaboration
                  </h2>
                </div>
                <blockquote className="border-start border-primary ps-4 mb-4" style={{ borderLeftWidth: "4px" }}>
                  <p className="lead fst-italic mb-0">
                    "We are cognizant that our success arises from the joint
                    endeavours of our talented students, dedicated faculty
                    and continued confidence of recruiters in the skills of
                    SSE graduates."
                  </p>
                </blockquote>
                <p className="mb-3">
                  Under our academic leadership, we strive to foster an environment of innovation, research, and practical learning. Our curriculum is continuously updated to reflect industry demands and global standards.
                </p>
                <p className="mb-0">
                  Our academic programs are designed to meet international
                  standards while addressing the evolving needs of the
                  industry and preparing students for global opportunities.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership Team Section */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <SectionHeader
            subtitle="Leadership Team"
            title="Guided by Experience & Excellence"
            description="Meet our accomplished administrative and academic leaders driving SSE's success"
            centered={true}
          />

          <Tab.Container id="leadership-tabs" defaultActiveKey="administration">
            <Nav className="nav-pills justify-content-center mb-5">
              <Nav.Item>
                <Nav.Link
                  eventKey="administration"
                  className="px-4 py-2 mx-2 mb-2 rounded-pill"
                  style={{
                    backgroundColor: "#F9843D",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Administration
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* Administration Tab */}
              <Tab.Pane eventKey="administration">
                <Row className="g-4">
                  {/* Secretary Card */}
                  <Col lg={4} md={6}>
                    <Card className="border-0 shadow-sm h-100 hover-translate-y">
                      <Card.Body className="p-4">
                        <div className="text-center mb-4">
                          <div
                            className="rounded-circle overflow-hidden mx-auto mb-3"
                            style={{ width: "150px", height: "150px" }}
                          >
                            <img
                              src={Secretary}
                              alt="Pavan Reddy"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="h4 mb-1">Pavan Reddy</h3>
                          <p className="text-primary fw-medium mb-3">
                            Secretary
                          </p>
                        </div>
                        <p className="mb-4 text-center">
                          Overseeing administrative operations, Mr. Reddy
                          ensures seamless functioning of the institution with
                          efficient management systems.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Principal Card */}
                  <Col lg={4} md={6}>
                    <Card className="border-0 shadow-sm h-100 hover-translate-y">
                      <Card.Body className="p-4">
                        <div className="text-center mb-4">
                          <div
                            className="rounded-circle overflow-hidden mx-auto mb-3"
                            style={{ width: "150px", height: "140px" }}
                          >
                            <img
                              src={Principal}
                              alt="Dr. S Hemachandra"
                              className="img-fluid"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <h3 className="h4 mb-1">Dr. S Hemachandra</h3>
                          <p className="text-primary fw-medium mb-3">
                            Principal
                          </p>
                        </div>
                        <p className="mb-4 text-center">
                          With over 25 years of experience in academia and
                          research, Dr. Hemachandra leads our institution with a focus
                          on academic excellence and innovation.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Director of Admissions */}
                  <Col lg={4} md={6}>
                    <Card className="border-0 shadow-sm h-100 hover-translate-y">
                      <Card.Body className="p-4">
                        <div className="text-center mb-4">
                          <div
                            className="rounded-circle overflow-hidden mx-auto mb-3"
                            style={{ width: "150px", height: "150px" }}
                          >
                            <img
                              src={viceprincipaldirectoradmissions}
                              alt="Hari Krishnan S"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="h4 mb-1">Hari Krishnan S</h3>
                          <p className="text-primary fw-medium mb-3">
                            Vice Principal & Director of Admissions
                          </p>
                        </div>
                        <p className="mb-4 text-center">
                          Leading the admissions team, Mr. Krishnan guides
                          prospective students through the application process
                          and ensures a diverse, talented student body.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="mb-4 text-center">Quick Links</h4>
                  <Row className="g-3">
                    {[
                      {
                        title: "Our Heritage",
                        link: "/about/heritage",
                        icon: "fas fa-landmark",
                      },
                      {
                        title: "Vision & Mission",
                        link: "/about/vision-mission",
                        icon: "fas fa-eye",
                      },
                      {
                        title: "Chairman Message",
                        link: "/about/chairman-message",
                        icon: "fas fa-user-tie",
                      },
                      {
                        title: "Principal Message",
                        link: "/about/principal-message",
                        icon: "fas fa-user-graduate",
                      },
                      {
                        title: "Secretary Message",
                        link: "/about/secretary-message",
                        icon: "fas fa-user-shield",
                      },
                      {
                        title: "Industry Advisory",
                        link: "/about/industry-interface",
                        icon: "fas fa-industry",
                      },
                      {
                        title: "Affiliation & Recognition",
                        link: "/about/recognition",
                        icon: "fas fa-certificate",
                      },
                    ].map((link, index) => (
                      <Col md={4} key={index}>
                        <a href={link.link} className="text-decoration-none">
                          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center hover-translate-y">
                            <i className={`${link.icon} text-primary me-3`}></i>
                            <span>{link.title}</span>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
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

export default Leadership;