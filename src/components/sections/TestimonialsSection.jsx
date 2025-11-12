import { Container, Row, Col, Card } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import raheema from "../../assets/raheema.jpg"
import sai from "../../assets/sai.jpg"
import bhavya from "../../assets/bhavya.jpg"
import navya from "../../assets/navya.jpg"
import saikumar from "../../assets/saikumar.jpg"
/**
 * Testimonials section component with student testimonials
 */
const TestimonialsSection = ({
  subtitle = "Student Testimonials",
  title = "What Our Students Say",
  description = "Hear from our students about their experiences at Sanskriti School of Engineering.",
  testimonials = []
}) => {
  // Default testimonials with image placeholders
  const defaultTestimonials = [
    {
      id: 1,
      name: 'G. Navya Sree',
      role: 'MS - Data Science, London',
      company: 'DXC, IBM, TCS, Mphasis',
      image: navya, // Add your image import here
      initials: 'GN', // Fallback initials
      bgColor: 'var(--sse-primary)',
      quote: 'My journey at SSE has been truly rewarding. The well-structured curriculum and placement support helped me secure multiple offers from top companies including DXC, IBM, TCS, and Mphasis while pursuing my MS in Data Science.'
    },
    {
      id: 2,
      name: 'Koguru Raheema',
      role: 'Software Engineer',
      company: 'Infosys',
      image: raheema, // Add your image import here
      initials: 'KR', // Fallback initials
      bgColor: 'var(--sse-secondary)',
      quote: 'SSE provided continuous support with practical learning and placement-focused training. The aptitude, communication, and technical skill sessions helped me successfully clear Infosys recruitment. Grateful for the faculty guidance.'
    },
    {
      id: 3,
      name: 'G. Bhavya',
      role: 'Software Developer',
      company: 'CGI',
      image: bhavya, // Add your image import here
      initials: 'GB', // Fallback initials
      bgColor: 'var(--sse-blue)',
      quote: 'SSE provided strong academic foundation with industry-oriented curriculum. The placement training, aptitude sessions, and mock interviews gave me confidence to clear CGI selection process. Special thanks to supportive faculty.'
    },
    {
      id: 4,
      name: 'Y. L. Sai Kumar Reddy',
      role: 'Software Developer',
      company: 'TCS',
      image: saikumar, // Add your image import here
      initials: 'YS', // Fallback initials
      bgColor: 'var(--sse-green)',
      quote: 'SSE provided excellent academic foundation and placement training. The focused sessions on aptitude, coding, and interview skills were key to my TCS placement. Grateful for the constant faculty support and encouragement.'
    },
    {
      id: 5,
      name: 'Sai Purushotham',
      role: 'Software Engineer',
      company: 'Google',
      image: sai, // Add your image import here
      initials: 'SP', // Fallback initials
      bgColor: 'var(--sse-teal)',
      quote: 'The curriculum at SSE sharpened my technical skills perfectly. The placement team provided unwavering support throughout the process. Their focused training and mock interviews helped me successfully land my dream role at Google.'
    }
  ];

  // Use provided testimonials or defaults
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-5 bg-light testimonials-section">
      <Container>
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          centered={true}
        />
        
        <Row className="g-4">
          {displayTestimonials.map(testimonial => (
            <Col lg={4} md={6} key={testimonial.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0 testimonial-card">
                <Card.Body className="p-4 position-relative">
                  <div className="mb-4 text-primary opacity-25 display-4 position-absolute top-0 end-0 p-3">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  
                  <p className="card-text mb-4 text-muted">{testimonial.quote}</p>
                  
                  <div className="d-flex align-items-center mt-auto">
                    <div className="me-3" style={{ width: "60px", height: "60px" }}>
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle"
                          style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover",
                            border: "3px solid var(--sse-light)"
                          }}
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      
                      {/* Fallback initials circle - shown when no image or image fails */}
                      {/* <div 
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" 
                        style={{ 
                          width: "60px", 
                          height: "60px", 
                          backgroundColor: testimonial.bgColor || 'var(--sse-primary)',
                          fontSize: "18px",
                          display: testimonial.image ? 'none' : 'flex'
                        }}
                      >
                        {testimonial.initials}
                      </div> */}
                    </div>
                    
                    <div>
                      <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                      <p className="mb-0 text-primary small fw-medium">{testimonial.role}</p>
                      {testimonial.company && (
                        <p className="mb-0 text-muted small">{testimonial.company}</p>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;