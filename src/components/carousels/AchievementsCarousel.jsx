import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
// import '../../styles/carousels.css';

/**
 * Achievements carousel component
 */
const AchievementsCarousel = ({ achievements = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState('next');
  const intervalRef = useRef(null);
  
  // Default achievements if none provided
  const defaultAchievements = [
    {
      id: 1,
      icon: 'fas fa-trophy',
      title: 'NAAC Accredited',
      subtitle: 'Grade A+',
      description: 'Recognized for academic excellence and quality education by National Assessment and Accreditation Council',
      color: '#F9843D' // Orange
    },
    {
      id: 2,
      icon: 'fas fa-award',
      title: 'Top 50 Engineering Colleges',
      subtitle: 'National Ranking',
      description: 'Ranked among the top engineering institutions in India for academic excellence and placement',
      color: '#8E3D19' // Brown
    },
    {
      id: 3,
      icon: 'fas fa-handshake',
      title: '100+ Industry Partnerships',
      subtitle: 'For Internships & Placements',
      description: 'Strong ties with leading companies for student internships, research collaboration, and placement',
      color: '#28A745' // Green
    },
    {
      id: 4,
      icon: 'fas fa-flask',
      title: '15 Research Centers',
      subtitle: 'Cutting-edge Facilities',
      description: 'Dedicated research centers focusing on emerging technologies and industry needs',
      color: '#1D9DD9' // Blue
    },
    {
      id: 5,
      icon: 'fas fa-users',
      title: '10,000+ Alumni Network',
      subtitle: 'Global Presence',
      description: 'Strong alumni network in leading companies and prestigious organizations worldwide',
      color: '#6610F2' // Purple
    }
  ];
  
  // Use provided achievements or defaults
  const displayAchievements = achievements.length > 0 ? achievements : defaultAchievements;
  
  // Setup autoplay
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setDirection('next');
        setActiveIndex((current) => 
          current === displayAchievements.length - 1 ? 0 : current + 1
        );
      }, 4000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoplay, displayAchievements.length]);
  
  // Handlers for manual navigation
  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
    resetAutoplay();
  };
  
  const goToPrevSlide = () => {
    setDirection('prev');
    setActiveIndex(activeIndex === 0 ? displayAchievements.length - 1 : activeIndex - 1);
    resetAutoplay();
  };
  
  const goToNextSlide = () => {
    setDirection('next');
    setActiveIndex(activeIndex === displayAchievements.length - 1 ? 0 : activeIndex + 1);
    resetAutoplay();
  };
  
  // Reset autoplay after manual interaction
  const resetAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsAutoplay(true);
  };
  
  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };
  
  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };
  
  return (
    <section className="achievements-section">
      <div className="container">
        <SectionHeader
          subtitle="Our Achievements"
          title="Recognitions & Milestones"
          description="Celebrating excellence in engineering education and research"
        />
        
        <div 
          className="achievements-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button 
            className="carousel-arrow prev"
            onClick={goToPrevSlide}
            aria-label="Previous achievement"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            className="carousel-arrow next"
            onClick={goToNextSlide}
            aria-label="Next achievement"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Achievement Cards */}
          <div className="achievements-track">
            {displayAchievements.map((achievement, index) => {
              // Calculate position class
              let positionClass = 'item-inactive';
              
              if (index === activeIndex) {
                positionClass = 'item-active';
              } else if (
                (direction === 'next' && index === (activeIndex + 1) % displayAchievements.length) ||
                (direction === 'prev' && index === (activeIndex - 1 + displayAchievements.length) % displayAchievements.length)
              ) {
                positionClass = direction === 'next' ? 'item-next' : 'item-prev';
              }
              
              return (
                <div 
                  key={achievement.id} 
                  className={`achievement-item ${positionClass}`}
                >
                  <div className="achievement-card" style={{ borderTopColor: achievement.color }}>
                    <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                      <i className={achievement.icon}></i>
                    </div>
                    <div className="achievement-content">
                      <h3>{achievement.title}</h3>
                      <h4>{achievement.subtitle}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Indicators */}
          <div className="carousel-indicators">
            {displayAchievements.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to achievement ${index + 1}`}
                style={{ backgroundColor: index === activeIndex ? displayAchievements[index].color : '' }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsCarousel;