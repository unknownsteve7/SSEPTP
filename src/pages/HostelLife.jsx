import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

// Import images
import hostelGirls from "../assets/hostelGirls.jpg";
import girlsCorridor1 from "../assets/girlsCorridor1.jpg";
import girlsTrio from "../assets/girlsTrio.jpg";  
import boysInCLG from "../assets/boysInCLG.jpg";
import boysClub from "../assets/boysClub.jpg";
import campusCoridor from "../assets/campusCoridor.jpg";
import girlsStanding from "../assets/girlsStanding.jpg";
import hostelLife from "../assets/hostelLife.jpg";
import dinnerWithFrds from "../assets/dinnerWithFrds.jpg";
import hostelMenSSE from "../assets/HostelMenSSE.jpg";
import computerLab from "../assets/computerLab.jpg";
import girlsHostel from "../assets/girlsHostel.jpg";
import hostelRooms from "../assets/hostelRooms.jpg";
import foodSSE from "../assets/foodSSE.jpg";
import youthEvents from "../assets/youthEvents.jpg";
import sseKabbadiBoys from "../assets/sseKabbadiBoys.jpg";
import girlsClub from "../assets/girlsClub.jpg";

/**
 * Hostel Life page component
 * Shows information about hostel accommodations and lifestyle
 */
