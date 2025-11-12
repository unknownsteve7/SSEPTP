import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import hostelGirls from '../../assets/hostelGirls.jpg';
import girlsWalking from '../../assets/girlsWalking.jpg';
import clubsgirl from '../../assets/clubsgirl.jpg';
import football from '../../assets/football.jpg';
import culturalRampWalk from '../../assets/culturalRampWalk.jpg';

/**
 * Life at SSE section component for homepage - Bootstrapped version
 */
const LifeAtSSE = () => {
  // State for the active category
  const [activeCategory, setActiveCategory] = useState('campus');
  
  // Categories for life at SSE
  const categories = [
    { id: 'campus', name: 'Campus Life' },
    { id: 'clubs', name: 'Clubs & Activities' },
    { id: 'sports', name: 'Sports & Recreation' },
    { id: 'events', name: 'Events & Festivals' },
    { id: 'hostel', name: 'Hostel Life' }
  ];
  
  // Content for each category
  const categoryContent = {
    campus: {
      title: "Experience Vibrant Campus Life",
      description: "Our sprawling green campus offers a perfect blend of academic excellence and vibrant extracurricular activities, creating an inspiring environment for holistic growth.",
      image: girlsWalking,
      features: [
        { icon: "fas fa-tree", text: "Lush Green Campus" },
        { icon: "fas fa-wifi", text: "WiFi-Enabled Campus" },
        { icon: "fas fa-book", text: "Modern Library" },
        { icon: "fas fa-utensils", text: "Multiple Cafeterias" }
      ],
      link: "/life/campus-facilities"
    },
    clubs: {
      title: "Join Diverse Student Clubs",
      description: "Discover your passion and develop leadership skills by joining our diverse range of student clubs and organizations covering technical, cultural, and social interests.",
      image: clubsgirl,
      features: [
        { icon: "fas fa-robot", text: "Robotics Club" },
        { icon: "fas fa-paint-brush", text: "Art & Culture Club" },
        { icon: "fas fa-code", text: "Coding Club" },
        { icon: "fas fa-theater-masks", text: "Drama Club" }
      ],
      link: "/life/overview"
    },
    sports: {
      title: "Excel in Sports & Recreation",
      description: "Our state-of-the-art sports facilities encourage students to maintain physical fitness and excel in various sports at college, state, and national levels.",
      image: football,
      features: [
        { icon: "fas fa-futbol", text: "Soccer Field" },
        { icon: "fas fa-volleyball-ball", text: "Indoor Courts" },
        { icon: "fas fa-swimming-pool", text: "Swimming Pool" },
        { icon: "fas fa-table-tennis", text: "Fitness Center" }
      ],
      link: "/life/sports"
    },
    events: {
      title: "Celebrate Festivals & Events",
      description: "From technical symposiums to cultural festivals, our calendar is packed with events that showcase talent, foster teamwork, and create memorable college experiences.",
      image: culturalRampWalk,
      features: [
        { icon: "fas fa-microphone", text: "TechnoEdge Symposium" },
        { icon: "fas fa-music", text: "Cultural Festivals" },
        { icon: "fas fa-graduation-cap", text: "Graduation Ceremony" },
        { icon: "fas fa-handshake", text: "Alumni Meetups" }
      ],
      link: "/life/overview"
    },
    hostel: {
      title: "Experience Comfortable Hostel Life",
      description: "Our modern hostel facilities provide a safe, comfortable, and conducive environment for students to live, study, and build lifelong friendships.",
      image: hostelGirls,
      features: [
        { icon: "fas fa-bed", text: "Comfortable Accommodations" },
        { icon: "fas fa-utensils", text: "Nutritious Mess Food" },
        { icon: "fas fa-couch", text: "Recreation Rooms" },
        { icon: "fas fa-shield-alt", text: "24/7 Security" }
      ],
      link: "/life/hostel-life"
    }
  };
  
  // Get the active content
  const activeContent = categoryContent[activeCategory];
  
  return (
    <section className="life-at-sse-section py-5 bg-light">
      <Container>
        <SectionHeader
          subtitle="Student Experience"
          title="Life at Sanskriti School of Engineering"
          description="Discover a vibrant campus life that complements academic excellence with diverse extracurricular activities"
          centered={true}
        />
        
        {/* Enhanced category navigation */}
        <div className="d-flex justify-content-center mb-5">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div>
                <h2 className="h3 mb-3" style={{ color: 'var(--sse-primary)' }}>{activeContent.title}</h2>
                <p className="text-secondary mb-4">{activeContent.description}</p>
                
                <Row className="g-3 mb-4">
                  {activeContent.features.map((feature, index) => (
                    <Col md={6} key={index}>
                      <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm hover-translate-y">
                        <div className="feature-icon-wrapper me-3">
                          <i className={feature.icon}></i>
                        </div>
                        <span className="fw-medium">{feature.text}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
                
                <Button
                  variant="read-more"
                  text={`Explore ${categories.find(c => c.id === activeCategory).name}`}
                  icon="fas fa-arrow-right"
                  href={activeContent.link}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="position-relative rounded overflow-hidden shadow" style={{ height: '400px' }}>
                <img 
                  src={activeContent.image} 
                  alt={`Life at SSE - ${categories.find(c => c.id === activeCategory).name}`} 
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 w-100 h-25" 
                  style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  }}>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default LifeAtSSE;