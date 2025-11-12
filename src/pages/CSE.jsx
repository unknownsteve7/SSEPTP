import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Contact from '../components/common/Contact';

/**
 * Computer Science Engineering department page
 * Displays focused information about CSE program
 */
const CSEProgramme = () => {
  const navigate = useNavigate();
  
  // CSE programme details
  const programme = {
    id: 1,
    title: 'Computer Science & Engineering',
    code: 'CSE',
    icon: 'fas fa-laptop-code',
    color: '#1D9DD9',
    description: 'Study algorithms, programming languages, software design, and computer systems architecture.',
    highlights: [
      'Advanced programming labs',
      'AI and machine learning specializations',
      'Industry partnerships with tech giants',
      'Modern software development methodologies'
    ],
    duration: '4 Years',
    seats: 120,
    eligibility: '10+2 with Mathematics, Physics, Chemistry',
    vision: 'To produce competent computer science professionals with ethical values who can tackle real-world challenges through innovation and technology.',
    mission: 'To provide quality education in both theoretical foundations and practical applications of computer science, promoting research and fostering industry collaboration.',
    courseStructure: [
      'Foundation courses in programming and mathematics',
      'Core CS subjects including algorithms, data structures, and operating systems',
      'Advanced electives in AI, ML, cloud computing, and cybersecurity',
      'Final year project and industry internship'
    ],
    careers: [
      'Software Developer',
      'Systems Analyst',
      'Data Scientist',
      'Cloud Engineer',
      'AI/ML Engineer',
      'Cybersecurity Specialist'
    ],
    labFacilities: [
      'Programming Lab with high-end workstations',
      'AI & Machine Learning Lab',
      'Network Security Lab',
      'IoT & Embedded Systems Lab',
      'Project & Research Lab'
    ]
  };

  // Handle navigation back to main programmes page
  const handleBackNavigation = () => {
    navigate('/programmes/all');
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="py-5 my-3 bg-gradient-primary text-white position-relative">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-3">{programme.title}</h1>
              <p className="lead opacity-75 mb-0">
                {programme.description}
              </p>
              <div className="d-flex gap-3 mt-4">
                <div className="badge bg-light text-dark py-2 px-3 rounded-pill">
                  <i className="fas fa-clock me-2 text-secondary"></i>
                  <span>{programme.duration}</span>
                </div>
                <div className="badge bg-light text-dark py-2 px-3 rounded-pill">
                  <i className="fas fa-user-graduate me-2 text-secondary"></i>
                  <span>{programme.seats} Seats</span>
                </div>
                <div className="badge bg-light text-dark py-2 px-3 rounded-pill">
                  <i className="fas fa-code-branch me-2 text-secondary"></i>
                  <span>{programme.code}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-100" style={{height: "60px"}}>
            <path fill="#f8f9fa" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Programme Overview */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                  <div 
                    className="rounded-4 d-flex align-items-center justify-content-center mb-4" 
                    style={{ 
                      width: "60px", 
                      height: "60px", 
                      backgroundColor: programme.color,
                      boxShadow: `0 4px 15px ${programme.color}40`
                    }}
                  >
                    <i className={`${programme.icon} text-white fs-4`}></i>
                  </div>
                  <h3 className="h4 mb-3">Programme Highlights</h3>
                  <ul className="list-unstyled mb-0">
                    {programme.highlights.map((highlight, index) => (
                      <li key={index} className="mb-3 d-flex align-items-baseline">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4 border-bottom pb-3">About The Programme</h3>
                  <div className="mb-4">
                    <h4 className="h5 text-primary">Vision</h4>
                    <p className="mb-3">{programme.vision}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="h5 text-primary">Mission</h4>
                    <p className="mb-3">{programme.mission}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="h5 text-primary">Eligibility</h4>
                    <p className="mb-0">{programme.eligibility}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Structure */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <SectionHeader
            subtitle="Academic Structure"
            title="Course Curriculum"
            description="Comprehensive curriculum designed in consultation with industry experts"
            centered={true}
          />
          
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Course Structure</h3>
                  <ul className="list-unstyled mb-0">
                    {programme.courseStructure.map((item, index) => (
                      <li key={index} className="mb-3 d-flex align-items-baseline">
                        <div className="badge rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center me-3" style={{width: "25px", height: "25px", minWidth: "25px"}}>
                          {index + 1}
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Laboratory Facilities</h3>
                  <ul className="list-unstyled mb-0">
                    {programme.labFacilities.map((lab, index) => (
                      <li key={index} className="mb-3 d-flex align-items-baseline">
                        <i className="fas fa-flask text-primary me-3"></i>
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Prospects */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <SectionHeader
            subtitle="Future Pathways"
            title="Career Opportunities"
            description="A degree in Computer Science opens doors to diverse and rewarding career opportunities"
            centered={true}
          />
          
          <div className="row g-4 justify-content-center">
            {programme.careers.map((career, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="card border-0 rounded-4 shadow-sm text-center p-3 hover-translate-y transition-all h-100">
                  <div className="card-body">
                    <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{width: "60px", height: "60px"}}>
                      <i className="fas fa-briefcase text-primary"></i>
                    </div>
                    <h3 className="h5 mb-0">{career}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="card border-0 rounded-4 shadow bg-gradient-primary text-white p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h2 className="display-6 fw-bold mb-3">Ready to Build Your Future in Computer Science?</h2>
                <p className="lead mb-0 opacity-75">Start your journey towards becoming a tech professional at SSE</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Button 
                  variant="light"
                  text="Apply Now"
                  href="/admissions/enquiry"
                  icon="fas fa-arrow-right"
                />
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

export default CSEProgramme;