import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../common/Button";
import campusCoridor from "../../assets/campusCoridor.jpg";
/**
 * Placement section component for homepage - Bootstrap version
 */
const PlacementSection = ({
  subtitle = "Career Success",
  title = "Exceptional Placement Record",
  description = "At SSE, we take pride in our outstanding placement record. Our Career Development Centre works tirelessly to ensure our students get placed in top companies.",
  imageUrl = campusCoridor,
  stats = [],
}) => {
  // Default stats if none provided
  const defaultStats = [
    { id: 1, value: "95%", label: "Placement Rate" },
    { id: 2, value: "50+", label: "Recruiting Companies" },
    { id: 3, value: "150+", label: "Faculty Members" },
    { id: 4, value: "15", label: "Research Centers" },
  ];

  // Use provided stats or defaults
  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="py-5 my-5 placement-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="position-relative rounded overflow-hidden mb-4 mb-lg-0">
              <img
                src={imageUrl}
                alt="SSE Placements"
                className="img-fluid w-100"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"></div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <h5
                className="text-uppercase fw-semibold mb-2"
                style={{ color: "var(--sse-secondary)", letterSpacing: "2px" }}
              >
                {subtitle}
              </h5>
              <h2
                className="mb-4 position-relative pb-3"
                style={{ color: "var(--sse-primary)" }}
              >
                {title}
              </h2>
              <p className="mb-4 text-secondary">{description}</p>

              <Row className="g-4 mb-4">
                {displayStats.map((stat) => (
                  <Col xs={6} md={3} key={stat.id}>
                    <div className="bg-white rounded shadow-sm p-3 text-center h-100">
                      <h3
                        className="fs-3 fw-bold mb-1"
                        style={{ color: "var(--sse-primary)" }}
                      >
                        {stat.value}
                      </h3>
                      <p className="small text-secondary mb-0">{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>

              <Button
                variant="read-more"
                text="Placement Details"
                icon="fas fa-arrow-right"
                href="/placement/placement"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlacementSection;
