// FacultyEEE.jsx - Simple grid layout for EEE faculty
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

// Import faculty images from the eee subdirectory
import dhanunjaya from '../assets/ssefaculty/eee/dhanunjaya.jpg';
import DNagaraju from '../assets/ssefaculty/eee/DNagaraju.jpg';
import khadarvali from '../assets/facultyPictures/eee/SkhadarVali.jpg';
import NpavanKumar from '../assets/ssefaculty/eee/NpavanKumar.jpg';
import PavanKumar from '../assets/ssefaculty/eee/PavanKumar.jpg';
import Ramu from '../assets/facultyPictures/eee/KRamu.jpg';
import VinodKumar from '../assets/facultyPictures/eee/VinodKumar.jpg';
import Vinodhkumar from '../assets/ssefaculty/eee/Vinodhkumar.jpeg';

function FacultyEEE() {
  // EEE Faculty data with authentic names and correct image imports
  const eeeFaculty = [
    {
      id: 1,
      name: 'Dr. Vinod Kumar',
      image: VinodKumar,  // Using the imported image
      designation: 'HOD/Associate Professor'
    },
    {
      id: 2,
      name: 'Mr. K Ramu',
      image: Ramu,  // Using the imported image
      designation: 'Associate Professor'
    },
    {
      id: 3,
      name: 'Mr. N Pavan Kumar',
      image: NpavanKumar,  // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 4,
      name: 'Mr. S Khadar Vali',
      image: khadarvali,  // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 5,
      name: 'Mr. Y Dinakar',
      image: DNagaraju,  // Using D Nagaraju's image as a placeholder for Dinakar
      designation: 'Assistant Professor'
    },
    {
      id: 6,
      name: 'Mr. P Dhanunjaya',
      image: dhanunjaya,  // Using the imported image
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
              <h1 className="text-white">EEE Faculty</h1>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-5">
        <Container>
          <SectionHeader
            title="Electrical & Electronics Engineering Faculty"
            centered={true}
          />
          
          <Row className="g-4">
            {eeeFaculty.map(faculty => (
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

export default FacultyEEE;