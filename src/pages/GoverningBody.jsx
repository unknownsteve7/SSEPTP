import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const GoverningBody = () => {
  // Members of the governing body
  const members = [
    { id: 1, name: "Mr. B. Vijay Reddy", designation: "Founder & Chairman", affiliation: "SSE Trust" },
    { id: 2, name: "Sri B Parthasaradhi Reddy", designation: "Vice – Chairman", affiliation: "SSE Trust" },
    { id: 3, name: "Mr. S Pavan Reddy", designation: "Secretary", affiliation: "SSE Trust" },
    { id: 4, name: "Ms. Rajitha", designation: "Joint – Secretary", affiliation: "SSE Trust" },
    { id: 5, name: "Ms. Priya", designation: "Treasurer", affiliation: "SSE Trust" },
    { id: 6, name: "Mrs. B Sivamma", designation: "Executive Member", affiliation: "SSE Trust" },
    { id: 7, name: "Mr. B Venugopal Reddy", designation: "Executive Member", affiliation: "SSE Trust" }
  ];

  return (
    <div className="governing-body-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header mb-0">
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Governing Body</h1>
              <p className="lead text-white opacity-90">
                Meet the leadership guiding our institution
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Governing Body Content */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Our Governance Structure</h2>
              <p className="mb-4">
                The Governing Body of Sanskriti School of Engineering is responsible for strategic direction, policy formulation, and oversight of the institution's operations. Comprising distinguished leaders, the body ensures that SSE maintains its commitment to educational excellence.
              </p>
              <p>
                Regular meetings of the Governing Body are held to review the institution's progress, approve key initiatives, and ensure compliance with regulatory requirements. This governance structure enables SSE to adapt to changing educational landscapes while staying true to its core values.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Governing Body Meeting" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>

          {/* Members Table */}
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className="fw-bold mb-4">Members of the Governing Body</h3>
              <div className="table-responsive">
                <Table className="table-hover shadow-sm">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-3">Name</th>
                      <th className="py-3">Designation</th>
                      <th className="py-3">Affiliation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map(member => (
                      <tr key={member.id}>
                        <td className="py-3">{member.name}</td>
                        <td className="py-3">{member.designation}</td>
                        <td className="py-3">{member.affiliation}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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

export default GoverningBody;