const HostelLife = () => {
  // For parallax effect (reusing from LifeAtSSE)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  // State for active content tab
  const [activeTab, setActiveTab] = useState("facilities");

  // Setup scroll listener for parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tab sections data
  const tabData = {
    facilities: {
      title: "Accommodation Facilities",
      description: "Our hostels are designed to provide a comfortable and secure living environment that supports students' academic and personal growth.",
      features: [
        {
          title: "Boys Hostel Blocks",
          description: "Modern accommodation with well-furnished rooms, designed to house 2-3 students per room with attached bathrooms.",
          icon: "fas fa-home",
          image: hostelMenSSE
        },
        {
          title: "Girls Hostel Blocks",
          description: "Separate hostel blocks for female students with enhanced security features and female wardens available 24/7.",
          icon: "fas fa-home",
          image: girlsHostel
        },
        {
          title: "Common Rooms",
          description: "Spacious common areas equipped with televisions, indoor games, and comfortable seating for relaxation and socializing.",
          icon: "fas fa-couch",
          image: hostelRooms
        },
        {
          title: "Wi-Fi Connectivity",
          description: "High-speed internet access throughout all hostel blocks to support academic research and leisure activities.",
          icon: "fas fa-wifi",
          image: computerLab
        }
      ],
      stats: [
        { value: "1000+", label: "Bed Capacity" },
        { value: "24×7", label: "Security" },
        { value: "4", label: "Hostel Blocks" }
      ]
    },
    dining: {
      title: "Dining & Mess Facilities",
      description: "Our hostel mess provides nutritious and balanced meals prepared in hygienic conditions with varied menu options catering to diverse tastes.",
      features: [
        {
          title: "Modern Kitchen",
          description: "State-of-the-art kitchen facilities with the latest equipment to prepare healthy meals with the highest standards of hygiene.",
          icon: "fas fa-utensils",
          image: "https://2408.studio/wp-content/uploads/2021/11/2408_PublicKitchens_01-1024x555.jpg"
        },
        {
          title: "Spacious Dining Hall",
          description: "Well-ventilated dining space that can accommodate over 300 students at a time with a pleasant ambiance.",
          icon: "fas fa-chair",
          image: dinnerWithFrds
        },
        {
          title: "Balanced Menu",
          description: "Diverse weekly menu with options catering to different regional preferences and nutritional requirements.",
          icon: "fas fa-apple-alt",
          image: foodSSE
        },
        {
          title: "Special Diet Options",
          description: "Accommodations for students with specific dietary requirements or restrictions with special meal plans available.",
          icon: "fas fa-carrot",
          image: "https://i.insider.com/59a47a8279bbfd21008b5a8c?width=1000&format=jpeg"
        }
      ],
      stats: [
        { value: "3", label: "Meals Daily" },
        { value: "7", label: "Day Service" },
        { value: "4", label: "Cuisine Types" }
      ]
    },
    activities: {
      title: "Hostel Life & Activities",
      description: "Our hostels foster a vibrant community through various activities that promote social interaction, leadership development, and cultural exchange.",
      features: [
        {
          title: "Cultural Events",
          description: "Regular celebrations of festivals, talent shows, and cultural programs organized by hostel committees.",
          icon: "fas fa-music",
          image: youthEvents
        },
        {
          title: "Sports Tournaments",
          description: "Inter-hostel sports competitions to promote physical activity, team spirit, and healthy competition.",
          icon: "fas fa-volleyball-ball",
          image: sseKabbadiBoys
        },
        {
          title: "Hostel Committees",
          description: "Student-led hostel management committees that provide leadership opportunities and address resident concerns.",
          icon: "fas fa-users",
          image: girlsClub
        },
        {
          title: "Weekend Outings",
          description: "Organized trips to nearby attractions and social gatherings to help students unwind and build connections.",
          icon: "fas fa-hiking",
          image: hostelLife
        }
      ],
      stats: [
        { value: "10+", label: "Monthly Events" },
        { value: "6", label: "Committees" },
        { value: "90%", label: "Student Participation" }
      ]
    }
  };

  // Testimonials data with images from assets
  const testimonials = [
    {
      id: 1,
      name: "Rahul",
      course: "B.Tech CSE, 3rd Year",
      quote: "Living in the SSE hostel has been a transformative experience. The facilities are excellent, and the sense of community is something I'll cherish forever.",
      image: boysInCLG
    },
    {
      id: 2,
      name: "Priya ",
      course: "B.Tech ECE, 2nd Year",
      quote: "The hostel provides a perfect balance of privacy and community living. The staff is supportive, and the facilities make it feel like a home away from home.",
      image: girlsStanding
    },
    {
      id: 3,
      name: "Aditya",
      course: "B.Tech ME, 4th Year",
      quote: "The best part about hostel life at SSE is the diverse community. I've learned so much from my peers, and the facilities support both academic and personal growth.",
      image: boysClub
    }
  ];

  // Hostel rules and guidelines
  const hostelRules = [
    { rule: "Strict adherence to entry and exit timings for security purposes" },
    { rule: "Visitors allowed only in designated reception areas during specified hours" },
    { rule: "Maintaining cleanliness in rooms and common areas" },
    { rule: "Prohibition of cooking in hostel rooms for safety reasons" },
    { rule: "Respectful and considerate behavior towards fellow residents and staff" },
    { rule: "Mandatory attendance during night roll call" },
    { rule: "Proper permission required for overnight absence from hostel" },
    { rule: "Conservation of electricity and water" }
  ];

  // FAQ data for hostel related queries
  const faqs = [
    {
      id: 1,
      question: "What items should I bring when moving into the hostel?",
      answer: "Students should bring personal essentials like bedding (mattress is provided), toiletries, clothes, study materials, and a laptop. The hostel provides basic furniture including a bed, study table, chair, and wardrobe. A detailed list is provided in the joining instructions."
    },
    {
      id: 2,
      question: "Can I choose my roommate?",
      answer: "First-year students are typically assigned roommates to encourage new connections. From the second year onwards, students can request specific roommates, which we try to accommodate based on availability."
    },
    {
      id: 3,
      question: "What are the hostel fee payment options?",
      answer: "Hostel fees can be paid annually or semester-wise through online transfer, demand draft, or through the college payment portal. Installment options are available for students with financial constraints after approval from the administration."
    },
    {
      id: 4,
      question: "Is medical assistance available in the hostel?",
      answer: "Yes, we have a medical room with first aid facilities in each hostel block. Additionally, the campus has a health center with a doctor available during working hours. For emergencies, we have tie-ups with nearby hospitals and ambulance services available 24/7."
    }
  ];

  // Get active tab content
  const activeTabContent = tabData[activeTab];

  return (
    <div className="hostel-life-page">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Parallax */}
      <section 
        className="parallax-header d-flex align-items-center justify-content-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(142, 61, 25, 0.8), rgba(249, 132, 61, 0.8)), url(${hostelGirls})`,
          backgroundPositionY: `${offsetY * 0.5}px`,
          minHeight: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content text-white">
                <h5 className="text-uppercase fw-light mb-3 animate__animated animate__fadeIn">Life @ SSE</h5>
                <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">Hostel Life</h1>
                <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-2s">
                  Experience comfortable living, nutritious meals, and a vibrant community in our on-campus residences
                </p>
                <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeIn animate__delay-3s">
                  <Button
                    variant="brand"
                    text="Explore Hostels"
                    href="#hostel-facilities"
                    icon="fas fa-chevron-down"
                  />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Facilities Section */}
      <section id="hostel-facilities" className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeader
            subtitle="Home Away From Home"
            title="Hostel Accommodations"
            description="Our hostels provide a safe, comfortable, and nurturing environment for students to live and thrive"
            centered={true}
          />

          {/* Facility Navigation Tabs - Mobile Optimized */}
          <div className="nav nav-pills flex-nowrap overflow-auto pb-3 mb-4 justify-content-center">
            {Object.keys(tabData).map(tab => (
              <button
                key={tab}
                className={`btn rounded-pill px-4 py-2 mx-1 flex-shrink-0 ${
                  activeTab === tab 
                    ? 'btn-brand text-white' 
                    : 'btn-outline-dark border-1'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <i className={`${
                  tab === "facilities" ? "fas fa-home" :
                  tab === "dining" ? "fas fa-utensils" :
                  tab === "amenities" ? "fas fa-concierge-bell" :
                  "fas fa-users"
                } me-2`}></i>
                {tab === "facilities" ? "Accommodation" :
                 tab === "dining" ? "Dining & Mess" :
                 tab === "amenities" ? "Amenities" :
                 "Activities"
                }
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="mb-5">
            <h2 className="h3 fw-bold mb-3 text-primary text-center">{activeTabContent.title}</h2>
            <p className="lead text-center mb-4">{activeTabContent.description}</p>

            {/* Stats Highlight - Mobile Optimized */}
            <div className="row g-3 text-center mb-5 justify-content-center">
              {activeTabContent.stats.map((stat, index) => (
                <div className="col-6 col-md-4 col-lg-3" key={index}>
                  <div className="p-3 rounded bg-white shadow h-100">
                    <h3 className="h2 fw-bold text-primary mb-1">{stat.value}</h3>
                    <p className="mb-0 small text-secondary">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tab Features - Image Fixed */}
            <div className="row g-4">
              {activeTabContent.features.map((feature, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card border-0 shadow h-100 hover-translate-y">
                    <div className="row g-0 flex-column flex-md-row">
                      <div className="col-12 col-md-5">
                        <div className="position-relative" style={{ height: "200px" }}>
                          <img 
                            src={feature.image} 
                            alt={feature.title} 
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-7">
                        <div className="card-body p-3 p-md-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                              <i className={feature.icon}></i>
                            </div>
                            <h4 className="card-title h5 mb-0">{feature.title}</h4>
                          </div>
                          <p className="card-text small">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Profile Image Fixed */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeader
            subtitle="Student Experiences"
            title="Life in SSE Hostels"
            description="Hear what our residents have to say about their hostel life experience"
            centered={true}
          />

          <div className="row g-4">
            {testimonials.map(testimonial => (
              <div className="col-lg-4 col-md-6 mb-4" key={testimonial.id}>
                <div className="card border-0 shadow h-100 testimonial-card">
                  <div className="card-body p-4">
                    <div className="position-absolute top-0 end-0 p-3 text-muted opacity-25">
                      <i className="fas fa-quote-right fa-2x"></i>
                    </div>
                    <p className="card-text mb-4 small">{testimonial.quote}</p>
                    <div className="d-flex align-items-center mt-auto">
                      <div className="rounded-circle overflow-hidden me-3 bg-light" style={{ width: "50px", height: "50px", flexShrink: 0 }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = `https://via.placeholder.com/50x50?text=${testimonial.name.charAt(0)}`;
                          }}
                        />
                      </div>
                      <div>
                        <h5 className="mb-0 h6 fw-bold">{testimonial.name}</h5>
                        <p className="text-muted mb-0 small">{testimonial.course}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Rules Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeader
            subtitle="Guidelines"
            title="Hostel Rules & Regulations"
            description="To ensure a safe, comfortable, and harmonious living environment for all residents"
            centered={true}
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow">
                <div className="card-body p-4 p-lg-5">
                  <div className="row g-3">
                    {hostelRules.map((item, index) => (
                      <div className="col-12 col-md-6" key={index}>
                        <div className="d-flex align-items-start hostel-rule p-2">
                          <div className="bg-primary rounded-circle text-white p-2 me-3 flex-shrink-0" style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fas fa-check small"></i>
                          </div>
                          <p className="mb-0 small">{item.rule}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="alert alert-info mt-4 p-3">
                    <div className="d-flex">
                      <i className="fas fa-info-circle mt-1 me-3 text-info"></i>
                      <div>
                        <h5 className="alert-heading h6 mb-2">Important Note</h5>
                        <p className="mb-0 small">Complete hostel rules and regulations are provided in the Student Handbook and are explained during orientation. Violations of hostel rules may lead to disciplinary action.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeader
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common queries about hostel life at SSE"
            centered={true}
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="hostelFAQs">
                {faqs.map((faq) => (
                  <div className="accordion-item border mb-3 shadow-sm" key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button 
                        className={`accordion-button ${faq.id !== 1 ? 'collapsed' : ''} py-3`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${faq.id}`} 
                        aria-expanded={faq.id === 1} 
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={`collapse${faq.id}`} 
                      className={`accordion-collapse collapse ${faq.id === 1 ? 'show' : ''}`}
                      aria-labelledby={`heading${faq.id}`} 
                      data-bs-parent="#hostelFAQs"
                    >
                      <div className="accordion-body">
                        <p className="mb-0 small">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section - Image Fixed */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h3 fw-bold mb-3">Take a Virtual Tour</h2>
              <p className="mb-4 small">Get a glimpse of our hostel facilities without leaving the comfort of your home. Our interactive virtual tour allows you to explore rooms, common areas, dining halls, and recreational spaces.</p>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow overflow-hidden virtual-tour-card">
                <div style={{ height: "240px" }}>
                  <img 
                    src={hostelLife} 
                    alt="Hostel Life" 
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="bg-white bg-opacity-75 rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                    <i className="fas fa-play text-primary fa-lg"></i>
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

export default HostelLife;