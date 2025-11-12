import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import StatCard from "../components/common/StatCard";
import recruiters from "../assets/recruiters.png"; // Assuming you have a JSON file with recruiter data

/**
 * Placements overview page component - Updated with new team data and mission/vision
 */
const Placements = () => {
  // For corporate logos animation
  const [animateLogos, setAnimateLogos] = useState(false);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setAnimateLogos(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Placement statistics
  const placementStats = [
    { value: "1675", label: "Total Offers" },
    { value: "800", label: "Students Placed" },
    { value: "150", label: "Recruiting Companies" },
    { value: "36 LPA", label: "Highest Package" },
  ];

  // Year-wise placement data
  const yearWiseData = [
    {
      year: "2024-25",
      placementRate: "95%",
      highestPackage: "36 LPA",
      averagePackage: "7.5 LPA",
      companiesVisited: 150,
    },
    {
      year: "2023-24",
      placementRate: "93%",
      highestPackage: "32 LPA",
      averagePackage: "7.2 LPA",
      companiesVisited: 142,
    },
    {
      year: "2022-23",
      placementRate: "91%",
      highestPackage: "30 LPA",
      averagePackage: "6.8 LPA",
      companiesVisited: 138,
    },
    {
      year: "2021-22",
      placementRate: "89%",
      highestPackage: "28 LPA",
      averagePackage: "6.5 LPA",
      companiesVisited: 125,
    },
  ];

  // Updated team members data
  const teamMembers = [
    {
      name: "Ms. Kiran Ravi Srivastava",
      role: "CDC – Head",
      image:
        "https://www.sseptp.org/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-08-at-12.29.46-PM.jpeg",
      linkedin: "https://www.linkedin.com/in/kiran-ravi-srivastava",
    },
    {
      name: "Dr. Bala koteswari",
      role: "Coordinator",
      image:
        "https://www.sseptp.org/wp-content/uploads/2023/03/BalaKoteswari.jpg",
      linkedin: "https://www.linkedin.com/in/dr-bala-koteswari",
    },
    {
      name: "Mr. Rakesh Yadav Kodari",
      role: "Coordinator",
      image: "https://www.sseptp.org/wp-content/uploads/2024/11/index.png",
      linkedin: "https://www.linkedin.com/in/rakesh-yadav-kodari",
    },
    {
      name: "Mr. T M K Satheesh",
      role: "Trainer",
      image:
        "https://myslidersin.wordpress.com/wp-content/uploads/2023/06/dsc_0912.jpg",
      linkedin: "#",
    },
    {
      name: "Mrs. C Nagamani",
      role: "Trainer",
      image:
        "https://myslidersin.wordpress.com/wp-content/uploads/2023/06/dsc_0728.jpg",
      linkedin: "#",
    },
    {
      name: "Mrs. A N Gowri Krishnaveni",
      role: "Trainer",
      image:
        "https://myslidersin.wordpress.com/wp-content/uploads/2023/06/dsc_0677.jpg",
      linkedin: "#",
    },
  ];

  return (
    <div className="placements-page">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>Placements</h1>
              <p>
                Launching careers with top companies and preparing students for
                professional success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h5
                className="text-uppercase mb-2 fw-semibold"
                style={{ color: "var(--sse-secondary)", letterSpacing: "2px" }}
              >
                Career Launch Pad
              </h5>
              <h2
                className="mb-4 position-relative pb-3 about-heading"
                style={{ color: "var(--sse-primary)" }}
              >
                Placement Excellence at SSE
              </h2>
              <p className="mb-4">
                The SSE Placements Cell ensures students are aligned with
                evolving market needs and prepares them to convert campus
                placement opportunities into job offers. SSE Placements Cell
                plays a key role in defining recruiters' ideal candidate. We
                encourage students to discover their purpose and equip them with
                the skills to be job-ready.
              </p>
              <p className="mb-4">
                Our comprehensive placement training program begins from the
                second year, focusing on technical skills, aptitude development,
                communication enhancement, and interview preparation. This
                holistic approach ensures that our students are industry-ready
                by the time they graduate.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div
                  className="about-image-border position-absolute d-none d-md-block"
                  style={{
                    top: "30px",
                    left: "-30px",
                    width: "100%",
                    height: "100%",
                    border: "5px solid var(--sse-secondary)",
                    borderRadius: "10px",
                    zIndex: 0,
                  }}
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Placement Interview"
                  className="img-fluid rounded shadow"
                  style={{
                    width: "100%",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - New */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div
                      className="rounded-circle bg-primary text-white mx-auto d-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <i className="fas fa-eye fa-2x"></i>
                    </div>
                    <h3 className="h3 mt-4 mb-3">Our Vision</h3>
                  </div>
                  <p className="mb-0">
                    To provide for the best placements in line with student
                    aspirations and solutions to enable excellence in academic
                    performance and skills required according to industry
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div
                      className="rounded-circle bg-primary text-white mx-auto d-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <i className="fas fa-bullseye fa-2x"></i>
                    </div>
                    <h3 className="h3 mt-4 mb-3">Our Mission</h3>
                  </div>
                  <p className="mb-0">
                    To continuously work on improvements required in academics
                    and non-academics for overall development of students as
                    they get ready to step into the corporate/entrepreneur
                    world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Placement Highlights"
            title="Placement Statistics 2024-25"
            description="Our track record speaks for itself with excellent placement outcomes across departments"
            centered={true}
          />

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-around">
                {placementStats.map((stat, index) => (
                  <div
                    key={index}
                    className="mb-4"
                    style={{ minWidth: "180px" }}
                  >
                    <div className="card text-center border-0 shadow-sm py-4 px-3 h-100 hover-translate-y">
                      <h2
                        className="display-4 fw-bold"
                        style={{ color: "var(--sse-primary)" }}
                      >
                        {stat.value}
                      </h2>
                      <p className="mb-0 text-secondary">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover table-bordered bg-white shadow-sm rounded overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Academic Year</th>
                  <th>Placement Rate</th>
                  <th>Highest Package</th>
                  <th>Average Package</th>
                  <th>Companies Visited</th>
                </tr>
              </thead>
              <tbody>
                {yearWiseData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{data.year}</strong>
                    </td>
                    <td>{data.placementRate}</td>
                    <td>{data.highestPackage}</td>
                    <td>{data.averagePackage}</td>
                    <td>{data.companiesVisited}+</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recruiting Companies */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Our Recruiters"
            title="Leading Companies That Recruit From SSE"
            description="We've built strong relationships with top companies across industries"
            centered={true}
          />
          <img
            src={recruiters}
            alt="Our Recruiting Partners"
            className="img-fluid"
          />
        </div>
      </section>

      {/* Additional Stats Highlights */}
      <section className="py-5 bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Impressive Numbers"
            title="Additional Placement Highlights"
            description="Our students continue to excel with outstanding placement opportunities"
            centered={true}
          />

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div
                    className="display-1 fw-bold mb-3"
                    style={{ color: "var(--sse-primary)" }}
                  >
                    1500
                  </div>
                  <h3 className="h4 mb-2">Internship Offers</h3>
                  <p className="mb-0 text-muted">
                    Hands-on industry experience through quality internships
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div
                    className="display-1 fw-bold mb-3"
                    style={{ color: "var(--sse-primary)" }}
                  >
                    7.5
                  </div>
                  <h3 className="h4 mb-2">Average Package (LPA)</h3>
                  <p className="mb-0 text-muted">
                    Competitive compensation for our talented graduates
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div
                    className="display-1 fw-bold mb-3"
                    style={{ color: "var(--sse-primary)" }}
                  >
                    2
                  </div>
                  <h3 className="h4 mb-2">International Offers</h3>
                  <p className="mb-0 text-muted">
                    Global career opportunities for exceptional students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department-wise Stats */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Department Performance"
            title="Department-wise Placement Statistics"
            description="Consistent excellence across all engineering disciplines"
            centered={true}
          />

          <div className="row g-4">
            {[
              {
                dept: "Computer Science & Engineering",
                rate: "98%",
                avgPkg: "₹4.8 LPA",
                color: "#1D9DD9",
                icon: "fas fa-laptop-code",
              },
              {
                dept: "Electronics & Communication",
                rate: "94%",
                avgPkg: "₹4.4 LPA",
                color: "#F9843D",
                icon: "fas fa-microchip",
              },
              {
                dept: "Mechanical Engineering",
                rate: "92%",
                avgPkg: "₹4.0 LPA",
                color: "#28A745",
                icon: "fas fa-cogs",
              },
              {
                dept: "Electrical Engineering",
                rate: "93%",
                avgPkg: "₹4.2 LPA",
                color: "#E04084",
                icon: "fas fa-bolt",
              },
              {
                dept: "Civil Engineering",
                rate: "91%",
                avgPkg: "₹3.9 LPA",
                color: "#6610F2",
                icon: "fas fa-hard-hat",
              },
              {
                dept: "Information Technology",
                rate: "97%",
                avgPkg: "₹4.6 LPA",
                color: "#8E3D19",
                icon: "fas fa-database",
              },
            ].map((dept, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="p-3 me-3 rounded-circle"
                        style={{ backgroundColor: dept.color, color: "white" }}
                      >
                        <i className={dept.icon}></i>
                      </div>
                      <h3 className="h5 mb-0">{dept.dept}</h3>
                    </div>
                    <div className="row mt-4 text-center">
                      <div className="col-6">
                        <h4
                          className="h2 mb-0 fw-bold"
                          style={{ color: dept.color }}
                        >
                          {dept.rate}
                        </h4>
                        <p className="small text-muted">Placement Rate</p>
                      </div>
                      <div className="col-6">
                        <h4
                          className="h2 mb-0 fw-bold"
                          style={{ color: dept.color }}
                        >
                          {dept.avgPkg}
                        </h4>
                        <p className="small text-muted">Average Package</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h5
                className="text-uppercase mb-2 fw-semibold"
                style={{ color: "var(--sse-secondary)", letterSpacing: "2px" }}
              >
                How It Works
              </h5>
              <h2
                className="mb-4 position-relative pb-3 about-heading"
                style={{ color: "var(--sse-primary)" }}
              >
                Our Placement Process
              </h2>

              <div className="placement-process-timeline">
                {[
                  {
                    step: 1,
                    title: "Pre-Placement Training",
                    icon: "fas fa-chalkboard-teacher",
                    desc: "Extensive training on aptitude, technical skills, communication, and interview preparation.",
                  },
                  {
                    step: 2,
                    title: "Company Registration",
                    icon: "fas fa-building",
                    desc: "Companies register with the placement cell and share their requirements.",
                  },
                  {
                    step: 3,
                    title: "Pre-Placement Talk",
                    icon: "fas fa-microphone",
                    desc: "Companies visit campus to give presentations about their organization and opportunities.",
                  },
                  {
                    step: 4,
                    title: "Selection Process",
                    icon: "fas fa-tasks",
                    desc: "Written tests, group discussions, technical and HR interviews conducted by companies.",
                  },
                  {
                    step: 5,
                    title: "Job Offer",
                    icon: "fas fa-handshake",
                    desc: "Selected students receive offer letters with details of role and compensation.",
                  },
                ].map((step, index) => (
                  <div key={index} className="process-step d-flex mb-4">
                    <div
                      className="process-icon me-4 p-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "var(--sse-secondary)",
                        color: "white",
                        minWidth: "50px",
                        height: "50px",
                      }}
                    >
                      <i className={step.icon}></i>
                    </div>
                    <div>
                      <h3 className="h5 mb-2">
                        Step {step.step}: {step.title}
                      </h3>
                      <p className="mb-0">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm p-4">
                <div className="card-body">
                  <h3 className="card-title h4 mb-4">
                    Placement Calendar 2024-25
                  </h3>

                  <div className="calendar-events">
                    {[
                      {
                        month: "July 2024",
                        events: [
                          "Placement Orientation",
                          "Resume Building Workshop",
                        ],
                      },
                      {
                        month: "August 2024",
                        events: [
                          "Mock Aptitude Tests",
                          "Technical Training Sessions",
                        ],
                      },
                      {
                        month: "September 2024",
                        events: [
                          "Group Discussion Practice",
                          "Mock Interview Sessions",
                        ],
                      },
                      {
                        month: "October 2024",
                        events: [
                          "Pre-Placement Talks Begin",
                          "First Pool of Companies Visit",
                        ],
                      },
                      {
                        month: "November 2024",
                        events: [
                          "Core Companies Recruitment",
                          "Technical Interviews",
                        ],
                      },
                      {
                        month: "December 2024",
                        events: [
                          "IT Companies Recruitment",
                          "Final Placement Phase",
                        ],
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="calendar-item mb-3 pb-3 border-bottom"
                      >
                        <h4 className="h6 mb-2">{item.month}</h4>
                        <ul className="list-unstyled mb-0">
                          {item.events.map((event, idx) => (
                            <li key={idx} className="mb-1">
                              <i className="fas fa-calendar-check me-2 text-primary"></i>{" "}
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Career Preparation"
            title="Training Programs"
            description="Comprehensive training to make you industry-ready"
            centered={true}
          />

          <div className="row g-4">
            {[
              {
                title: "Aptitude Training",
                desc: "Focused training on quantitative aptitude, logical reasoning, and analytical skills required for placement tests.",
                icon: "fas fa-brain",
                color: "#1D9DD9",
              },
              {
                title: "Technical Skills",
                desc: "Specialized training on programming languages, technical concepts, and tools based on industry requirements.",
                icon: "fas fa-code",
                color: "#28A745",
              },
              {
                title: "Soft Skills",
                desc: "Development of communication, presentation, interpersonal skills, and business etiquette.",
                icon: "fas fa-comments",
                color: "#F9843D",
              },
              {
                title: "Group Discussion",
                desc: "Practice sessions for group discussions with feedback on content, communication, and team dynamics.",
                icon: "fas fa-users",
                color: "#E04084",
              },
              {
                title: "Mock Interviews",
                desc: "Simulated technical and HR interview sessions conducted by industry professionals.",
                icon: "fas fa-user-tie",
                color: "#6610F2",
              },
              {
                title: "Resume Building",
                desc: "Guidance on creating effective resumes and online profiles that highlight achievements.",
                icon: "fas fa-file-alt",
                color: "#8E3D19",
              },
            ].map((program, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100 hover-translate-y">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="p-3 me-3 rounded-circle"
                        style={{
                          backgroundColor: program.color,
                          color: "white",
                        }}
                      >
                        <i className={program.icon}></i>
                      </div>
                      <h3 className="h5 mb-0">{program.title}</h3>
                    </div>
                    <p className="card-text">{program.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Team - Updated with better image display */}
      <section className="py-5 bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Meet Our Team"
            title="Training & Placement Cell"
            description="Dedicated professionals guiding students towards successful careers"
            centered={true}
          />

          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-translate-y">
                  <div className="card-body p-4">
                    {/* Improved image display */}
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-circle img-thumbnail"
                        style={{ width: "180px", height: "180px" }}
                      />
                    </div>
                    <h3 className="h5 mb-1">{member.name}</h3>
                    <p className="mb-3 text-muted">{member.role}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Placements;
