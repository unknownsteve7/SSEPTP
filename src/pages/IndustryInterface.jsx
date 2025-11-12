import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";

// Import images
import techMahindra from '../assets/techMahindra.jpg';
import paul from '../assets/ssefaculty/cse/paul.jpg'; // Placeholder for Paul Spiesberger's image

const IndustryInterface = () => {
  // Industry Advisory Board members data
  const advisoryBoardMembers = [
    {
      id: 1,
      name: "Univ.Prof. DI Dr. Thomas Grechenig",
      role: "Management, RISE, Europe",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/TG.jpeg"
    },
    {
      id: 2,
      name: "Mr. Paul Spiesberger",
      role: "RISE, Europe",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/paul.jpg"
    },
    {
      id: 3,
      name: "Mr. Anantha Murthy",
      role: "Global Delivery Partner, TCS",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/anat1.jpg"
    },
    {
      id: 4,
      name: "Mr. Subramanyana Manjunath",
      role: "Director, CGI",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/Subramnya-Manjunath.jpg"
    },
    {
      id: 5,
      name: "Mr. Sohan Dutta",
      role: "Corporate Strategy & Business Enablement, HCLTech",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/Sohan-Dutta.jpg"
    },
    {
      id: 6,
      name: "Ms. Ritu Sharma",
      role: "Head of Operational Excellence, Brillio",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/ritusharma.jpg"
    },
    {
      id: 7,
      name: "Mr. Suresh Nellamangala",
      role: "Senior Manager, HP",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/suresh-nellamangala.png"
    },
    {
      id: 8,
      name: "Ms. Shobhana K",
      role: "Campus Recruitment, Mphasis",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/SK.jpg"
    },
    {
      id: 9,
      name: "Mr. Bala Thiagarajan",
      role: "Vice-President, Capgemini",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-2.21.04-PM.jpeg"
    }
  ];


  return (
    <div className="industry-interface-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Industry Advisory</h1>
              <p className="lead text-white opacity-90">
                Bridging the gap between academia and industry
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industry Collaboration Overview */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Badge bg="primary" className="mb-3 px-3 py-2">Strategic Partnership</Badge>
              <h2 className="fw-bold mb-4">Industry Collaboration</h2>
              <p className="mb-4">
                At Sanskriti School of Engineering, we believe in the power of industry-academia partnerships. Our robust industry interface program ensures that students are exposed to real-world challenges and industry practices through various initiatives.
              </p>
              <p>
                We have established partnerships with leading organizations across various sectors to facilitate internships, guest lectures, industrial visits, and collaborative research projects. These connections help our students stay updated with the latest industry trends and enhance their employability.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={techMahindra} 
                alt="Industry Collaboration" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industry Advisory Board Section */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <SectionHeader
            subtitle="Expert Guidance"
            title="Industry Advisory Board"
            description="The Industry Advisory Board is an integral part of our institution, bridging the gap between academia and the evolving industry landscape. Composed of seasoned professionals, industry leaders, and experts from various sectors, the board plays a crucial role in shaping our academic programs to align with current industry trends and demands. Their insights and guidance ensure that our curriculum stays relevant and forward-thinking, preparing students to meet the challenges of the modern workforce."
            centered={true}
          />

          <Row className="g-4 mt-3">
            {advisoryBoardMembers.map(member => (
              <Col lg={4} md={6} key={member.id} className="mb-4">
                <Card className="border-0 shadow-sm h-100 hover-translate-y">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle overflow-hidden me-3" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h4 className="h5 mb-1">{member.name}</h4>
                        <p className="text-primary mb-0 small">{member.role}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IndustryInterface;