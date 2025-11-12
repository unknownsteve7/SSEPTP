import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import Contact from "../components/common/Contact";

// Import sports-related images from asset list
import football from "../assets/football.jpg";
import basketball from "../assets/basketball.jpg";
import kabbadi from "../assets/kabbadi.jpg";
import kabbadiAchievement from "../assets/kabbadiAchievement.jpg";
import outside from "../assets/outside.jpg";
import boysClub from "../assets/boysClub.jpg";
import boysInCLG from "../assets/boysInCLG.jpg";
import girlsClub from "../assets/girlsClub.jpg";
import cricketSSE from "../assets/CricketSSE2.jpg";
import sseKabbadiBoys from "../assets/sseKabbadiBoys.jpg";
import ground from "../assets/cricketSSE.jpg";
import volleySSE from "../assets/volleySSE.jpg";
/**
 * SSE Sports page component
 * Showcases sports facilities and activities at Sanskriti School of Engineering
 */
const SSESports = () => {
  // For parallax effect (reusing from other components)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  // State for active sports facility
  const [activeSport, setActiveSport] = useState("cricket");

  // Setup scroll listener for parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sports facilities data
  const sportsFacilities = {
    cricket: {
      title: "Cricket",
      description:
        "Our well-maintained cricket ground provides a top-quality playing surface with proper pitch and outfield for practice sessions and matches. The facility includes practice nets and has hosted several inter-college tournaments.",
      features: [
        "Standard-size cricket ground with proper drainage system",
        "Professional cricket pitch maintained by expert groundskeepers",
        "Cricket practice nets with bowling machines",
        "Digital scoreboard and spectator seating",
      ],
      coach: "Coach Ravi Sharma, Former Ranji Trophy Player",
      achievements: [
        "Inter-University Cricket Champions (2023)",
        "South Zone Inter-Engineering Colleges Cricket Tournament Runners-up (2024)",
        "Hosted State-level Engineering College Cricket Tournament (2023)",
      ],
      image: cricketSSE,
    },

    basketball: {
      title: "Basketball",
      description:
        "Our indoor basketball courts feature professional-grade maple wood flooring and equipment meeting international standards. The air-conditioned facility provides an ideal environment for training and competitions throughout the year.",
      features: [
        "Two international standard basketball courts",
        "Professional-grade maple wood flooring",
        "Electronic scoreboards and shot clocks",
        "Air-conditioned facility with spectator seating",
      ],
      coach: "Coach Michael Thompson, Former Professional Basketball Player",
      achievements: [
        "Inter-Engineering College Basketball Championship Winners (2023)",
        "Women's Basketball Team - State University Champions (2024)",
        "Hosted National Basketball Federation Youth Camp (2023)",
      ],
      image: basketball,
    },
    badminton: {
      title: "Badminton",
      description:
        "Our badminton facility includes multiple indoor courts with international standard synthetic flooring and proper lighting. The air-conditioned courts provide a consistent playing environment regardless of weather conditions.",
      features: [
        "Six indoor badminton courts with BWF-approved synthetic flooring",
        "Professional lighting system designed to eliminate shadows",
        "Climate-controlled environment for all-weather play",
        "Video analysis system for player technique improvement",
      ],
      coach: "Coach Saina Reddy, Former National Champion",
      achievements: [
        "Inter-University Badminton Championship - Men's Singles Winner (2024)",
        "All India Engineering Sports Meet - Women's Team Bronze (2023)",
        "Hosted State Badminton Association Junior Tournament (2023)",
      ],
      image:
        "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/how-to-play-badminton.jpg",
    },
    volleyball: {
      title: "Volleyball",
      description:
        "Our state-of-the-art volleyball courts feature regulation-size indoor and outdoor facilities with professional-grade flooring and lighting. The courts are designed to meet international standards and regularly host inter-collegiate tournaments and training camps.",
      features: [
        "Two regulation-size courts (18m x 9m) with proper net height",
        "Professional synthetic flooring for optimal player safety",
        "LED floodlighting system for evening matches and practice",
        "Spectator seating capacity for 200+ audience members",
      ],
      coach: "Coach Rajesh Kumar, Former National Volleyball Player",
      achievements: [
        "All India Inter-University Volleyball - 2 Gold, 3 Silver (2023)",
        "State Volleyball Championship - Winners (2024)",
        "Produced 5 state-level volleyball players in recent years",
      ],
      image: volleySSE,
    },
    kabbadi: {
      title: "Kabbadi",
      description:
        "Our dedicated kabbadi court meets all national standards with proper surface and markings. The facility has both indoor and outdoor courts to facilitate training in all weather conditions.",
      features: [
        "Standard-size kabbadi courts with proper surface",
        "Indoor and outdoor practice facilities",
        "Specialized training equipment and gear",
        "Spectator arrangements for competitions",
      ],
      coach: "Coach Ajay Kumar, Former National Kabbadi Player",
      achievements: [
        "Inter-College Kabbadi Tournament Champions (2024)",
        "State University Kabbadi Championships - Runners-up (2023)",
        "Produced 5 players for state-level kabbadi teams",
      ],
      image: kabbadi,
    },
  };

  // Annual sports events data
  const sportsEvents = [
    {
      title: "Annual Sports Meet",
      date: "February 2025",
      description:
        "A week-long extravaganza featuring competitions in all major sports, with participation from all departments and courses.",
      image: football,
    },
    {
      title: "Inter-Engineering College Tournament",
      date: "October 2025",
      description:
        "Annual tournament where engineering colleges from across the state compete in cricket, football, basketball, and athletics.",
      image: basketball,
    },
    {
      title: "Sanskriti Marathon",
      date: "December 2025",
      description:
        "Annual marathon event with 5K, 10K, and half-marathon categories, open to students, faculty, and the general public.",
      image: boysInCLG,
    },
  ];

  // Sports achievements data (recent achievements in various sports)
  const recentAchievements = [
    {
      sport: "Cricket",
      achievement: "Champions at Inter-University Cricket Tournament 2024",
      players: "Team led by Arjun Reddy (Captain)",
      image: outside,
    },
    {
      sport: "Athletics",
      achievement: "Gold Medal in 400m relay at State University Games",
      players: "Relay Team - Priya Sharma, Neha Singh, Rohit Kumar, Arun Verma",
      image: girlsClub,
    },
    {
      sport: "Kabbadi",
      achievement: "Runners-up at South Zone Inter-College Kabbadi Tournament",
      players: "Men's Kabbadi Team led by Vijay Singh",
      image: kabbadiAchievement,
    },
  ];

  return (
    <div className="sse-sports-page">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-5 text-white text-center d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(249, 132, 61, 0.8), rgba(142, 61, 25, 0.8)), url(${outside})`,
          minHeight: "70vh",
          backgroundAttachment: "fixed",
          backgroundPositionY: `${offsetY * 0.5}px`,
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="p-4 rounded"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <h5 className="text-uppercase fw-light mb-3 animate__animated animate__fadeIn">
                  Physical Excellence
                </h5>
                <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  SSE Sports
                </h1>
                <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-2s">
                  Discover world-class sports facilities and programs that
                  foster physical excellence, teamwork, and leadership
                </p>
                <div className="animate__animated animate__fadeIn animate__delay-3s">
                  <Button
                    variant="brand"
                    text="Explore Facilities"
                    href="#sports-facilities"
                    icon="fas fa-running"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Philosophy Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={sseKabbadiBoys}
                alt="Sports at SSE"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4 text-primary">
                Sports Philosophy at SSE
              </h2>
              <p className="lead mb-4">
                At Sanskriti School of Engineering, we believe that sporting
                excellence goes hand in hand with academic achievement.
              </p>
              <p className="mb-4">
                Our sports program is designed to foster physical fitness,
                teamwork, leadership, and resilience – qualities that are
                essential for success in any field. We provide world-class
                facilities and professional coaching to help our students excel
                in their chosen sports.
              </p>
              <div className="row g-4 mt-2">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-dumbbell fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="mb-2">Physical Fitness</h5>
                      <p className="mb-0 small text-muted">
                        Promoting healthy lifestyles through regular physical
                        activity
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-users fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="mb-2">Teamwork</h5>
                      <p className="mb-0 small text-muted">
                        Building collaborative skills through team sports
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-medal fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="mb-2">Competitive Spirit</h5>
                      <p className="mb-0 small text-muted">
                        Fostering healthy competition and sportsmanship
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-brain fa-2x"></i>
                    </div>
                    <div>
                      <h5 className="mb-2">Mental Well-being</h5>
                      <p className="mb-0 small text-muted">
                        Promoting stress relief and improved focus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Facilities Section */}
      <section id="sports-facilities" className="py-5 bg-light">
        <div className="container py-5">
          <SectionHeader
            subtitle="World-Class Facilities"
            title="Sports Infrastructure"
            description="State-of-the-art facilities for various sports disciplines"
            centered={true}
          />

          {/* Sports Selection Tabs */}
          <div className="d-flex justify-content-center flex-wrap mb-5">
            {Object.keys(sportsFacilities).map((sport) => (
              <button
                key={sport}
                className={`btn rounded-pill px-3 py-2 m-2 ${activeSport === sport
                    ? "btn-brand text-white"
                    : "btn-outline-dark"
                  }`}
                onClick={() => setActiveSport(sport)}
              >
                {sportsFacilities[sport].title}
              </button>
            ))}
          </div>

          {/* Active Sport Details */}
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative rounded overflow-hidden shadow">
                <img
                  src={sportsFacilities[activeSport].image}
                  alt={sportsFacilities[activeSport].title}
                  className="img-fluid w-100"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div
                  className="position-absolute bottom-0 w-100 p-3 text-white"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                  }}
                >
                  <h4 className="mb-0">
                    {sportsFacilities[activeSport].title} Facility
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="h2 mb-4 text-primary">
                {sportsFacilities[activeSport].title} Facilities
              </h3>
              <p className="mb-4">
                {sportsFacilities[activeSport].description}
              </p>

              <h5 className="mb-3">Key Features:</h5>
              <ul className="list-group list-group-flush mb-4">
                {sportsFacilities[activeSport].features.map(
                  (feature, index) => (
                    <li
                      className="list-group-item bg-transparent px-0"
                      key={index}
                    >
                      <i className="fas fa-check-circle text-success me-2"></i>
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <h5 className="mb-3">Recent Achievements:</h5>
              <ul className="list-group list-group-flush">
                {sportsFacilities[activeSport].achievements.map(
                  (achievement, index) => (
                    <li
                      className="list-group-item bg-transparent px-0"
                      key={index}
                    >
                      <i className="fas fa-trophy text-warning me-2"></i>
                      {achievement}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Stats Overview */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-3 col-6">
                  <div className="p-4 rounded bg-primary text-white shadow-sm h-100">
                    <div className="display-3 fw-bold mb-2">15+</div>
                    <p className="mb-0">Sports Disciplines</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="p-4 rounded bg-primary text-white shadow-sm h-100">
                    <div className="display-3 fw-bold mb-2">20+</div>
                    <p className="mb-0">Professional Coaches</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="p-4 rounded bg-primary text-white shadow-sm h-100">
                    <div className="display-3 fw-bold mb-2">50+</div>
                    <p className="mb-0">Annual Medals</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="p-4 rounded bg-primary text-white shadow-sm h-100">
                    <div className="display-3 fw-bold mb-2">25+</div>
                    <p className="mb-0">Sports Teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Teams */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <SectionHeader
            subtitle="Join Our Teams"
            title="Sports Teams at SSE"
            description="Be part of our competitive sports teams representing the college"
            centered={true}
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="py-3 ps-4">Sport</th>
                          <th className="py-3">Categories</th>
                          <th className="py-3">Schedule</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 ps-4">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-cricket-ball text-primary me-3 fa-lg"></i>
                              <span className="fw-medium">Cricket</span>
                            </div>
                          </td>
                          <td className="py-3">Men's & Women's Teams</td>
                          <td className="py-3">
                            Mon, Wed, Fri (4:00 - 6:30 PM)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-futbol text-primary me-3 fa-lg"></i>
                              <span className="fw-medium">Football</span>
                            </div>
                          </td>
                          <td className="py-3">Men's & Women's Teams</td>
                          <td className="py-3">
                            Tue, Thu, Sat (4:00 - 6:00 PM)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-basketball-ball text-primary me-3 fa-lg"></i>
                              <span className="fw-medium">Basketball</span>
                            </div>
                          </td>
                          <td className="py-3">Men's & Women's Teams</td>
                          <td className="py-3">
                            Mon, Wed, Fri (6:30 - 8:30 PM)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-running text-primary me-3 fa-lg"></i>
                              <span className="fw-medium">Athletics</span>
                            </div>
                          </td>
                          <td className="py-3">Track & Field Events</td>
                          <td className="py-3">
                            Every Morning (6:00 - 8:00 AM)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 ps-4">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-table-tennis text-primary me-3 fa-lg"></i>
                              <span className="fw-medium">Kabbadi</span>
                            </div>
                          </td>
                          <td className="py-3">Men's & Women's Teams</td>
                          <td className="py-3">
                            Tue, Thu, Sat (6:30 - 8:30 PM)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer bg-white p-4 border-0">
                  <div
                    className="alert alert-info d-flex align-items-center mb-0"
                    role="alert"
                  >
                    <i className="fas fa-info-circle me-3 fa-lg"></i>
                    <div>
                      Team tryouts are held at the beginning of each semester.
                      Contact the Sports Department for specific dates and
                      requirements.
                    </div>
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

export default SSESports;
