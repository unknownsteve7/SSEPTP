import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import { Container, Row, Col, Card, Nav, Badge, Button, Modal } from 'react-bootstrap';

// Import only the most relevant images from your collection
import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import computerlab from "../assets/computerlab.jpg";
import collegeProjects from "../assets/collegeProjects.jpg";
import collegeProjects2 from "../assets/collegeProjects2.jpg";
import chemistryLab from "../assets/chemistryLab.jpg";
import mechanical from "../assets/mechanical.jpg";
import mechMachine from "../assets/mechMachine.jpg";
import groupDiscussion from "../assets/groupDiscussion.jpg";
import techMahindra from "../assets/techMahindra.jpg";

/**
 * Research Achievements page component
 */
const ResearchAchievements = () => {
  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  
  // State for category filter
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Achievement categories
  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'awards', name: 'Awards & Recognition' },
    { id: 'patents', name: 'Patents' },
    { id: 'projects', name: 'Funded Projects' },
    { id: 'innovations', name: 'Innovations' }
  ];
  
  // Research achievements data with relevant images
  const achievements = [
    {
      id: 1,
      title: "Best Research Paper Award",
      category: "awards",
      description: "The paper titled 'Machine Learning Approaches for Structural Health Monitoring' received the Best Paper Award at the International Conference on Structural Engineering.",
      date: "March 2024",
      team: ["Dr. Anand Kumar", "Dr. Suresh Patel", "Rahul Singh (PhD Scholar)"],
      image: computerlab,
      details: "The research introduced novel machine learning algorithms for real-time structural health monitoring of critical infrastructure. The award committee highlighted the innovative approach and significant practical implications of the work for infrastructure safety and maintenance optimization.",
      testimonial: "This recognition underscores our commitment to developing practical solutions for real-world engineering challenges.",
      color: "#1D9DD9" // Blue
    },
    {
      id: 2,
      title: "Smart Irrigation System Patent",
      category: "patents",
      description: "Patent granted for an IoT-based smart irrigation system that optimizes water usage based on soil conditions and weather forecasts.",
      date: "January 2024",
      team: ["Dr. Vikram Singh", "Dr. Kavita Reddy", "Priya Sharma (Research Associate)"],
      image: mechanical,
      details: "Patent No. IN123456789. The invention pertains to an intelligent irrigation system that utilizes a network of soil moisture sensors, weather data integration, and machine learning algorithms to predict optimal irrigation schedules. Tests showed 30-40% reduction in water consumption while maintaining or improving crop yield.",
      testimonial: "This patent represents our vision of leveraging technology for sustainable agriculture and resource conservation.",
      color: "#F9843D" // Orange
    },
    {
      id: 3,
      title: "₹2 Crore SERB Project Grant",
      category: "projects",
      description: "Major research grant awarded by Science and Engineering Research Board for advanced materials research in renewable energy applications.",
      date: "November 2023",
      team: ["Dr. Priya Sharma", "Dr. Rajesh Verma", "Research team of 8 members"],
      image: chemistryLab,
      details: "The 3-year project titled 'Advanced Nanocomposites for Next-Generation Solar Cells' received competitive funding from SERB, Government of India. The project aims to develop high-efficiency, cost-effective materials for photovoltaic applications, addressing key challenges in renewable energy technology adoption.",
      testimonial: "This substantial grant enables us to pursue fundamental research with significant potential for transforming solar energy technologies.",
      color: "#28A745" // Green
    },
    {
      id: 4,
      title: "National Innovation Award",
      category: "awards",
      description: "Prestigious AICTE Innovation Award for developing low-cost prosthetic limbs with enhanced functionality and accessibility.",
      date: "October 2023",
      team: ["Dr. Sanjay Gupta", "Dr. Anjali Mehta", "Two PhD scholars and three BTech students"],
      image: mechMachine,
      details: "The project combined 3D printing technology, biomechanical design principles, and locally available materials to create affordable prosthetic limbs with advanced functional capabilities. The innovation significantly reduces cost while maintaining quality, making prosthetics more accessible to underprivileged populations.",
      testimonial: "This recognition validates our belief that technological innovation should address social challenges and improve lives.",
      color: "#6610F2" // Purple
    },
    {
      id: 5,
      title: "Eco-friendly Concrete Technology",
      category: "innovations",
      description: "Development of sustainable concrete using industrial waste materials with improved strength and reduced carbon footprint.",
      date: "August 2023",
      team: ["Dr. Suresh Patel", "Dr. Priya Sharma", "Four MTech students"],
      image: lab1,
      details: "The innovative concrete formulation incorporates fly ash, blast furnace slag, and recycled aggregates, reducing cement content by up to 60%. Comprehensive testing demonstrated 15% higher compressive strength and 40% lower carbon emissions compared to conventional concrete. The technology has been adopted by two major construction companies for commercial projects.",
      testimonial: "Our research demonstrates that environmental sustainability and structural performance can go hand in hand in modern construction.",
      color: "#8E3D19" // Brown
    },
    {
      id: 6,
      title: "IEEE Outstanding Paper Award",
      category: "awards",
      description: "Research paper on secure blockchain framework for healthcare data management received the outstanding paper award at IEEE HealthCom 2023.",
      date: "July 2023",
      team: ["Dr. Vikram Singh", "Dr. Anjali Mehta", "Arjun Reddy (PhD Scholar)"],
      image: collegeProjects,
      details: "The paper presented a novel blockchain-based framework for secure, efficient, and privacy-preserving healthcare data management. The work addressed critical challenges in medical data security, interoperability, and controlled access. The solution has been implemented in a pilot project with a local hospital.",
      testimonial: "This recognition from IEEE motivates us to continue developing secure technological solutions for sensitive domains like healthcare.",
      color: "#E04084" // Pink
    },
    {
      id: 7,
      title: "Energy-Efficient Building Design Patent",
      category: "patents",
      description: "Patent granted for an innovative building design system that integrates passive cooling, natural lighting, and renewable energy generation.",
      date: "May 2023",
      team: ["Dr. Kavita Reddy", "Dr. Rajesh Verma", "Architectural and Civil Engineering team"],
      image: lab2,
      details: "Patent No. IN987654321. The patented design system combines architectural elements, material selection, and renewable energy integration to create buildings that reduce energy consumption by up to 70% compared to conventional structures. The system includes a computational tool for optimizing design parameters based on local climate conditions.",
      testimonial: "This patent represents years of collaborative research between architectural design and engineering disciplines to address the critical need for sustainable buildings.",
      color: "#20c997" // Teal
    },
    {
      id: 8,
      title: "Industry-Funded Robotics Project",
      category: "projects",
      description: "₹1.5 Crore research project funded by a leading manufacturing company for developing adaptive robotic systems for dynamic manufacturing environments.",
      date: "April 2023",
      team: ["Dr. Anand Kumar", "Dr. Vikram Singh", "Multidisciplinary team of researchers"],
      image: techMahindra,
      details: "The 2-year collaborative project aims to develop robotic systems capable of learning and adapting to changing manufacturing requirements with minimal reprogramming. The project includes development of computer vision systems, reinforcement learning algorithms, and flexible gripping mechanisms for handling diverse components.",
      testimonial: "This industry partnership enables us to address real manufacturing challenges while advancing the field of adaptive robotics.",
      color: "#fd7e14" // Orange
    },
    {
      id: 9,
      title: "Water Purification Technology",
      category: "innovations",
      description: "Development of a low-cost, solar-powered water purification system for rural areas with limited access to electricity and clean water.",
      date: "February 2023",
      team: ["Dr. Rajesh Verma", "Dr. Suresh Patel", "Three faculty members and six students"],
      image: chemistryLab,
      details: "The innovative water purification system combines solar distillation, filtration, and UV disinfection in a compact, maintenance-friendly design. The system can purify up to 20 liters of water per day using only solar energy, removing bacterial contaminants, heavy metals, and dissolved solids. Field testing in five villages demonstrated significant reduction in waterborne diseases.",
      testimonial: "This innovation exemplifies our commitment to developing sustainable solutions that address basic human needs in resource-constrained environments.",
      color: "#17a2b8" // Cyan
    },
    {
      id: 10,
      title: "Ministry of Education Innovation Award",
      category: "awards",
      description: "National-level recognition for innovative teaching methodologies integrating research problems into undergraduate engineering education.",
      date: "December 2022",
      team: ["Dr. Anjali Mehta", "Dr. Kavita Reddy", "Teaching Innovation Committee"],
      image: groupDiscussion,
      details: "The award recognized the implementation of a novel pedagogical approach called 'Research-Integrated Learning' (RIL) that exposes undergraduate students to real research problems through curriculum design. The approach resulted in 40% increase in student research participation and 25% improvement in problem-solving skills as measured by standardized assessments.",
      testimonial: "This recognition validates our belief that early exposure to research cultivates innovation mindset and critical thinking skills in engineering students.",
      color: "#dc3545" // Red
    },
    {
      id: 11,
      title: "AI-based Traffic Management System",
      category: "innovations",
      description: "Development and deployment of an artificial intelligence system for optimizing traffic flow in urban intersections.",
      date: "October 2022",
      team: ["Dr. Vikram Singh", "Dr. Anand Kumar", "Smart City Research Group"],
      image: computerlab,
      details: "The AI-based traffic management system uses computer vision to monitor traffic density and flow patterns in real-time. The system dynamically adjusts signal timing based on current conditions and predicted traffic patterns. Pilot implementation at five major intersections in the city resulted in 30% reduction in average waiting time and 25% decrease in fuel consumption due to idling.",
      testimonial: "This project demonstrates how AI can be applied to solve everyday urban challenges, improving efficiency and quality of life while reducing environmental impact.",
      color: "#6c757d" // Gray
    },
    {
      id: 12,
      title: "DST-funded Renewable Energy Project",
      category: "projects",
      description: "₹85 Lakh research grant from Department of Science and Technology for developing hybrid renewable energy systems for rural applications.",
      date: "August 2022",
      team: ["Dr. Rajesh Verma", "Dr. Priya Sharma", "Interdisciplinary research team"],
      image: mechMachine,
      details: "The 2-year project focuses on developing and field-testing integrated solar-wind-biomass energy systems optimized for rural contexts. The systems incorporate energy storage solutions, smart load management, and rugged design for reliability in challenging environments. The project includes deployment and testing in three remote villages without grid connectivity.",
      testimonial: "This project aligns with our mission of developing decentralized, sustainable energy solutions that empower rural communities and promote energy independence.",
      color: "#28A745" // Green
    }
  ];
  
  // Filter achievements based on category
  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);
  
  // Handle modal open
  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };
  
  // Handle modal close
  const closeModal = () => {
    setShowModal(false);
  };
  
  // Get category badge color
  const getCategoryColor = (category) => {
    switch(category) {
      case 'awards': return 'info'; // Blue
      case 'patents': return 'warning'; // Yellow
      case 'projects': return 'success'; // Green
      case 'innovations': return 'danger'; // Red
      default: return 'secondary'; // Gray
    }
  };
  
  // Get category name
  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="research-achievements-page bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section 
        className="page-header"
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.8), rgba(142, 61, 25, 0.8)), url(${collegeProjects2})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="py-5">
          <Row>
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-white">Research Achievements</h1>
              <p className="lead text-white opacity-90">
                Celebrating our innovations, awards, and significant contributions to science and technology
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Introduction Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h5 className="text-primary text-uppercase fw-semibold mb-2">Excellence in Research</h5>
              <h2 className="fw-bold mb-4">Our Research Milestones</h2>
              <p className="mb-4">
                At Sanskriti School of Engineering, we take pride in our research achievements that 
                demonstrate our commitment to innovation, excellence, and societal impact. Our faculty 
                and students have received recognition for their contributions to various fields of 
                engineering and technology.
              </p>
              <p>
                From patents and innovations to prestigious awards and funded projects, our research 
                achievements reflect our dedication to advancing knowledge and developing solutions 
                for real-world challenges.
              </p>
            </Col>
            <Col lg={6}>
              <div className="position-relative rounded overflow-hidden shadow">
                <img 
                  src={groupDiscussion} 
                  alt="Research Achievement" 
                  className="img-fluid w-100"
                  style={{ height: "350px", objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Achievements Section */}
      <section className="py-5">
        <Container>
          <SectionHeader
            subtitle="Recognition & Milestones"
            title="Research Achievements"
            description="Explore our notable research accomplishments and innovations"
            centered={true}
          />
          
          {/* Category Filter */}
          <Nav 
            className="justify-content-center mb-5 flex-wrap" 
            variant="pills"
          >
            {categories.map(category => (
              <Nav.Item key={category.id}>
                <Nav.Link 
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="mx-1 my-1"
                  style={{ 
                    backgroundColor: activeCategory === category.id ? 'var(--sse-secondary)' : 'transparent',
                    color: activeCategory === category.id ? 'white' : 'var(--sse-dark)',
                    borderColor: activeCategory === category.id ? 'var(--sse-secondary)' : '#dee2e6',
                  }}
                >
                  {category.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          
          {/* Achievements Grid */}
          <Row className="g-4">
            {filteredAchievements.map(achievement => (
              <Col lg={4} md={6} key={achievement.id}>
                <Card className="h-100 border-0 shadow-sm hover-translate-y">
                  <div className="position-relative">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 m-3">
                      <Badge bg={getCategoryColor(achievement.category)}>
                        {getCategoryName(achievement.category)}
                      </Badge>
                    </div>
                    <div className="position-absolute bottom-0 start-0 m-3">
                      <Badge bg="light" text="dark">
                        {achievement.date}
                      </Badge>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <h3 className="h5 fw-bold mb-3" style={{ color: achievement.color }}>
                      {achievement.title}
                    </h3>
                    <p className="mb-3">{achievement.description}</p>
                    <p className="small text-muted mb-4">
                      <strong>Team:</strong> {achievement.team.join(", ")}
                    </p>
                    <Button 
                      variant="outline-primary" 
                      onClick={() => openModal(achievement)}
                      className="w-100"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Achievement Statistics */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">Research Impact</h2>
              <p className="mb-0">
                Our research initiatives have resulted in significant achievements and impact across 
                multiple domains of engineering and technology
              </p>
            </Col>
          </Row>
          <Row className="g-4 text-center">
            {[
              { value: "25+", label: "Patents Filed", icon: "fas fa-certificate" },
              { value: "40+", label: "Awards & Recognitions", icon: "fas fa-trophy" },
              { value: "₹5Cr+", label: "Research Funding", icon: "fas fa-rupee-sign" },
              { value: "15+", label: "Technology Transfers", icon: "fas fa-exchange-alt" }
            ].map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <div className="p-4">
                  <div className="display-6 mb-3">
                    <i className={stat.icon}></i>
                  </div>
                  <h3 className="display-5 fw-bold mb-2">{stat.value}</h3>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-5 bg-white">
        <Container>
          <SectionHeader
            subtitle="Impact Stories"
            title="From Research to Reality"
            description="Research achievements that have made a meaningful impact on industry and society"
            centered={true}
          />
          
          <Row className="g-4">
            {[
              {
                title: "Rural Water Purification",
                description: "Our low-cost water purification technology has been implemented in 15 villages, providing clean drinking water to over 5,000 people who previously lacked access.",
                image: chemistryLab,
                color: "#1D9DD9" // Blue
              },
              {
                title: "Traffic Management System",
                description: "Our AI-based traffic management system has been adopted by the municipal corporation, resulting in 30% reduction in commute times and significant decrease in traffic congestion.",
                image: computerlab,
                color: "#F9843D" // Orange
              },
              {
                title: "Low-cost Prosthetics",
                description: "The award-winning prosthetic limb technology has been transferred to a social enterprise that has provided affordable prosthetics to over 200 individuals from underprivileged backgrounds.",
                image: mechMachine,
                color: "#28A745" // Green
              }
            ].map((story, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="card-img-top"
                      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <h3 className="h5 mb-3" style={{ color: story.color }}>{story.title}</h3>
                    <p className="mb-0">{story.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Achievement Detail Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        centered
      >
        {selectedAchievement && (
          <>
            <Modal.Header closeButton style={{ borderColor: selectedAchievement.color }}>
              <Modal.Title className="text-primary">{selectedAchievement.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-4">
                <img 
                  src={selectedAchievement.image} 
                  alt={selectedAchievement.title}
                  className="img-fluid rounded w-100 mb-3"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
              </div>
              
              <div className="d-flex flex-wrap mb-4">
                <Badge 
                  bg={getCategoryColor(selectedAchievement.category)} 
                  className="me-2 mb-2"
                >
                  {getCategoryName(selectedAchievement.category)}
                </Badge>
                <Badge bg="secondary" className="me-2 mb-2">
                  {selectedAchievement.date}
                </Badge>
              </div>
              
              <h5>Description</h5>
              <p>{selectedAchievement.description}</p>
              
              <h5>Details</h5>
              <p>{selectedAchievement.details}</p>
              
              <h5>Research Team</h5>
              <ul className="list-unstyled">
                {selectedAchievement.team.map((member, index) => (
                  <li key={index} className="mb-1">
                    <i className="fas fa-user-circle me-2 text-primary"></i>
                    {member}
                  </li>
                ))}
              </ul>
              
              <div className="bg-light p-3 rounded mt-4">
                <h5>Impact Statement</h5>
                <p className="fst-italic mb-0">
                  "{selectedAchievement.testimonial}"
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResearchAchievements;