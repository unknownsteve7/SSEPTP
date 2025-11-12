import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

/**
 * Health and Safety page component
 * Showcases health services and safety measures at Sanskriti School of Engineering
 */
const HealthSafety = () => {
  // For parallax effect (reusing from other components)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  
  // Setup scroll listener for parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Health services data
  const healthServices = [
    {
      id: 1,
      title: "Medical Center",
      icon: "fas fa-clinic-medical",
      description: "Our on-campus medical center provides comprehensive healthcare services including consultations, emergency care, and basic medical tests.",
      features: [
        "24/7 emergency medical services",
        "Qualified doctors and nursing staff",
        "Well-stocked pharmacy",
        "Basic diagnostic facilities"
      ]
    },
    {
      id: 2,
      title: "Ambulance Service",
      icon: "fas fa-ambulance",
      description: "Dedicated ambulance service for medical emergencies with direct connections to nearby advanced healthcare facilities.",
      features: [
        "24/7 availability for emergencies",
        "Trained paramedic staff",
        "Modern medical equipment",
        "Partnership with nearby hospitals"
      ]
    },
    {
      id: 3,
      title: "Mental Health Support",
      icon: "fas fa-brain",
      description: "Professional counseling services to support student mental health and emotional well-being through individual sessions and group programs.",
      features: [
        "Licensed counselors and psychologists",
        "Confidential counseling sessions",
        "Stress management workshops",
        "Mental wellness programs"
      ]
    },
    {
      id: 4,
      title: "Health Insurance",
      icon: "fas fa-shield-alt",
      description: "Comprehensive health insurance coverage for all enrolled students, covering medical emergencies and hospitalization costs.",
      features: [
        "Accident and medical coverage",
        "Hospitalization benefits",
        "Cashless treatment facility",
        "Insurance card for all students"
      ]
    }
  ];

  // Safety measures data
  const safetyMeasures = [
    {
      id: 1,
      title: "Campus Security",
      description: "Round-the-clock security personnel and surveillance systems to ensure campus safety.",
      icon: "fas fa-user-shield"
    },
    {
      id: 2,
      title: "Emergency Response",
      description: "Dedicated emergency response team trained to handle various emergency situations.",
      icon: "fas fa-exclamation-triangle"
    },
    {
      id: 3,
      title: "Fire Safety",
      description: "Regular fire drills, fire extinguishers, smoke detectors, and evacuation plans in all buildings.",
      icon: "fas fa-fire-extinguisher"
    },
    {
      id: 4,
      title: "COVID-19 Protocols",
      description: "Sanitization stations, social distancing measures, and health screening protocols.",
      icon: "fas fa-virus-slash"
    },
    {
      id: 5,
      title: "Women's Safety",
      description: "Dedicated measures including emergency helplines and escort services during late hours.",
      icon: "fas fa-female"
    },
    {
      id: 6,
      title: "Disaster Management",
      description: "Comprehensive disaster management plans for natural calamities and emergencies.",
      icon: "fas fa-house-damage"
    }
  ];

  // Emergency contact information
  const emergencyContacts = [
    { title: "Medical Emergency", number: "+91 9876543210", icon: "fas fa-first-aid" },
    { title: "Campus Security", number: "+91 9876543211", icon: "fas fa-shield-alt" },
    { title: "Fire Emergency", number: "+91 9876543212", icon: "fas fa-fire" },
    { title: "Women's Helpline", number: "+91 9876543213", icon: "fas fa-venus" }
  ];

  return (
    <div className="health-safety-page">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section 
        className="py-5 text-white text-center d-flex align-items-center justify-content-center" 
        style={{ 
          background: `linear-gradient(rgba(249, 132, 61, 0.8), rgba(142, 61, 25, 0.8)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center center / cover`,
          minHeight: "60vh",
          backgroundAttachment: "fixed",
          backgroundPositionY: `${offsetY * 0.5}px`
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                <h5 className="text-uppercase fw-light mb-3">Student Wellbeing</h5>
                <h1 className="display-4 fw-bold mb-4">Health & Safety Services</h1>
                <p className="lead mb-4">
                  Your wellbeing is our priority. Explore the comprehensive health and safety services available at Sanskriti School of Engineering.
                </p>
                <Button 
                  variant="brand"
                  text="Emergency Contacts"
                  href="#emergency-contacts"
                  icon="fas fa-phone-alt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Services Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <SectionHeader
            subtitle="Healthcare Facilities"
            title="Campus Health Services"
            description="Comprehensive healthcare facilities to ensure the wellbeing of our campus community"
            centered={true}
          />

          <div className="row g-4">
            {healthServices.map(service => (
              <div className="col-lg-6 mb-4" key={service.id}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="p-3 rounded-circle text-white me-3" style={{ backgroundColor: "#F9843D" }}>
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="card-title h4 mb-0">{service.title}</h3>
                    </div>
                    <p className="card-text">{service.description}</p>
                    <ul className="list-group list-group-flush mt-3">
                      {service.features.map((feature, index) => (
                        <li className="list-group-item bg-transparent border-0 ps-0" key={index}>
                          <i className="fas fa-check-circle text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="py-5">
        <div className="container py-5">
          <SectionHeader
            subtitle="Campus Protection"
            title="Safety Measures"
            description="Comprehensive safety protocols implemented across the campus"
            centered={true}
          />

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {safetyMeasures.map(measure => (
              <div className="col mb-4" key={measure.id}>
                <div className="card border-0 shadow h-100 text-center">
                  <div className="card-body p-4">
                    <div className="rounded-circle text-white mx-auto mb-4 d-flex align-items-center justify-content-center" 
                      style={{ backgroundColor: "#F9843D", width: "70px", height: "70px" }}>
                      <i className={`${measure.icon} fa-2x`}></i>
                    </div>
                    <h3 className="card-title h5 mb-3">{measure.title}</h3>
                    <p className="card-text">{measure.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HealthSafety;