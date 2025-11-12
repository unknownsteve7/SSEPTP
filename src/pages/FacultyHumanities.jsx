// FacultyHumanities.jsx - Humanities and Sciences Faculty Grid Page with proper spacing
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

// Import faculty images from the humanities subdirectory
import Anitha from "../assets/facultyPictures/humanities/GAnitha.jpg";
import bhavani from "../assets/facultyPictures/humanities/CBhavani.jpg";
import Gowri from "../assets/ssefaculty/humanities/Gowri.jpg";
import Safna from "../assets/ssefaculty/humanities/Safna.jpeg";
import SaiPraneetha from "../assets/ssefaculty/humanities/SaiPraneetha.jpg";
import satheesh from "../assets/ssefaculty/humanities/satheesh.jpg";
import Shabana from "../assets/ssefaculty/humanities/Shabana.jpeg";
import srinivasulu from "../assets/ssefaculty/humanities/srinivasulu.jpg";
import SambaSivaiaha from "../assets/ssefaculty/humanities/SambaSivaiaha.jpg";
import Nagamani from "../assets/facultyPictures/humanities/CNagamani.jpg";

const FacultyHumanities = () => {
  // Humanities and Sciences Faculty data with authentic names and proper image assignments
  const humanitiesFaculty = [
    {
      id: 1,
      name: 'Dr B Samba Sivaiah',
      image: SambaSivaiaha, // Using the imported image
      designation: 'HOD/Associate Professor, Ph.D'
    },
    {
      id: 2,
      name: 'Dr. Shabana P',
      image: Shabana, // Using the imported image
      designation: 'Associate Professor'
    },
    {
      id: 3,
      name: 'Mrs A N Gowri Krishnaveni',
      image: Gowri, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 4,
      name: 'Mrs C Nagamani',
      image: Nagamani, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 5,
      name: 'Mr T Srinivasulu',
      image: srinivasulu, // Using the imported image (note the lowercase)
      designation: 'Assistant Professor'
    },
    {
      id: 6,
      name: 'Mr T M K Satheesh',
      image: satheesh, // Using the imported image (note the lowercase)
      designation: 'Assistant Professor'
    },
    {
      id: 7,
      name: 'Ms G Anitha',
      image: Anitha, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 8,
      name: 'Ms C Bhavani',
      image: bhavani, // Using the imported image (note the lowercase)
      designation: 'Assistant Professor'
    },
    {
      id: 9,
      name: 'Mrs D Lakshmi',
      // No image imported for Lakshmi, will use fallback
      image: null,
      designation: 'Assistant Professor'
    },
    {
      id: 10,
      name: 'Ms. Safna. MS',
      image: Safna, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 11,
      name: 'Ms B Sai Praneetha',
      image: SaiPraneetha, // Using the imported image
      designation: 'Assistant Professor'
    },
    {
      id: 12,
      name: 'Ms T Vijaylakshmi',
      // No image imported for Vijaylakshmi, will use fallback
      image: null,
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
              <h1 className="text-white">Humanities and Sciences Faculty</h1>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-5">
        <Container>
          <SectionHeader
            title="Meet Our Humanities and Sciences Faculty"
            centered={true}
          />
          
          <Row className="g-4">
            {humanitiesFaculty.map(faculty => (
              <Col lg={3} md={4} sm={6} key={faculty.id} className="mb-4">
                <Card className="h-100 shadow-sm border-0 faculty-card">
                  <Card.Body className="p-3 text-center">
                    <div className="rounded-circle overflow-hidden mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="img-fluid"
                        style={{ width: '100%', height: '100%' }}
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

export default FacultyHumanities;