import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

/**
 * IQAC (Internal Quality Assurance Cell) Page Component
 * Displays mandatory disclosure documents in a grid layout
 */
const IQAC = () => {
  // Mandatory disclosure documents data
  const disclosureDocuments = [
    {
      id: 1,
      title: "Mandatory Disclosures-AICTE",
      icon: "fas fa-file-alt",
      color: "var(--sse-primary)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2025/04/Mandatory-Disclosure-23-03-2024-2.pdf"
    },
    {
      id: 2,
      title: "Sec-2(f) UGC Act, 1956",
      icon: "fas fa-file-contract",
      color: "var(--sse-blue)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2023/05/SSE-UGC-2F-certificate.pdf"
    },
    {
      id: 3,
      title: "Audit Statements",
      icon: "fas fa-file-invoice",
      color: "var(--sse-green)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2023/08/2021-2022.pdf"
    },
    {
      id: 4,
      title: "NIRF",
      icon: "fas fa-award",
      color: "var(--sse-yellow)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2023/05/NIRF-2023.pdf"
    },
    {
      id: 5,
      title: "ISO 9001",
      icon: "fas fa-certificate",
      color: "var(--sse-teal)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2023/06/SSE-ISO-2023.pdf"
    },
    {
      id: 6,
      title: "ISO 14001",
      icon: "fas fa-leaf",
      color: "var(--sse-green)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2023/06/14001-SANSKRITHI-SCHOOL-OF-ENGNIEERING.pdf"
    },
    {
      id: 7,
      title: "AICTE (EoA)",
      icon: "fas fa-stamp",
      color: "var(--sse-red)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2024/09/EOA-Report-2024-2025.pdf"
    },
    {
      id: 8,
      title: "JNTUA affiliation orders",
      icon: "fas fa-university",
      color: "var(--sse-purple)",
      pdfLink: "https://myslidersin.files.wordpress.com/2023/06/2022-23.pdf"
    },
    {
      id: 10,
      title: "Strategic plan",
      icon: "fas fa-chess",
      color: "var(--sse-primary)",
      pdfLink: "https://www.sseptp.org/wp-content/uploads/2023/08/6.2.1-file-no-3-Strategic-plan.pdf"
    }
  ];

  return (
    <div className="iqac-page bg-light">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">IQAC</h1>
              <p className="lead text-white opacity-90">
                Internal Quality Assurance Cell - Mandatory Disclosures
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          {/* About IQAC */}
          <Row className="mb-5">
            <Col lg={12}>
              <SectionHeader
                subtitle="Quality Assurance"
                title="About IQAC"
                description="The Internal Quality Assurance Cell (IQAC) at Sanskriti School of Engineering works to maintain and enhance academic quality and institutional effectiveness."
                centered={false}
              />
              
              <p className="mb-4">
                The primary aim of IQAC is to develop a system for conscious, consistent and catalytic action 
                to improve the academic and administrative performance of the institution. IQAC promotes measures 
                for institutional functioning towards quality enhancement through internalization of quality culture 
                and institutionalization of best practices.
              </p>
              
              <div className="note-box mb-5">
                <div className="note-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="note-content">
                  <h4>IQAC Vision</h4>
                  <p>
                    To ensure quality culture as the prime concern for the Higher Education Institutions through 
                    institutionalizing and internalizing all the initiatives taken with internal and external support.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Mandatory Disclosure Documents */}
          <SectionHeader
            subtitle="Documentation"
            title="Mandatory Disclosures"
            description="Access all mandatory disclosures and important institutional documents"
            centered={true}
          />
          
          <Row className="g-4 mb-5">
            {disclosureDocuments.map((document) => (
              <Col md={4} key={document.id}>
                <Card className="h-100 border-0 shadow-sm hover-translate-y">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div 
                        className="rounded-circle me-3 d-flex align-items-center justify-content-center" 
                        style={{ 
                          width: "50px", 
                          height: "50px", 
                          backgroundColor: document.color,
                          color: "white" 
                        }}
                      >
                        <i className={`${document.icon}`}></i>
                      </div>
                      <h3 className="h5 mb-0">{document.title}</h3>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <a 
                        href={document.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-outline-primary"
                      >
                        View <i className="fas fa-eye ms-1"></i>
                      </a>
                      <a 
                        href={document.pdfLink} 
                        download 
                        className="btn btn-sm btn-primary"
                      >
                        Download <i className="fas fa-download ms-1"></i>
                      </a>
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

export default IQAC;