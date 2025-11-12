import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

// Import CSE faculty images
import BhaskarNaik from '../../assets/facultyPictures/cse/BhaskarNaikKaramsi.jpg'; // Image 1
import NoorMohammed from '../../assets/facultyPictures/cse/SNoorMohammed.jpg'; // Image 3
import Prasanna from '../../assets/ssefaculty/cse/Prasanna.jpg';
import RameshBabu from '../../assets/ssefaculty/cse/NRameshBabu.jpg';

// Import ECE faculty images
import Annapurna from '../../assets/ssefaculty/ece/Annapurna.jpg';
import SadiqVali from '../../assets/facultyPictures/ece/SSadiqVali.jpg'; // Image 7
import NagaRaju from '../../assets/facultyPictures/ece/DNagaraju.jpg'; // Imag
import Usha from '../../assets/ssefaculty/ece/Usha.jpg';
import VijayaRamRaj from '../../assets/facultyPictures/ece/RVijayaRamRaj.jpg'; // Image 8

// Import Mechanical faculty images
import Anand from "../../assets/ssefaculty/mech/Anand.jpg";
import Archana from "../../assets/ssefaculty/mech/Archana.jpg";
import Ramesh from "../../assets/ssefaculty/mech/Ramesh.jpg";
import RajiGandhi from "../../assets/ssefaculty/mech/RajiGandhi.jpg";

// Import EEE faculty images
import dhanunjaya from '../../assets/ssefaculty/eee/dhanunjaya.jpg';
import DNagaraju from '../../assets/ssefaculty/eee/DNagaraju.jpg';
import khadarvali from '../../assets/facultyPictures/eee/SkhadarVali.jpg';
import NpavanKumar from '../../assets/ssefaculty/eee/NpavanKumar.jpg';
import ramu from "../../assets/facultyPictures/eee/KRamu.jpg";
import VinodKumar from "../../assets/facultyPictures/eee/VinodKumar.jpg";
// Import Civil faculty images
import sivaprasad from '../../assets/facultyPictures/civil/KSivaPrasad.jpg';
import Ramanjineyulu from '../../assets/ssefaculty/civil/Ramanjineyulu.jpg';
import Saipriya from '../../assets/ssefaculty/civil/Saipriya.jpeg';
import rammohan from '../../assets/facultyPictures/civil/GavvalaRammohan.jpg';
import Jafar from '../../assets/facultyPictures/civil/Jafar.jpg';
import PavanKumar from '../../assets/facultyPictures/civil/PPavanKumar.jpg'; // Assuming this is the correct path

/**
 * Faculty showcase section component for homepage - Bootstrapped version with updated navigation
 * Displaying 4 featured faculty members with link to full faculty page
 */
