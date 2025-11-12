import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

/**
 * Academics page component
 * Displays information about academic programs and curriculum
 */
const Courses = () => {
  // State for active department tab
  const [activeDepartment, setActiveDepartment] = useState("cse");
  
  // Departments data
  const departments = [
    { id: "cse", name: "Computer Science & Engineering" },
    { id: "ece", name: "Electronics & Communication Engineering" },
    { id: "me", name: "Mechanical Engineering" },
    { id: "ce", name: "Civil Engineering" },
    { id: "eee", name: "Electrical & Electronics Engineering"},
    { id: "it", name: "Information Technology" }
  ];
  
  // Department details
  const departmentDetails = {
    cse: {
      overview: "The Department of Computer Science & Engineering offers a comprehensive curriculum that integrates theoretical foundations with practical applications. The program is continuously updated to incorporate the latest advancements in computing technologies, preparing students for dynamic careers in software development, artificial intelligence, data science, and other computing fields.",
      vision: "To be a center of excellence in Computer Science education and research, producing globally competitive professionals with strong technical competence and ethical values.",
      outcomes: [
        "Apply knowledge of computing and mathematics appropriate to the discipline",
        "Analyze a problem, identify, and define the computing requirements appropriate to its solution",
        "Design, implement, and evaluate a computer-based system, process, component, or program to meet desired needs",
        "Work effectively in teams to accomplish a common goal",
        "Understand professional, ethical, legal, security, and social issues and responsibilities",
        "Communicate effectively with a range of audiences",
        "Engage in continuous professional development"
      ],
      courses: [
        { code: "CS101", name: "Introduction to Programming", credits: 4 },
        { code: "CS201", name: "Data Structures and Algorithms", credits: 4 },
        { code: "CS301", name: "Database Management Systems", credits: 4 },
        { code: "CS302", name: "Operating Systems", credits: 4 },
        { code: "CS401", name: "Computer Networks", credits: 3 },
        { code: "CS402", name: "Software Engineering", credits: 3 },
        { code: "CS501", name: "Artificial Intelligence", credits: 4 },
        { code: "CS502", name: "Web Technologies", credits: 3 }
      ],
      electives: [
        "Machine Learning",
        "Cloud Computing",
        "Internet of Things",
        "Big Data Analytics",
        "Cyber Security",
        "Data Mining",
        "Mobile Application Development",
        "Natural Language Processing"
      ]
    },
    ece: {
      overview: "The Department of Electronics & Communication Engineering offers a comprehensive curriculum focused on electronic devices, communication systems, signal processing, and embedded systems. The program combines theoretical knowledge with practical laboratory experience, preparing students for careers in telecommunications, semiconductor industry, and consumer electronics.",
      vision: "To be a premier department producing competent Electronics and Communication Engineers capable of addressing contemporary technological challenges through innovative solutions.",
      outcomes: [
        "Apply knowledge of mathematics, science, and engineering principles to solve complex engineering problems",
        "Design and conduct experiments, analyze and interpret data related to electronics and communication systems",
        "Design electronic systems and components to meet specified needs with appropriate consideration for public health, safety, and welfare",
        "Function effectively in multidisciplinary teams",
        "Identify, formulate, and solve engineering problems in the field of electronics and communication",
        "Communicate effectively in professional environments",
        "Engage in lifelong learning and adapt to emerging technologies"
      ],
      courses: [
        { code: "EC101", name: "Basic Electronics", credits: 4 },
        { code: "EC201", name: "Digital Electronics", credits: 4 },
        { code: "EC301", name: "Signals and Systems", credits: 4 },
        { code: "EC302", name: "Communication Systems", credits: 4 },
        { code: "EC401", name: "Microcontrollers", credits: 3 },
        { code: "EC402", name: "Digital Signal Processing", credits: 4 },
        { code: "EC501", name: "VLSI Design", credits: 4 },
        { code: "EC502", name: "Wireless Communication", credits: 3 }
      ],
      electives: [
        "Satellite Communication",
        "Optical Communication",
        "Embedded Systems",
        "Antenna Design",
        "Digital Image Processing",
        "Microwave Engineering",
        "IoT Systems",
        "Robotics and Control"
      ]
    },
    me: {
      overview: "The Department of Mechanical Engineering offers a comprehensive curriculum that encompasses the fundamentals of mechanics, thermodynamics, materials science, and manufacturing processes. The program blends theoretical concepts with practical applications through extensive laboratory work, design projects, and industrial visits, preparing students for diverse engineering careers.",
      vision: "To be a center of excellence in mechanical engineering education and research, producing skilled engineers with strong technical competence, innovation capabilities, and professional ethics.",
      outcomes: [
        "Apply knowledge of mathematics, science, and engineering fundamentals to solve mechanical engineering problems",
        "Design and conduct experiments, analyze and interpret data related to mechanical systems",
        "Design mechanical components, systems, and processes to meet desired needs within realistic constraints",
        "Function effectively in multidisciplinary teams",
        "Identify, formulate, and solve engineering problems in mechanical engineering",
        "Communicate effectively in professional environments",
        "Engage in lifelong learning and adapt to emerging technologies"
      ],
      courses: [
        { code: "ME101", name: "Engineering Mechanics", credits: 4 },
        { code: "ME201", name: "Thermodynamics", credits: 4 },
        { code: "ME301", name: "Fluid Mechanics", credits: 4 },
        { code: "ME302", name: "Machine Design", credits: 4 },
        { code: "ME401", name: "Heat Transfer", credits: 3 },
        { code: "ME402", name: "Manufacturing Processes", credits: 4 },
        { code: "ME501", name: "CAD/CAM", credits: 4 },
        { code: "ME502", name: "Industrial Engineering", credits: 3 }
      ],
      electives: [
        "Robotics and Automation",
        "Automobile Engineering",
        "Renewable Energy Systems",
        "Computational Fluid Dynamics",
        "Advanced Materials",
        "Refrigeration and Air Conditioning",
        "Mechatronics",
        "Additive Manufacturing"
      ]
    },
    ce: {
      overview: "The Department of Civil Engineering offers a comprehensive curriculum covering structural engineering, geotechnical engineering, transportation engineering, and environmental engineering. The program combines theoretical knowledge with practical applications through laboratory work, field visits, and design projects, preparing students for careers in construction, infrastructure development, and environmental management.",
      vision: "To be a leading department in civil engineering education and research, producing competent engineers who contribute to sustainable infrastructure development with ethical and social responsibility.",
      outcomes: [
        "Apply knowledge of mathematics, science, and engineering principles to solve civil engineering problems",
        "Design and conduct experiments, analyze and interpret data related to civil engineering systems",
        "Design civil engineering systems and components to meet desired needs within realistic constraints",
        "Function effectively in multidisciplinary teams",
        "Identify, formulate, and solve engineering problems in civil engineering",
        "Communicate effectively in professional environments",
        "Understand the impact of civil engineering solutions in a global, economic, environmental, and societal context"
      ],
      courses: [
        { code: "CE101", name: "Engineering Mechanics", credits: 4 },
        { code: "CE201", name: "Surveying", credits: 4 },
        { code: "CE301", name: "Structural Analysis", credits: 4 },
        { code: "CE302", name: "Geotechnical Engineering", credits: 4 },
        { code: "CE401", name: "Reinforced Concrete Design", credits: 4 },
        { code: "CE402", name: "Transportation Engineering", credits: 3 },
        { code: "CE501", name: "Environmental Engineering", credits: 3 },
        { code: "CE502", name: "Construction Management", credits: 3 }
      ],
      electives: [
        "Advanced Structural Design",
        "Highway Engineering",
        "Water Resources Engineering",
        "Foundation Engineering",
        "Earthquake Resistant Design",
        "Urban Planning",
        "Bridge Engineering",
        "Green Building Design"
      ]
    },
    eee: {
      overview: "The Department of Electrical & Electronics Engineering offers a comprehensive curriculum focusing on power systems, electrical machines, control systems, and power electronics. The program combines theoretical principles with practical applications through laboratory experiments, simulation projects, and industrial visits, preparing students for careers in power generation, transmission, distribution, and industrial automation.",
      vision: "To be a premier department producing competent Electrical and Electronics Engineers equipped with technical expertise, innovative thinking, and professional ethics to meet global electrical energy challenges.",
      outcomes: [
        "Apply knowledge of mathematics, science, and engineering principles to solve electrical engineering problems",
        "Design and conduct experiments, analyze and interpret data related to electrical systems",
        "Design electrical systems and components to meet desired needs within realistic constraints",
        "Function effectively in multidisciplinary teams",
        "Identify, formulate, and solve engineering problems in electrical engineering",
        "Communicate effectively in professional environments",
        "Engage in lifelong learning and adapt to emerging technologies"
      ],
      courses: [
        { code: "EE101", name: "Basic Electrical Engineering", credits: 4 },
        { code: "EE201", name: "Electrical Circuits", credits: 4 },
        { code: "EE301", name: "Electrical Machines", credits: 4 },
        { code: "EE302", name: "Power Systems", credits: 4 },
        { code: "EE401", name: "Control Systems", credits: 3 },
        { code: "EE402", name: "Power Electronics", credits: 4 },
        { code: "EE501", name: "High Voltage Engineering", credits: 3 },
        { code: "EE502", name: "Renewable Energy Systems", credits: 3 }
      ],
      electives: [
        "Smart Grid Technologies",
        "Electric Drives",
        "Power System Protection",
        "FACTS Devices",
        "Energy Management Systems",
        "Industrial Automation",
        "Electric Vehicles",
        "Microgrids"
      ]
    },
    it: {
      overview: "The Department of Information Technology offers a comprehensive curriculum covering computing fundamentals, software development, data management, and network technologies. The program emphasizes both theoretical concepts and practical skills through hands-on projects, industry collaborations, and internship opportunities, preparing students for careers in software development, systems integration, and IT services.",
      vision: "To be a center of excellence in Information Technology education and research, producing globally competent professionals with technical proficiency, innovation capabilities, and ethical values.",
      outcomes: [
        "Apply knowledge of computing and mathematics appropriate to information technology",
        "Analyze a problem, identify, and define the computing requirements appropriate to its solution",
        "Design, implement, and evaluate computer-based systems to meet desired needs",
        "Function effectively in teams to accomplish a common goal",
        "Understand professional, ethical, legal, security, and social issues and responsibilities",
        "Communicate effectively with a range of audiences",
        "Engage in continuous professional development"
      ],
      courses: [
        { code: "IT101", name: "Introduction to Information Technology", credits: 3 },
        { code: "IT201", name: "Object-Oriented Programming", credits: 4 },
        { code: "IT301", name: "Database Management Systems", credits: 4 },
        { code: "IT302", name: "Web Technologies", credits: 3 },
        { code: "IT401", name: "Computer Networks", credits: 4 },
        { code: "IT402", name: "Software Engineering", credits: 3 },
        { code: "IT501", name: "Information Security", credits: 3 },
        { code: "IT502", name: "Cloud Computing", credits: 3 }
      ],
      electives: [
        "Data Science",
        "Mobile Application Development",
        "Internet of Things",
        "Big Data Analytics",
        "Artificial Intelligence",
        "DevOps",
        "Blockchain Technology",
        "Enterprise Resource Planning"
      ]
    }
  };
  
  // Get active department data
  const activeDeptData = departmentDetails[activeDepartment];
  const activeDeptInfo = departments.find(dept => dept.id === activeDepartment);

  return (
    <div className="academics-page">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white">Academics</h1>
              <p className="lead text-white opacity-90">
                Excellence in education through continuous curriculum development
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Overview Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h2 className="h3 fw-bold mb-4 pb-2 border-bottom">Academic Excellence</h2>
                  <p className="mb-4">
                    The process of globalization puts great responsibility on academic institutions to continuously update 
                    and re-design their curricula in every field to equip students to cope with the changing needs of society. 
                    Tremendous developments and inventions in industry, research, and development are taking place at a rapid pace.
                  </p>
                  <p className="mb-4">
                    To meet these challenges, Sanskriti School of Engineering, an Autonomous Institute under JNTUH and UGC, 
                    continuously revises its curricula to strengthen infrastructural facilities, motivate faculty to pursue 
                    research, and involve students in ongoing industry and R&D sponsored projects. This enables the institution 
                    to transform young amateur engineers into highly skilled professional technocrats, meeting the Institution's 
                    Vision, Mission, and Goals.
                  </p>
                  <p className="mb-4">
                    The academic section of SSE facilitates and encourages all departments to continuously revise and update 
                    with the latest trends in technology and to equip for societal needs. This section provides norms and 
                    guidelines for preparing course structure and drafting the syllabus of each subject to the departments. 
                    The Department Academic Committees (DACs) of respective departments discuss the content of the syllabus 
                    as per the prescribed norms in consultation with other departments, if necessary.
                  </p>
                  <p>
                    A draft copy is prepared and presented to the concerned Board of Studies (BoS) for discussion and 
                    finalization of the syllabus and course structure. The finalized course structure and syllabus, 
                    approved by the respective BoS, are placed before the Academic Council (AC) for further discussion 
                    on course structure and other academic matters for approval and implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Departments Section */}
      <section className="py-5">
        <div className="container py-4">
          <SectionHeader
            subtitle="Academic Programs"
            title="Engineering Departments"
            description="Explore our range of engineering departments offering cutting-edge curriculum and specialized courses"
            centered={true}
          />
          
          {/* Department Navigation Tabs */}
          <div className="d-flex justify-content-center flex-wrap mb-5">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`btn rounded-pill px-3 py-2 m-1 ${
                  activeDepartment === dept.id 
                    ? 'btn-primary' 
                    : 'btn-outline-secondary'
                }`}
                onClick={() => setActiveDepartment(dept.id)}
              >
                {dept.name}
              </button>
            ))}
          </div>
          
          {/* Department Details */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-white py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="h4 mb-0">{activeDeptInfo.name}</h3>
                    <span className="badge bg-light text-primary">HOD: {activeDeptInfo.hod}</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  {/* Department Overview */}
                  <div className="mb-4">
                    <h4 className="h5 fw-bold mb-3">Department Overview</h4>
                    <p>{activeDeptData.overview}</p>
                  </div>
                  
                  {/* Department Vision */}
                  <div className="mb-4">
                    <h4 className="h5 fw-bold mb-3">Vision</h4>
                    <div className="bg-light p-3 rounded">
                      <p className="mb-0 fst-italic">{activeDeptData.vision}</p>
                    </div>
                  </div>
                  
                  {/* Program Outcomes */}
                  <div className="mb-4">
                    <h4 className="h5 fw-bold mb-3">Program Outcomes</h4>
                    <div className="row">
                      {activeDeptData.outcomes.map((outcome, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                          <div className="d-flex">
                            <div className="me-3 text-primary">
                              <i className="fas fa-check-circle mt-1"></i>
                            </div>
                            <div>
                              <p className="mb-0">{outcome}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Core Courses */}
                  <div className="mb-4">
                    <h4 className="h5 fw-bold mb-3">Core Courses</h4>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="table-light">
                          <tr>
                            <th>Code</th>
                            <th>Course Name</th>
                            <th>Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeDeptData.courses.map((course, index) => (
                            <tr key={index}>
                              <td>{course.code}</td>
                              <td>{course.name}</td>
                              <td>{course.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Elective Courses */}
                  <div>
                    <h4 className="h5 fw-bold mb-3">Elective Courses</h4>
                    <div className="row g-3">
                      {activeDeptData.electives.map((elective, index) => (
                        <div className="col-md-3 col-sm-6" key={index}>
                          <div className="bg-light p-3 rounded text-center h-100">
                            <p className="mb-0 small">{elective}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Resources Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeader
            subtitle="Supporting Learning"
            title="Academic Resources"
            description="Resources available to support academic excellence and curriculum implementation"
            centered={true}
          />
          
          <div className="row justify-content-center g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-book fa-2x"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Library</h3>
                  <p className="mb-4">Access to extensive resources including e-books, journals, research papers, and online courses to support academic learning and research activities.</p>
                  
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-laptop-code fa-2x"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Laboratory Facilities</h3>
                  <p className="mb-4">State-of-the-art laboratories equipped with the latest technology and equipment to provide hands-on learning experiences across all engineering disciplines.</p>
                  
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-calendar-alt fa-2x"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Academic Calendar</h3>
                  <p className="mb-4">Detailed academic schedule including class sessions, examination dates, holidays, and other important academic events for the current semester.</p>
                  
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

export default Courses;