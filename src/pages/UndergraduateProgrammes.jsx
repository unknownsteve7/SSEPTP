import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import '../styles/undergraduateProgrammes.css';
import Contact from '../components/common/Contact';
import girlsStudying from '../assets/girlsStudying.jpg';
/**
 * Undergraduate Programmes page component
 * Displays detailed information about B.Tech programmes
 */
const UndergraduateProgrammes = () => {
  // State to track which program is selected for details view
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size for responsive design
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Undergraduate programmes offered by SSE
  const programmes = [
    {
      id: 1,
      title: 'Computer Science & Engineering',
      code: 'CSE',
      icon: 'fas fa-laptop-code',
      color: '#1D9DD9',
      shortDescription: 'Study algorithms, programming languages, software design, and computer systems architecture.',
      fullDescription: 'The B.Tech in Computer Science & Engineering program at SSE is designed to produce industry-ready professionals with strong theoretical knowledge and practical skills in computer science. Students will learn to design, develop, and analyze software systems, data structures, algorithms, databases, networking, and artificial intelligence.',
      courseStructure: [
        { year: 'First Year', subjects: ['Engineering Mathematics', 'Physics', 'Computer Programming', 'Digital Logic', 'Engineering Drawing', 'Environmental Science'] },
        { year: 'Second Year', subjects: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Computer Organization', 'Database Management Systems', 'Operating Systems', 'Discrete Mathematics'] },
        { year: 'Third Year', subjects: ['Software Engineering', 'Computer Networks', 'Web Technologies', 'Artificial Intelligence', 'Machine Learning', 'Cloud Computing'] },
        { year: 'Fourth Year', subjects: ['Distributed Systems', 'Cyber Security', 'Big Data Analytics', 'Internet of Things', 'Project Work', 'Professional Electives'] }
      ],
      careerOpportunities: [
        'Software Developer', 'Systems Analyst', 'Database Administrator', 'Network Engineer', 'Web Developer', 'Mobile App Developer', 'AI/ML Engineer', 'Data Scientist'
      ],
      labFacilities: [
        'Advanced Computing Lab', 'Network & Security Lab', 'Database Systems Lab', 'Software Development Lab', 'AI & ML Lab', 'IoT Lab'
      ],
      duration: '4 Years',
      seats: 120,
      eligibility: '10+2 with Mathematics, Physics, Chemistry with minimum 50% marks (45% for reserved categories)',
      achievements: 'Our CSE students have consistently performed well in national coding competitions and hackathons. Many graduates have been placed in leading tech companies like TCS, Infosys, Wipro, and various startups with excellent packages.'
    },
    {
      id: 2,
      title: 'Electronics & Communication Engineering',
      code: 'ECE',
      icon: 'fas fa-microchip',
      color: '#F9843D',
      shortDescription: 'Learn to design, develop, and maintain electronic systems, circuits, and communication networks.',
      fullDescription: 'The B.Tech in Electronics & Communication Engineering program focuses on designing and developing electronic systems and communication networks. Students gain expertise in areas such as analog and digital electronics, VLSI design, embedded systems, signal processing, and wireless communication.',
      courseStructure: [
        { year: 'First Year', subjects: ['Engineering Mathematics', 'Physics', 'Basic Electrical Engineering', 'Engineering Drawing', 'Programming Fundamentals', 'Environmental Science'] },
        { year: 'Second Year', subjects: ['Electronic Devices', 'Digital Systems Design', 'Signals & Systems', 'Analog Circuits', 'Electromagnetic Theory', 'Communication Systems'] },
        { year: 'Third Year', subjects: ['Digital Signal Processing', 'VLSI Design', 'Microprocessors & Microcontrollers', 'Control Systems', 'Antenna & Wave Propagation', 'Wireless Communication'] },
        { year: 'Fourth Year', subjects: ['Embedded Systems', 'Optical Communication', 'Satellite Communication', 'IoT Systems', 'Project Work', 'Professional Electives'] }
      ],
      careerOpportunities: [
        'Electronics Design Engineer', 'Communication Systems Engineer', 'VLSI Design Engineer', 'IoT Developer', 'Network Planning Engineer', 'Embedded Systems Designer', 'Technical Consultant'
      ],
      labFacilities: [
        'Basic Electronics Lab', 'Communication Systems Lab', 'VLSI Design Lab', 'Microprocessor & Microcontroller Lab', 'DSP Lab', 'IoT & Embedded Systems Lab'
      ],
      duration: '4 Years',
      seats: 120,
      eligibility: '10+2 with Mathematics, Physics, Chemistry with minimum 50% marks (45% for reserved categories)',
      achievements: 'Our ECE students have won several awards in technical competitions. Many have been placed in leading electronics and telecommunications companies like Samsung, Qualcomm, and various PSUs.'
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      code: 'ME',
      icon: 'fas fa-cogs',
      color: '#28A745',
      shortDescription: 'Explore design, manufacturing, and maintenance of mechanical systems and machinery.',
      fullDescription: 'The B.Tech in Mechanical Engineering program provides comprehensive knowledge in design, manufacturing, and maintenance of mechanical systems. Students are trained in thermodynamics, fluid mechanics, materials science, manufacturing processes, CAD/CAM, robotics, and industrial engineering.',
      courseStructure: [
        { year: 'First Year', subjects: ['Engineering Mathematics', 'Physics', 'Chemistry', 'Engineering Drawing', 'Basic Electrical Engineering', 'Programming Fundamentals'] },
        { year: 'Second Year', subjects: ['Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Material Science', 'Manufacturing Processes', 'Machine Drawing'] },
        { year: 'Third Year', subjects: ['Heat Transfer', 'Dynamics of Machinery', 'Design of Machine Elements', 'Metrology & Measurements', 'Hydraulic Machines', 'CAD/CAM'] },
        { year: 'Fourth Year', subjects: ['Robotics', 'Industrial Engineering', 'Automobile Engineering', 'Refrigeration & Air Conditioning', 'Project Work', 'Professional Electives'] }
      ],
      careerOpportunities: [
        'Mechanical Design Engineer', 'Production Engineer', 'Quality Control Engineer', 'Automotive Engineer', 'HVAC Engineer', 'CAD/CAM Specialist', 'Robotics Engineer'
      ],
      labFacilities: [
        'Engineering Mechanics Lab', 'Thermal Engineering Lab', 'Fluid Mechanics Lab', 'Manufacturing Technology Lab', 'CAD/CAM Lab', 'Robotics Lab'
      ],
      duration: '4 Years',
      seats: 120,
      eligibility: '10+2 with Mathematics, Physics, Chemistry with minimum 50% marks (45% for reserved categories)',
      achievements: 'Our Mechanical Engineering students have excelled in competitions like SAE BAJA, Go-Kart, and other design challenges. Graduates have been placed in companies like L&T, Tata Motors, and various manufacturing industries.'
    },
    {
      id: 4,
      title: 'Civil Engineering',
      code: 'CE',
      icon: 'fas fa-hard-hat',
      color: '#6610F2',
      shortDescription: 'Master the art of designing, building, and maintaining the physical built environment.',
      fullDescription: 'The B.Tech in Civil Engineering program equips students with the knowledge to design, construct, and maintain infrastructure like buildings, roads, bridges, and water supply systems. The curriculum covers structural engineering, geotechnical engineering, transportation engineering, environmental engineering, and construction management.',
      courseStructure: [
        { year: 'First Year', subjects: ['Engineering Mathematics', 'Physics', 'Chemistry', 'Engineering Drawing', 'Basic Electrical Engineering', 'Programming Fundamentals'] },
        { year: 'Second Year', subjects: ['Strength of Materials', 'Surveying', 'Fluid Mechanics', 'Building Materials', 'Structural Analysis', 'Soil Mechanics'] },
        { year: 'Third Year', subjects: ['Reinforced Concrete Structures', 'Steel Structures', 'Highway Engineering', 'Foundation Engineering', 'Water Resources Engineering', 'Environmental Engineering'] },
        { year: 'Fourth Year', subjects: ['Advanced Structural Design', 'Transportation Engineering', 'Construction Management', 'Earthquake Resistant Design', 'Project Work', 'Professional Electives'] }
      ],
      careerOpportunities: [
        'Structural Engineer', 'Construction Manager', 'Geotechnical Engineer', 'Transportation Engineer', 'Environmental Engineer', 'Urban Planner', 'Site Engineer'
      ],
      labFacilities: [
        'Material Testing Lab', 'Surveying Lab', 'Structural Engineering Lab', 'Geotechnical Engineering Lab', 'Environmental Engineering Lab', 'CAD Lab'
      ],
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Mathematics, Physics, Chemistry with minimum 50% marks (45% for reserved categories)',
      achievements: 'Our Civil Engineering students have performed well in national design competitions. Many have been placed in construction companies, consulting firms, and government organizations.'
    },
    {
      id: 5,
      title: 'Electrical & Electronics Engineering',
      code: 'EEE',
      icon: 'fas fa-bolt',
      color: '#E04084',
      shortDescription: 'Study generation, transmission, distribution, and utilization of electrical energy systems.',
      fullDescription: 'The B.Tech in Electrical & Electronics Engineering program focuses on the study of generation, transmission, distribution, and utilization of electrical energy. Students learn about electrical machines, power systems, control systems, power electronics, and renewable energy sources.',
      courseStructure: [
        { year: 'First Year', subjects: ['Engineering Mathematics', 'Physics', 'Chemistry', 'Engineering Drawing', 'Programming Fundamentals', 'Environmental Science'] },
        { year: 'Second Year', subjects: ['Electric Circuits', 'Electromagnetic Fields', 'Electrical Machines', 'Analog Electronics', 'Digital Electronics', 'Signals & Systems'] },
        { year: 'Third Year', subjects: ['Power Systems', 'Control Systems', 'Power Electronics', 'Microprocessors & Microcontrollers', 'Electrical Measurements', 'Electric Drives'] },
        { year: 'Fourth Year', subjects: ['High Voltage Engineering', 'Renewable Energy Systems', 'Smart Grid', 'Power System Protection', 'Project Work', 'Professional Electives'] }
      ],
      careerOpportunities: [
        'Electrical Design Engineer', 'Power Systems Engineer', 'Control Systems Engineer', 'Renewable Energy Specialist', 'Automation Engineer', 'Industrial Electrical Engineer'
      ],
      labFacilities: [
        'Electrical Machines Lab', 'Power Systems Lab', 'Control Systems Lab', 'Power Electronics Lab', 'Electrical Measurements Lab', 'Microprocessor & Microcontroller Lab'
      ],
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Mathematics, Physics, Chemistry with minimum 50% marks (45% for reserved categories)',
      achievements: 'Our EEE students have participated and won accolades in various national technical festivals. Many have been placed in power companies, manufacturing industries, and automation firms.'
    },
   
  ];

  // Handle program selection for detailed view
  const handleProgramSelect = (programId) => {
    if (selectedProgram === programId) {
      setSelectedProgram(null); // Toggle off if already selected
    } else {
      setSelectedProgram(programId);
      // Scroll to the details section with smooth behavior
      setTimeout(() => {
        document.getElementById('program-details')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Get the selected program data
  const selectedProgramData = programmes.find(program => program.id === selectedProgram);

  return (
    <div className="undergraduate-page">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header mb-0">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white">Undergraduate Programmes</h1>
              <p className="lead text-white opacity-90">Explore our B.Tech programmes designed to prepare you for a successful career in engineering and technology.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h5 className="text-primary text-uppercase fw-semibold mb-2">Engineering Education</h5>
                <h2 className="fw-bold mb-4">Bachelor of Technology (B.Tech)</h2>
                <p className="mb-4">At Sanskriti School of Engineering, we offer comprehensive B.Tech programmes that blend theoretical knowledge with practical skills. Our curriculum is designed in consultation with industry experts to ensure that our graduates are ready to meet the challenges of the engineering profession.</p>
                <p className="mb-4">All B.Tech programmes are approved by AICTE and follow the latest curriculum guidelines with a focus on innovation, research, and entrepreneurship.</p>
                
                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="fw-semibold mb-1">Industry-Aligned Curriculum</h5>
                      <p className="mb-0 text-muted">Courses designed with input from industry experts</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="fw-semibold mb-1">Practical Training</h5>
                      <p className="mb-0 text-muted">Hands-on experience through state-of-the-art laboratories</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="fw-semibold mb-1">Internship Opportunities</h5>
                      <p className="mb-0 text-muted">Mandatory internships with industry partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow">
                <img src={girlsStudying} alt="B.Tech Students" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programmes Overview */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            subtitle="Our Programmes"
            title="B.Tech Specializations"
            description="Select a programme to view detailed information"
            centered={true}
          />
          
          <div className="row g-4">
            {programmes.map(program => (
              <div key={program.id} className="col-md-6 col-lg-4 mb-4">
                <div 
                  className={`card h-100 program-card shadow-sm ${selectedProgram === program.id ? 'program-card-selected' : ''}`} 
                  onClick={() => handleProgramSelect(program.id)}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="program-icon me-3" style={{ backgroundColor: program.color }}>
                        <i className={program.icon}></i>
                      </div>
                      <div>
                        <span className="program-code">{program.code}</span>
                        <h3 className="program-title">{program.title}</h3>
                      </div>
                    </div>
                    <p className="card-text mb-4">{program.shortDescription}</p>
                    
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-clock text-muted me-2"></i>
                        <span className="text-muted">{program.duration}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user-graduate text-muted me-2"></i>
                        <span className="text-muted">{program.seats} Seats</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-auto">
                      <button className="btn btn-primary w-100">
                        {selectedProgram === program.id ? 'Selected' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Programme Details */}
      {selectedProgramData && (
        <section id="program-details" className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow">
                  <div className="card-header program-header py-4" style={{ backgroundColor: selectedProgramData.color }}>
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <h2 className="text-white mb-1">{selectedProgramData.title} (B.Tech)</h2>
                          <p className="text-white mb-0 opacity-80">Bachelor of Technology in {selectedProgramData.title}</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                          <span className="badge bg-light text-dark fs-5 program-code-badge">{selectedProgramData.code}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body p-0">
                    {/* Description */}
                    <div className="p-4 border-bottom">
                      <h3 className="mb-3">Programme Overview</h3>
                      <p className="mb-4">{selectedProgramData.fullDescription}</p>
                      
                      <div className="row g-4">
                        <div className="col-md-4">
                          <div className="card h-100 bg-light border-0">
                            <div className="card-body">
                              <h4 className="h5 mb-3">Duration</h4>
                              <p className="mb-0">{selectedProgramData.duration}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 bg-light border-0">
                            <div className="card-body">
                              <h4 className="h5 mb-3">Seats</h4>
                              <p className="mb-0">{selectedProgramData.seats} per year</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 bg-light border-0">
                            <div className="card-body">
                              <h4 className="h5 mb-3">Eligibility</h4>
                              <p className="mb-0">{selectedProgramData.eligibility}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Structure */}
                    <div className="p-4 border-bottom">
                      <h3 className="mb-4">Course Structure</h3>
                      <div className="row g-4">
                        {selectedProgramData.courseStructure.map((year, index) => (
                          <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 shadow-sm">
                              <div className="card-header bg-primary text-white">
                                <h4 className="h5 mb-0">{year.year}</h4>
                              </div>
                              <div className="card-body">
                                <ul className="list-group list-group-flush">
                                  {year.subjects.map((subject, idx) => (
                                    <li key={idx} className="list-group-item border-0 px-0">{subject}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Lab Facilities */}
                    <div className="p-4 border-bottom">
                      <h3 className="mb-4">Laboratory Facilities</h3>
                      <div className="row g-3">
                        {selectedProgramData.labFacilities.map((lab, index) => (
                          <div key={index} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                              <div className="card-body p-3">
                                <div className="d-flex align-items-center">
                                  <div className="lab-icon me-3" style={{ backgroundColor: selectedProgramData.color }}>
                                    <i className="fas fa-flask"></i>
                                  </div>
                                  <h5 className="mb-0">{lab}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Career Opportunities */}
                    <div className="p-4 border-bottom">
                      <h3 className="mb-3">Career Opportunities</h3>
                      <p className="mb-4">Graduates of this programme can pursue careers in:</p>
                      <div className="row g-3">
                        {selectedProgramData.careerOpportunities.map((career, index) => (
                          <div key={index} className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center bg-light p-3 rounded h-100">
                              <i className="fas fa-briefcase text-primary me-3"></i>
                              <span>{career}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="p-4 border-bottom">
                      <h3 className="mb-3">Student Achievements</h3>
                      <div className="bg-light p-4 rounded">
                        <p className="mb-0">{selectedProgramData.achievements}</p>
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="p-5 text-center">
                      <h3 className="mb-4">Interested in this programme?</h3>
                      <Button 
                        variant="cta-primary"
                        text="Apply Now for 2025-26"
                        href="/admissions/enquiry"
                        icon="fas fa-arrow-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Admission Requirements */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            subtitle="Admissions"
            title="B.Tech Admission Requirements"
            description="General requirements for all B.Tech programmes"
            centered={true}
          />
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow">
                <div className="card-body p-4 p-md-5">
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h3 className="mb-4">Eligibility Criteria</h3>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>Pass in 10+2 or equivalent with PCM subjects</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>Minimum 50% aggregate (45% for reserved categories)</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>Valid score in JEE Main/State level engineering entrance exam</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="fas fa-check text-success me-3 mt-1"></i> 
                          <span>Age: Not more than 23 years as on July 31, 2025</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">Required Documents</h3>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>10th & 12th Mark Sheets and Certificates</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>Transfer Certificate</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>JEE Main/State Entrance Exam Score Card</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>Category Certificate (if applicable)</span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>Aadhar Card</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="fas fa-file-alt text-primary me-3 mt-1"></i> 
                          <span>Passport size photographs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="alert alert-info mt-4">
                    <div className="d-flex">
                      <i className="fas fa-info-circle fa-2x me-3"></i>
                      <div>
                        <h4 className="alert-heading">Important Note</h4>
                        <p className="mb-0">Admissions to B.Tech programmes are based on merit in the qualifying examination and/or rank in engineering entrance examinations as per the prevailing government norms. The college follows reservation policies as mandated by the government.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <Button 
                      variant="secondary"
                      text="Download Admission Brochure"
                      href="/downloads/admission-brochure.pdf"
                      icon="fas fa-download"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UndergraduateProgrammes;