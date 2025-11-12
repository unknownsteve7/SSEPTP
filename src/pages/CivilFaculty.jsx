// FacultyCivil.jsx - Civil Engineering Faculty Grid Page with proper spacing
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

// Import faculty images from the civil subdirectory
import sivaprasad from '../assets/facultyPictures/civil/KSivaPrasad.jpg';
import Ramanjineyulu from '../assets/ssefaculty/civil/Ramanjineyulu.jpg';
import Saipriya from '../assets/ssefaculty/civil/Saipriya.jpeg';
import rammohan from '../assets/facultyPictures/civil/GavvalaRammohan.jpg';
import Vinodkumar from '../assets/ssefaculty/civil/Vinodkumar.jpeg';
import Jafar from '../assets/facultyPictures/civil/Jafar.jpg';
import PavanKumar from '../assets/facultyPictures/civil/PPavanKumar.jpg'; // Assuming this is the correct path
// We don't have an import for Pavan Kumar, so we'll use a fallback mechanism

const FacultyCivil = () => {
  // Civil Engineering Faculty data with authentic names and proper image assignments
  const civilFaculty = [
    {
      id: 1,
      name: 'K Siva Prasad',
      image: sivaprasad, // Using the imported image
      designation: 'Associate Professor & HOD'
    },
    {
      id: 2,
      name: 'Mr G Ramanjineyulu',
      image: Ramanjineyulu, // Using the imported image
      designation: 'Associate Professor'
    },
    {
      id: 3,
      name: 'Mr Gavvala Rammohan',
      image: rammohan, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 4,
      name: 'Mr. P Pavan Kumar',
      image: PavanKumar, // No image imported for Pavan Kumar, will use fallback
      designation: 'Assistant Professor'
    },
    {
      id: 5,
      name: 'Ms. Renati Saipriya',
      image: Saipriya, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 6,
      name: 'Mr H Vinod Kumar',
      image: Vinodkumar, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 7,
      name: 'Mr. Jafar',
      image: Jafar, // Using the imported image
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
              <h1 className="text-white">Civil Engineering Faculty</h1>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-5">
        <Container>
          <SectionHeader
            title="Meet Our Civil Engineering Faculty"
            centered={true}
          />
          
          <Row className="g-4">
            {civilFaculty.map(faculty => (
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
};

export default FacultyCivil;