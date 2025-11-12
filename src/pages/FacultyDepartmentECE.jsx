// FacultyECE.jsx - With proper spacing between navbar and content
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

// Import faculty images from the ece subdirectory with correct file names
import Annapurna from '../assets/ssefaculty/ece/Annapurna.jpg'; // Image 1
import HariKrishnan from '../assets/facultyPictures/ece/SHariKrishnan.jpg'; // Image 2
import Pranavi from '../assets/ssefaculty/ece/Pravani.jpg'; // Image 4
import Usha from '../assets/ssefaculty/ece/Usha.jpg'; // Image 5
import Venkatesu from '../assets/ssefaculty/ece/Venkatesu.jpg'; // Image 6 
import SadiqVali from '../assets/facultyPictures/ece/SSadiqVali.jpg'; // Image 7
import VijayaRamRaj from '../assets/facultyPictures/ece/RVijayaRamRaj.jpg'; // Image 8
import RakeshYadav from '../assets/ssefaculty/ece/RakeshYadav.png'; // Image 9
import NeetiYadav from '../assets/ssefaculty/ece/Neetiyadav.jpg'; // Image 10
import Sravani from '../assets/ssefaculty/ece/Sravani.jpg'; // Not in your provided images, will use fallback
import NagaRaju from '../assets/facultyPictures/ece/DNagaraju.jpg'; // Imag
const FacultyECE = () => {
  // ECE Faculty data with authentic names and imported images
  const eceFaculty = [
    {
      id: 1,
      name: 'Dr. V. Annapurna',
      image: Annapurna,
      designation: 'HOD/Associate Professor, Ph.D'
    },
    {
      id: 2,
      name: 'Mr. S Hari Krishnan',
      image: HariKrishnan,
      designation: 'Associate Professor (Ph.D)'
    },
    {
      id: 3,
      name: 'Mr. D Nagaraju',
      image: NagaRaju,
      designation: 'Associate Professor (Ph.D)'
    },
    {
      id: 4,
      name: 'Ms. N Pranavi',
      image: Pranavi,
      designation: 'Associate Professor (Ph.D)'
    },
    {
      id: 5,
      name: 'Dr. P. Usha',
      image: Usha,
      designation: 'Associate Professor'
    },
    {
      id: 6,
      name: 'Mr. B Venkatesu',
      image: Venkatesu,
      designation: 'Assistant Professor'
    },
    {
      id: 7,
      name: 'Mr. S Sadiq Vali',
      image: SadiqVali,
      designation: 'Assistant Professor'
    },
    {
      id: 8,
      name: 'Mr. R Vijaya Ram Raj',
      image: VijayaRamRaj,
      designation: 'Assistant Professor'
    },
    {
      id: 9,
      name: 'Mr. K Rakesh Yadav',
      image: RakeshYadav,
      designation: 'Assistant Professor'
    },
    {
      id: 10,
      name: 'Neeti Yadav',
      image: NeetiYadav,
      designation: 'Assistant Professor'
    },
    {
      id: 11,
      name: 'Ms Sravani',
      image: Sravani, // If this image is not available, the error handler will display a placeholder
      designation: 'Lab Assistant'
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
              <h1 className="text-white">ECE Faculty</h1>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-5">
        <Container>
          <SectionHeader
            title="Electronics & Communication Engineering Faculty"
            centered={true}
          />
          
          <Row className="g-4">
            {eceFaculty.map(faculty => (
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

export default FacultyECE;