const FacultySection = () => {
  // State for active department
  const [activeDepartment, setActiveDepartment] = useState('cse');
  
  // Departments
  const departments = [
    { id: 'cse', name: 'Computer Science' },
    { id: 'ece', name: 'Electronics & Communication' },
    { id: 'mech', name: 'Mechanical Engineering' },
    { id: 'civil', name: 'Civil Engineering' },
    { id: 'eee', name: 'Electrical Engineering' },
    // {id:"humanities", name:"Humanities & Sciences"}
  ];
  
  // Faculty data - Using real faculty for all departments
  const facultyData = {
    cse: [
      {
        id: 1,
        name: 'Dr. Bhaskar Naik',
        position: 'Professor & HOD',
        image: BhaskarNaik,
      },
      {
        id: 2,
        name: 'Dr. Noor Mohammed',
        position: 'Associate Professor',
        image: NoorMohammed,
      },
      {
        id: 3,
        name: 'Prof. Prasanna',
        position: 'Assistant Professor',
        image: Prasanna,
      },
      {
        id: 4,
        name: 'Dr. Ramesh Babu',
        position: 'Associate Professor',
        image: RameshBabu,
      }
    ],
    ece: [
      {
        id: 1,
        name: 'Dr. Annapurna',
        position: 'Professor & HOD',
        specialization: 'Signal Processing, Communications',
        image: Annapurna,
        education: 'Ph.D. in Electronics & Communication'
      },
      {
        id: 2,
        name: 'Siddiq Vali',
        position: 'Associate Professor',
        image: SadiqVali,
        education: 'Ph.D. in Electronics'
      },
      {
        id: 3,
        name: 'Vijay Ram Raj',
        position: 'Assistant Professor',
        specialization: 'Wireless Communication, IoT',
        image: VijayaRamRaj,
        education: 'M.Tech in Electronics & Communication'
      },
      {
        id: 4,
        name: 'Naga Raju',
        position: 'Associate Professor',
        specialization: 'Digital Signal Processing, 5G',
        image: NagaRaju,
        education: 'Ph.D. in Electronics & Communication'
      }
    ],
    mech: [
      {
        id: 1,
        name: 'Dr. Anand',
        position: 'Professor & HOD',
        specialization: 'Thermal Engineering, Fluid Dynamics',
        image: Anand,
        education: 'Ph.D. in Mechanical Engineering'
      },
      {
        id: 2,
        name: 'Dr. Archana',
        position: 'Associate Professor',
        specialization: 'Manufacturing Technology, CAD/CAM',
        image: Archana,
        education: 'Ph.D. in Mechanical Engineering'
      },
      {
        id: 3,
        name: 'Prof. Ramesh',
        position: 'Assistant Professor',
        specialization: 'Machine Design, Robotics',
        image: Ramesh,
        education: 'M.Tech in Mechanical Engineering'
      },
      {
        id: 4,
        name: 'Dr. Raji Gandhi',
        position: 'Associate Professor',
        specialization: 'Industrial Engineering, Operations Research',
        image: RajiGandhi,
        education: 'Ph.D. in Mechanical Engineering'
      }
    ],
    civil: [
      {
        id: 1,
        name: 'Dr. Siva Prasad',
        position: 'Professor & HOD',
        specialization: 'Structural Engineering, Earthquake Resistant Design',
        image: sivaprasad,
        education: 'Ph.D. in Civil Engineering'
      },
      {
        id: 2,
        name: 'Dr. Ramanjineyulu',
        position: 'Associate Professor',
        specialization: 'Geotechnical Engineering, Foundation Design',
        image: Ramanjineyulu,
        education: 'Ph.D. in Civil Engineering'
      },
      {
        id: 3,
        name: 'Prof. Pavan Kumar',
        position: 'Assistant Professor',
        specialization: 'Environmental Engineering, Water Resources',
        image: PavanKumar,
        education: 'M.Tech in Civil Engineering'
      },
      {
        id: 4,
        name: 'Prof. Jafar',
        position: 'Associate Professor',
        specialization: 'Transportation Engineering, Highway Design',
        image: Jafar,
        education: 'Ph.D. in Civil Engineering'
      }
    ],
    eee: [
      {
        id: 1,
        name: 'Dr. Dhanunjaya',
        position: 'Professor & HOD',
        specialization: 'Power Systems, Smart Grid',
        image: dhanunjaya,
        education: 'Ph.D. in Electrical Engineering'
      },
      {
        id: 2,
        name: 'Dr. D. Nagaraju',
        position: 'Associate Professor',
        specialization: 'Power Electronics, Electric Drives',
        image: DNagaraju,
        education: 'Ph.D. in Electrical Engineering'
      },
      {
        id: 3,
        name: 'Prof. Khadarvali',
        position: 'Assistant Professor',
        specialization: 'Control Systems, Electrical Machines',
        image: khadarvali,
        education: 'M.Tech in Electrical Engineering'
      },
      {
        id: 4,
        name: 'Prof. Ramu',
        position: 'Associate Professor',
        specialization: 'Renewable Energy Systems, Microgrids',
        image: ramu,
        education: 'Ph.D. in Electrical Engineering'
      }
    ]
  };
  
  // Get active faculty list
  const activeFaculty = facultyData[activeDepartment];
  
  return (
    <section className="faculty-section py-5 bg-light">
      <Container>
        <SectionHeader
          subtitle="Academic Excellence"
          title="Our Distinguished Faculty"
          description="Learn from experienced professors and industry experts dedicated to student success"
          centered={true}
        />
        
        {/* Department navigation tabs - Using the category-tabs style from original */}
        <div className="d-flex justify-content-center mb-5">
          <div className="category-tabs">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`category-tab ${activeDepartment === dept.id ? 'active' : ''}`}
                onClick={() => setActiveDepartment(dept.id)}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
        
        <Row className="g-4">
          {activeFaculty.map(faculty => (
            <Col lg={3} md={6} key={faculty.id}>
              <div className="faculty-card h-100 border-0 shadow-sm">
                <div className="faculty-img-container" style={{ height: "240px", objectPosition: "top center" }}>
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="faculty-image"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="mb-1 fw-bold">{faculty.name}</h4>
                  <p className="faculty-position">{faculty.position}</p>
                  <a href={`/faculty/${activeDepartment}/${faculty.id}`} className="faculty-link">
                    View Profile <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Button 
            variant="read-more" 
            text={`View All ${departments.find(d => d.id === activeDepartment).name} Faculty`}
            icon="fas fa-arrow-right"
            href={`/faculty-${activeDepartment}`}
          />
        </div>
      </Container>
    </section>
  );
};

export default FacultySection;