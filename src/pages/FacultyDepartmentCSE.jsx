// FacultyCSE.jsx - With proper spacing between navbar and content
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';

// Import faculty images from the cse subdirectory
import BhaskarNaik from '../assets/facultyPictures/cse/BhaskarNaikKaramsi.jpg'; // Image 1
import NoorMohammed from '../assets/facultyPictures/cse/SNoorMohammed.jpg'; // Image 3
import Maruthi from '../assets/facultyPictures/cse/PMaruthi.jpg'; // Image 13
import Prasanna from '../assets/facultyPictures/cse/MVLakshmiPrasanna.jpg'; // Image 7
import Kishore from '../assets/ssefaculty/cse/Kishore.jpg'; // Image 14
import RameshBabu from '../assets/facultyPictures/cse/NRameshBabu.jpg'; // Image 10
import Chandana from '../assets/facultyPictures/cse/CChandana.jpg'; // Image 11
import Sivananda from '../assets/facultyPictures/cse/MSivananda.jpg'; // Image 19
import Nitya from '../assets/ssefaculty/cse/Nitya.jpg'; // Image 18
import Meghana from '../assets/ssefaculty/cse/Meghana.jpg'; // Image 12
import Kalpana from '../assets/ssefaculty/cse/Kalpana.jpg'; // Image 9
import Manasa from '../assets/ssefaculty/cse/Manasa.jpg'; // Image 15
import MaheswarReddy from '../assets/ssefaculty/cse/MaheshwarReddy.jpg'; // Image 16
import PaulSpiesberger from '../assets/ssefaculty/cse/Paul.jpg'; // Image 4
import RaimundRittnauer from '../assets/ssefaculty/cse/raimund.jpg'; // Image 5
import EnnoStubler from '../assets/ssefaculty/cse/EnnoStubler.jpg'; // Image 6
import Johannes from '../assets/ssefaculty/cse/johannes.jpg'; // Image 8
import KonradZalar from '../assets/ssefaculty/cse/Konradjalar.jpg'; // Image 17

function FacultyCSE  () {
  // CSE Faculty data with authentic names
  const cseFaculty = [
    {
      id: 1,
      name: 'Dr. Bhaskar Naik Karamsi',
      image: BhaskarNaik,
      designation: 'HOD/Associate Professor, Ph.D'
    },
    {
      id: 2,
      name: 'Mr. S Noor Mohammed',
      image: NoorMohammed,
      designation: 'Associate Professor (Ph.D)'
    },
    {
      id: 3,
      name: 'Mr. P Maruthi',
      image: Maruthi,
      designation: 'Assistant Professor (Ph.D)'
    },
    {
      id: 4,
      name: 'Mrs. M V Laxmi Prasanna',
      image: Prasanna,
      designation: 'Assistant Professor'
    },
    {
      id: 5,
      name: 'Mr. Chinthapalli Kishore',
      image: Kishore,
      designation: 'Assistant Professor'
    },
    {
      id: 6,
      name: 'Dr. N Ramesh Babu',
      image: RameshBabu,
      designation: 'Associate Professor'
    },
    {
      id: 7,
      name: 'Ms. C. Chandana',
      image: Chandana,
      designation: 'Associate Professor'
    },
    {
      id: 8,
      name: 'Mr. M. Sivananda',
      image: Sivananda,
      designation: 'Assistant Professor'
    },
    {
      id: 9,
      name: 'Ms. Nitya',
      image: Nitya,
      designation: 'Assistant Professor'
    },
    {
      id: 10,
      name: 'Ms. Peddakotla Meghana',
      image: Meghana,
      designation: 'Assistant Professor'
    },
    {
      id: 11,
      name: 'Ms. Kalpana',
      image: Kalpana,
      designation: 'Assistant Professor'
    },
    {
      id: 12,
      name: 'Ms. Manasa',
      image: Manasa,
      designation: 'Assistant Professor'
    },
    {
      id: 13,
      name: 'Mr. Maheswar Reddy B',
      image: MaheswarReddy,
      designation: 'Assistant Professor'
    },
    {
      id: 14,
      name: 'Mr. Paul Spiesberger',
      image: PaulSpiesberger,
      designation: 'Adjunct Professor, RIT Program'
    },
    {
      id: 15,
      name: 'Mr. Raimund Rittnauer',
      image: RaimundRittnauer,
      designation: 'Adjunct Professor, RIT Program'
    },
    {
      id: 16,
      name: 'Mr. Enno Stübler',
      image: EnnoStubler,
      designation: 'Adjunct Professor, RIT Program'
    },
    {
      id: 17,
      name: 'Mr. Johannes',
      image: Johannes,
      designation: 'Adjunct Professor, RIT Program'
    },
    {
      id: 18,
      name: 'Mr. Konrad Zalar',
      image: KonradZalar,
      designation: 'Adjunct Professor, RIT Program'
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
              <h1 className="text-white">CSE Faculty</h1>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Faculty Grid */}
      <section className="py-5">
        <Container>
          <SectionHeader
            title="Computer Science & Engineering Faculty"
            centered={true}
          />
          
          <Row className="g-4">
            {cseFaculty.map(faculty => (
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

export default FacultyCSE;