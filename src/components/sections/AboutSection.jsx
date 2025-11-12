import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../common/Button";
import girlsnearsteps from "../../assets/girlsnearsteps.jpg";
/**
 * About section for the homepage - Bootstrap version
 */
const AboutSection = ({
  title = "About SSE",
  heading = "Shaping Engineers for Tomorrow's World",
  description = "Sanskriti School of Engineering (SSE) is a premier engineering institution in Andhra Pradesh, committed to academic excellence and holistic development of students.",
  imageUrl = girlsnearsteps,
  yearsOfExperience = 15,
  features = [],
}) => {
  // Default features if none provided
  const defaultFeatures = [
    {
      icon: "fas fa-medal",
      title: "Excellence in Education",
      description: "NAAC accredited curriculum with industry relevance",
    },
    {
      icon: "fas fa-users",
      title: "Expert Faculty",
      description: "Experienced educators with industry background",
    },
    {
      icon: "fas fa-flask",
      title: "Research Focus",
      description: "Innovation-driven approach to engineering education",
    },
  ];

  // Use provided features or defaults
  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="position-relative">
              <div
                className="about-image-border position-absolute d-none d-md-block"
                style={{
                  top: "30px",
                  left: "-30px",
                  width: "100%",
                  height: "100%",
                  border: "5px solid var(--sse-secondary)",
                  borderRadius: "10px",
                  zIndex: 0,
                }}
              ></div>
              <img
                src={imageUrl}
                alt="About SSE"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <div
                className="position-absolute d-none d-md-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  bottom: "-30px",
                  right: "30px",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "var(--sse-primary)",
                  borderRadius: "50%",
                  color: "white",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  zIndex: 2,
                }}
              >
                <span className="fs-2 fw-bold">{yearsOfExperience}</span>
                <span className="small">Years of Excellence</span>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h5
                className="text-uppercase mt-3 mb-2 fw-semibold"
                style={{ color: "var(--sse-secondary)", letterSpacing: "2px" }}
              >
                {title}
              </h5>
              <h2
                className="mb-4 position-relative pb-3 about-heading"
                style={{ color: "var(--sse-primary)" }}
              >
                {heading}
              </h2>
              <p className="mb-4 text-secondary">{description}</p>

              <div className="mb-4">
                {displayFeatures.map((feature, index) => (
                  <div className="d-flex align-items-start mb-3" key={index}>
                    <div
                      className="me-3 fs-4"
                      style={{ color: "var(--sse-secondary)" }}
                    >
                      <i className={feature.icon}></i>
                    </div>
                    <div>
                      <h4 className="h5 mb-1">{feature.title}</h4>
                      <p className="mb-0 text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="read-more"
                text="Learn More"
                icon="fas fa-arrow-right"
                href="/about/college"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
