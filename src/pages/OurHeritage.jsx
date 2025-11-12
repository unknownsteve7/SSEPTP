import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const OurHeritage = () => {
  return (
    <div className="heritage-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Our Heritage</h1>
              <p className="lead text-white opacity-90">
                The story of our roots and inspiration
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Heritage Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Badge bg="primary" className="mb-3 px-3 py-2">NAAC 'A' Grade Accredited</Badge>
              <h2 className="fw-bold mb-4">Inspiration and Beginnings</h2>
              <p className="mb-4">
                Sanskrithi School of Engineering is located in Puttaparthi, the center of the newly formed Sathya Sai District. Puttaparthi has been one of the most well-known global spiritual villages over the century, blessed by Bhagawan Sri Sathya Sai Baba. Prashanthi Nilayam, "The Abode of Peace," attracts millions of devotees from across the world.
              </p>
              <p className="mb-4">
                The foundation of development—spiritual, social, and economic—was carefully built through the unconditional love and sacrifice of Bhagawan Sri Sathya Sai Baba. Model institutions in education, healthcare, and water supply were established to address fundamental human needs. Over time, Puttaparthi transformed from a humble village of just 20 families in the 1920s into a comprehensive resource facility featuring Super Specialty Hospitals, an Airport, Railway Station, and 24/7 utilities.
              </p>
              <p>
                With effect from February 1, 2024, Sanskrithi School of Engineering has been accredited with an "A" Grade by the NAAC with a score of 3.17 out of 4, affirming our commitment to educational excellence.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://i.pinimg.com/736x/00/87/50/0087502563d4331bea33323f19fc8d1a.jpg" 
                alt="Puttaparthi Heritage" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={12}>
              <div className="bg-light p-4 rounded shadow-sm">
                <h4 className="fw-bold mb-3">Our Enduring Mission</h4>
                <p className="mb-0">
                  It is a never-ending endeavor of Sanskrithi to take the message of Bhagawan to the masses in rural areas of the country and support bringing students to the mainstream of development, helping them become able and responsible citizens. SSE constantly strives to carry on the tradition of innovative thinking, taking the heritage of this auspicious place to newer heights on the global map of education and research.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurHeritage;