import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../common/Button';

/**
 * Call to Action section component - Bootstrap version
 */
const CTASection = ({
  title = "Begin Your Engineering Journey with SSE",
  description = "Admissions open for 2025-26 academic year. Apply now to secure your future.",
  primaryButtonText = "Apply Now",
  primaryButtonLink = "/admissions/enquiry",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact/enquiry"
}) => {
  return (
    <section className="py-5 position-relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(to right, var(--sse-primary), var(--sse-secondary))',
        color: 'white'
      }}>
      {/* Background pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
       >
      </div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center text-center py-4">
          <Col lg={8}>
            <div className="cta-content">
              <h2 className="display-5 fw-bold mb-3">{title}</h2>
              <p className="lead mb-4 opacity-90">{description}</p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button 
                  variant="cta-primary" 
                  text={primaryButtonText} 
                  href={primaryButtonLink}
                />
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;