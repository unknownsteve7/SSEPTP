import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Contact from '../components/common/Contact';
import staff from '../assets/staff.jpg';
import girlsClub from '../assets/girlsClub.jpg';
/**
 * Programmes page component
 * Displays all B.Tech programmes offered by the college
 */
const Programmes = () => {
  // B.Tech programmes offered by SSE
  const programmes = [
    {
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
      eligibility: '10+2 with Mathematics, Physics, Chemistry'
    },
    {
      id: 2,
      title: 'Electronics & Communication',
      code: 'ECE',
      icon: 'fas fa-microchip',
      color: '#F9843D',
      description: 'Learn to design, develop, and maintain electronic systems, circuits, and communication networks.',
      highlights: [
        'Advanced electronics lab',
        'VLSI design facilities',
        'IoT development environment',
        'Industry-grade communication systems'
      ],
      duration: '4 Years',
      seats: 120,
      eligibility: '10+2 with Mathematics, Physics, Chemistry'
    },
    
    {
      id: 5,
      title: 'Electrical & Electronics',
      code: 'EEE',
      icon: 'fas fa-bolt',
      color: '#E04084',
      description: 'Study generation, transmission, distribution, and utilization of electrical energy systems.',
      highlights: [
        'Power electronics lab',
        'Electrical machines lab',
        'Power systems simulation lab',
        'Smart grid technologies'
      ],
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Mathematics, Physics, Chemistry'
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      code: 'ME',
      icon: 'fas fa-cogs',
      color: '#28A745',
      description: 'Explore design, manufacturing, and maintenance of mechanical systems and machinery.',
      highlights: [
        'Modern CAD/CAM labs',
        'Automotive engineering workshops',
        'Thermal science laboratories',
        'Industrial robotics facilities'
      ],
      duration: '4 Years',
      seats: 120,
      eligibility: '10+2 with Mathematics, Physics, Chemistry'
    },
    {
      id: 4,
      title: 'Civil Engineering',
      code: 'CE',
      icon: 'fas fa-hard-hat',
      color: '#6610F2',
      description: 'Master the art of designing, building, and maintaining the physical built environment.',
      highlights: [
        'Structural engineering lab',
        'Environmental engineering facilities',
        'Transportation engineering lab',
        'Geotechnical testing equipment'
      ],
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Mathematics, Physics, Chemistry'
    },
  ];

  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="py-5 bg-gradient-primary text-white position-relative">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">B.Tech Programmes</h1>
              <p className="lead opacity-75 mb-0">
                Sanskriti School of Engineering offers undergraduate engineering programmes designed to develop technical knowledge, practical skills, and innovative thinking.
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-100" style={{height: "60px"}}>
            <path fill="#f8f9fa" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-5 bg-white position-relative">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-5">
                <h2 className="display-5 fw-bold text-primary mb-4 position-relative pb-3">Engineering Excellence</h2>
                <p className="lead text-secondary mb-4">
                  At Sanskriti School of Engineering, we are committed to providing quality engineering education that prepares students for the challenges of the future. Our B.Tech programmes are designed with industry inputs and focus on practical learning.
                </p>
                <div className="row mb-4">
                  {[
                    'AICTE approved curriculum',
                    'Industry-aligned syllabus',
                    'Experienced faculty',
                    'State-of-the-art labs',
                    'Strong industry connections',
                    'Focus on innovation and research'
                  ].map((feature, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-check-circle text-secondary me-2"></i>
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded-4 overflow-hidden shadow-sm">
                <img 
                  src={girlsClub} 
                  alt="Engineering Students" 
                  className="img-fluid w-100"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programmes Section */}
      <section className="py-5 bg-light position-relative">
        <div className="container py-5">
          <SectionHeader
            subtitle="Academic Programmes"
            title="B.Tech Engineering Disciplines"
            description="Choose from our diverse range of B.Tech programmes designed to nurture the engineers of tomorrow"
            centered={true}
          />
          
          <div className="row g-4">
            {programmes.map(program => (
              <div key={program.id} className="col-lg-6 col-xl-4">
                <div className="card h-100 border-0 rounded-4 shadow-sm transition-all hover-translate-y">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div 
                        className="rounded-4 d-flex align-items-center justify-content-center" 
                        style={{ 
                          width: "60px", 
                          height: "60px", 
                          backgroundColor: program.color,
                          boxShadow: `0 4px 15px ${program.color}40`
                        }}
                      >
                        <i className={`${program.icon} text-white fs-4`}></i>
                      </div>
                      <span className="badge rounded-pill py-2 px-3 bg-light text-secondary fw-medium">
                        {program.code}
                      </span>
                    </div>
                    
                    <h3 className="h4 mb-3">{program.title}</h3>
                    <p className="text-secondary mb-4">{program.description}</p>
                    
                    <div className="d-flex gap-3 mb-4">
                      <div className="badge bg-light text-dark py-2 px-3 rounded-pill">
                        <i className="fas fa-clock me-2 text-secondary"></i>
                        <span>{program.duration}</span>
                      </div>
                      <div className="badge bg-light text-dark py-2 px-3 rounded-pill">
                        <i className="fas fa-user-graduate me-2 text-secondary"></i>
                        <span>{program.seats} Seats</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="h6 mb-3">Highlights</h4>
                      <ul className="list-unstyled mb-0">
                        {program.highlights.map((highlight, index) => (
                          <li key={index} className="mb-2 d-flex align-items-baseline">
                            <i className="fas fa-arrow-right text-secondary fs-6 me-2"></i>
                            <span className="text-secondary small">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Admission Process Section */}
      <section className="py-5 bg-white position-relative">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 rounded-4 shadow">
                <div className="card-body p-4 p-md-5">
                  <h2 className="h2 text-primary mb-4 pb-3 border-bottom border-light">Admission Process for B.Tech Programmes</h2>
                  <p className="lead text-secondary mb-5">Interested candidates can apply for B.Tech programmes through the following process:</p>
                  
                  <div className="row mb-5">
                    {[
                      {
                        title: "Eligibility Check",
                        description: "Ensure you meet the minimum eligibility criteria of 10+2 with PCM subjects."
                      },
                      {
                        title: "Online Application",
                        description: "Complete the online application form with all required details and documents."
                      },
                      {
                        title: "Entrance Exam",
                        description: "Appear for the state or national level engineering entrance examination."
                      },
                      {
                        title: "Counselling",
                        description: "Participate in counselling process for seat allocation based on merit."
                      },
                      {
                        title: "Admission Confirmation",
                        description: "Complete the admission process by submitting required documents and fees."
                      }
                    ].map((step, index) => (
                      <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card h-100 border-0 rounded-4 bg-light position-relative hover-translate-y transition-all">
                          <div className="position-absolute top-0 end-0 mt-3 me-3">
                            <div className="badge rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                              {index + 1}
                            </div>
                          </div>
                          <div className="card-body p-4">
                            <h4 className="h5 mb-3 text-primary">{step.title}</h4>
                            <p className="text-secondary mb-0 small">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      variant="cta-primary"
                      text="Apply Now"
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
      
      {/* Why Choose SSE Section */}
      <section className="py-5 bg-light position-relative">
        <div className="container py-5">
          <SectionHeader
            subtitle="Why SSE"
            title="Engineering Education Excellence"
            description="What makes Sanskriti School of Engineering the ideal choice for your B.Tech journey"
            centered={true}
          />
          
          <div className="row g-4">
            {[
              {
                icon: "fas fa-flask",
                title: "State-of-the-Art Labs",
                content: "Our laboratories are equipped with the latest technology and equipment, providing students with hands-on experience in their respective fields.",
                color: "#1D9DD9"
              },
              {
                icon: "fas fa-chalkboard-teacher",
                title: "Experienced Faculty",
                content: "Learn from experienced professors with strong academic backgrounds and industry experience who are dedicated to student success.",
                color: "#F9843D"
              },
              {
                icon: "fas fa-handshake",
                title: "Industry Partnerships",
                content: "Our strong relationships with leading companies provide internship opportunities, guest lectures, and industry exposure.",
                color: "#28A745"
              },
              {
                icon: "fas fa-laptop",
                title: "Modern Curriculum",
                content: "Our curriculum is regularly updated to include emerging technologies and industry requirements, ensuring relevance and quality.",
                color: "#6610F2"
              },
              {
                icon: "fas fa-users",
                title: "Vibrant Campus Life",
                content: "Engage in a variety of extracurricular activities, technical clubs, and cultural events for holistic development.",
                color: "#E04084"
              },
              {
                icon: "fas fa-briefcase",
                title: "Excellent Placements",
                content: "Our dedicated placement cell works to ensure students get placed in reputed companies with competitive packages.",
                color: "#8E3D19"
              }
            ].map((feature, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 rounded-4 shadow-sm hover-translate-y transition-all">
                  <div className="card-body p-4">
                    <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" 
                      style={{
                        width: "60px", 
                        height: "60px", 
                        backgroundColor: feature.color,
                        boxShadow: `0 4px 15px ${feature.color}40`
                      }}>
                      <i className={`${feature.icon} text-white fs-4`}></i>
                    </div>
                    <h3 className="h5 mb-3">{feature.title}</h3>
                    <p className="text-secondary mb-0">{feature.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-5 bg-white position-relative">
        <div className="container py-5">
          <SectionHeader
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Get answers to common questions about our B.Tech programmes"
            centered={true}
          />
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="accordion accordion-flush" id="programmesFAQ">
                {[
                  {
                    question: "What is the eligibility criteria for B.Tech admissions?",
                    answer: "The minimum eligibility criteria for B.Tech admissions is a pass in 10+2 or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects with a minimum aggregate of 50% marks (45% for reserved categories)."
                  },
                  {
                    question: "How can I apply for B.Tech programmes at SSE?",
                    answer: "You can apply through our online admission portal by submitting the application form along with required documents. Admissions are based on marks in qualifying examinations and/or rank in engineering entrance examinations."
                  },
                  {
                    question: "Are there any scholarships available for B.Tech students?",
                    answer: "Yes, SSE offers merit-based scholarships to deserving students. Additionally, government scholarships and financial aid options are available for eligible candidates. Please visit our scholarships page for more details."
                  },
                  {
                    question: "What is the academic calendar for B.Tech programmes?",
                    answer: "The academic year is typically divided into two semesters - July to December (Odd Semester) and January to June (Even Semester). Each semester includes internal assessments, practical examinations, and end-semester examinations."
                  },
                  {
                    question: "Does SSE provide hostel facilities for students?",
                    answer: "Yes, separate hostel facilities are available for boys and girls with modern amenities, including furnished rooms, mess facilities, recreation areas, and Wi-Fi connectivity. Hostel allocation is done on a first-come, first-served basis."
                  }
                ].map((faq, index) => (
                  <div className="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden" key={index}>
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''} py-4 px-4`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`} 
                        aria-expanded={index === 0 ? 'true' : 'false'} 
                        aria-controls={`collapse${index}`}
                      >
                        <span className="fw-medium">{faq.question}</span>
                      </button>
                    </h2>
                    <div 
                      id={`collapse${index}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      data-bs-parent="#programmesFAQ"
                    >
                      <div className="accordion-body px-4 pb-4 pt-0 text-secondary">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      
      {/* Footer */}
      <Footer />

      {/* Add custom CSS for transitions and effects */}
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #8E3D19 0%, #F9843D 100%);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .hover-translate-y:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Smooth accordion transitions */
        .accordion-button:not(.collapsed) {
          color: #8E3D19;
          background-color: white;
          box-shadow: none;
        }
        
        .accordion-button:focus {
          box-shadow: none;
          border-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Programmes;