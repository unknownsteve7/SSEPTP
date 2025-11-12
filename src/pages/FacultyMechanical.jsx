// FacultyMechanical.jsx - Mechanical Engineering Faculty Grid Page with proper spacing
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

// Import faculty images from the mech subdirectory
import Anand from "../assets/ssefaculty/mech/Anand.jpg";
import Archana from "../assets/ssefaculty/mech/Archana.jpg";
import Ramesh from "../assets/ssefaculty/mech/Ramesh.jpg";
import RajiGandhi from "../assets/ssefaculty/mech/RajiGandhi.jpg";
import somasundar from "../assets/ssefaculty/mech/somasundar.jpg";
import Sudhakar from "../assets/ssefaculty/mech/Sudhakar.jpg";
import NagarjunaReddy from "../assets/ssefaculty/mech/NagarjunaReddy.jpg";
import salmanKhan from "../assets/facultyPictures/mech/SalmanKhan.jpg";
function FacultyMechanical () {
  // Mechanical Engineering Faculty data with authentic names and proper image assignments
  const mechanicalFaculty = [
    {
      id: 1,
      name: 'Dr. A. Prasad Reddy',
      // No image imported for Prasad Reddy, will use fallback
      image: null,
      designation: 'Associate Professor & HOD'
    },
    {
      id: 2,
      name: 'Mr G Sudhakar',
      image: Sudhakar, // Using the imported image
      designation: 'Associate Professor(Ph.D, JNTUA)'
    },
    {
      id: 3,
      name: 'Mrs B A Archana Venkatesh',
      image: Archana, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 4,
      name: 'Mr. AVSS Soma Sundar',
      image: somasundar, // Using the imported image (note the lowercase)
      designation: 'Assistant Professor'
    },
    {
      id: 5,
      name: 'Mr S Rajiv Gandhi',
      image: RajiGandhi, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 6,
      name: 'Mr C Anand',
      image: Anand, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 7,
      name: 'Mr B Nagarjuna Reddy',
      image: NagarjunaReddy, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 8,
      name: 'Mr B Ramesh',
      image: Ramesh, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 9,
      name: 'Mr. Shreenivas',
      // No image imported for Shreenivas, will use fallback
      image: null,
      designation: 'Assistant Professor'
    },
    {
      id: 10,
      name: 'N Shekshavalli',
      // No image imported for Shekshavalli, will use fallback
      image: null,
      designation: 'Assistant Professor'
    },
    {
      id: 11,
      name: 'Mr. Salman Khan',
      // No image imported for Salman Khan, will use fallback
      image: salmanKhan,
      designation: 'Assistant Professor'
    }
  ];

  return (
    <div className="faculty-page">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header with proper spacing */}
      <section className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-white">Mechanical Engineering Faculty</h1>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-5">
        <Container>
          <SectionHeader
            title="Meet Our Mechanical Engineering Faculty"
            centered={true}
          />
          
          <Row className="g-4">
            {mechanicalFaculty.map(faculty => (
              <Col lg={3} md={4} sm={6} key={faculty.id} className="mb-4">
                <Card className="h-100 shadow-sm border-0 faculty-card">
                  <Card.Body className="p-3 text-center">
                    <div className="rounded-circle overflow-hidden mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="img-fluid"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/120?text=' + faculty.name.charAt(0);
                        }}
                      />
                    </div>
                    <Card.Title className="h5 mb-1">{faculty.name}</Card.Title>
                    <p className="text-primary mb-2">{faculty.designation}</p>
                  
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
}

export default FacultyMechanical;