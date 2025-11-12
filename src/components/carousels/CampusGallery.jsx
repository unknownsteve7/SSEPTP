import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';

// Import images with proper paths and naming
import ssecampus from '../../assets/ssecampus.jpg';
import library from '../../assets/library.jpg';
import chemistryLab from '../../assets/chemistryLab.jpg';
import computerlab from '../../assets/computerlab.jpg';
import mechanical from '../../assets/mechanical.jpg';
import outside from '../../assets/outside.jpg';
import classrooms from '../../assets/classrooms.jpg';
import staff from '../../assets/staff.jpg';
import lab1 from '../../assets/lab1.jpg';
import lab2 from '../../assets/lab2.jpg';
import campusCoridor from '../../assets/campusCoridor.jpg';
import campusRoad from '../../assets/campusRoad.jpg';
import campusGreenary from '../../assets/campusGreenary.jpg';
import girlsTrio from '../../assets/girlsTrio.jpg';
import boysClub from '../../assets/boysClub.jpg';
import girlsClub from '../../assets/girlsClub.jpg';
import girlsStudying from '../../assets/girlsStudying.jpg';
import girlInLibrary from '../../assets/girlInLibrary.jpg';
import girlInLibrary2 from '../../assets/girlInLibrary2.jpg';
import classroomStylish2 from '../../assets/classroomStylish2.jpg';
import classroomStylish3 from '../../assets/classroomStylish3.jpg';
import classroomStylish4 from '../../assets/classroomStylish4.jpg';
import eceLab from '../../assets/eceLab.jpg';
import mechMachine from '../../assets/mechMachine.jpg';
import basketball from '../../assets/basketball.jpg';
import football from '../../assets/football.jpg';
import kabbadi from '../../assets/kabbadi.jpg';
import culturalRampWalk from '../../assets/culturalRampWalk.jpg';
import traditionalDance from '../../assets/traditionalDance.jpg';
import rangoli from '../../assets/rangoli.jpg';
import atalIncubationCentre from '../../assets/atalIncubationCentre.jpg';
import microsoftBootcamp from '../../assets/microsoftBootcamp.jpg';
import collegeProjects from '../../assets/collegeProjects.jpg';
import innovationClub from '../../assets/innovationClub.jpg';

/**
 * Interactive campus gallery with lightbox - Enhanced with more images and load more functionality
 */
const CampusGallery = ({ galleryData = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxShow, setLightboxShow] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of images to show
  
  // Comprehensive gallery data organized by categories
  const defaultGalleryData = [
    // Infrastructure Category
    {
      id: 1,
      category: 'infrastructure',
      title: 'Main Academic Building',
      image: ssecampus,
      description: 'Our state-of-the-art main academic building houses classrooms, administration, and faculty offices'
    },
    {
      id: 2,
      category: 'infrastructure',
      title: 'Central Library',
      image: library,
      description: 'Well-stocked library with thousands of books, journals, and digital resources'
    },
    {
      id: 3,
      category: 'infrastructure',
      title: 'Modern Classrooms',
      image: classrooms,
      description: 'Spacious classrooms equipped with modern teaching aids'
    },
    {
      id: 4,
      category: 'infrastructure',
      title: 'Campus Corridor',
      image: campusCoridor,
      description: 'Well-maintained corridors connecting different sections of the campus'
    },
    {
      id: 5,
      category: 'infrastructure',
      title: 'Campus Road',
      image: campusRoad,
      description: 'Main thoroughfare connecting various buildings within the campus'
    },
    {
      id: 6,
      category: 'infrastructure',
      title: 'Advanced Classroom',
      image: classroomStylish2,
      description: 'Modern classroom with contemporary design and multimedia facilities'
    },
    {
      id: 7,
      category: 'infrastructure',
      title: 'Collaborative Learning Space',
      image: classroomStylish3,
      description: 'Specially designed spaces to facilitate group learning and discussion'
    },
    {
      id: 8,
      category: 'infrastructure',
      title: 'Smart Classroom',
      image: classroomStylish4,
      description: 'Technology-enhanced classrooms for an interactive learning experience'
    },
    {
      id: 9,
      category: 'infrastructure',
      title: 'College Entrance',
      image: outside,
      description: 'The welcoming entrance to Sanskriti School of Engineering'
    },
    {
      id: 10,
      category: 'infrastructure',
      title: 'Atal Incubation Centre',
      image: atalIncubationCentre,
      description: 'Innovation hub for nurturing entrepreneurial ideas and startups'
    },
    
    // Laboratories Category
    {
      id: 11,
      category: 'laboratories',
      title: 'Computer Science Lab',
      image: computerlab,
      description: 'Advanced computing facility with latest hardware and software resources'
    },
    {
      id: 12,
      category: 'laboratories',
      title: 'Chemistry Laboratory',
      image: chemistryLab,
      description: 'Well-equipped chemistry lab for practical experiments and research'
    },
    {
      id: 13,
      category: 'laboratories',
      title: 'Mechanical Engineering Lab',
      image: mechanical,
      description: 'Specialized lab for mechanical engineering experiments and prototyping'
    },
    {
      id: 14,
      category: 'laboratories',
      title: 'ECE Laboratory',
      image: eceLab,
      description: 'Electronics and Communication Engineering lab with cutting-edge equipment'
    },
    {
      id: 15,
      category: 'laboratories',
      title: 'Research Laboratory',
      image: lab1,
      description: 'Dedicated research lab with advanced analytical instruments'
    },
    {
      id: 16,
      category: 'laboratories',
      title: 'Physics Laboratory',
      image: lab2,
      description: 'Modern physics lab for conducting experiments and demonstrations'
    },
    {
      id: 17,
      category: 'laboratories',
      title: 'Mechanical Workshop',
      image: mechMachine,
      description: 'Workshop equipped with precision machinery for hands-on training'
    },
    {
      id: 18,
      category: 'laboratories',
      title: 'Innovation Projects',
      image: collegeProjects,
      description: 'Student innovation projects showcasing practical applications of engineering concepts'
    },
    
    // Sports Category
    {
      id: 19,
      category: 'sports',
      title: 'Basketball Court',
      image: basketball,
      description: 'Professional basketball court for recreational and competitive play'
    },
    {
      id: 20,
      category: 'sports',
      title: 'Football Ground',
      image: football,
      description: 'Well-maintained football field for sports activities and tournaments'
    },
    {
      id: 21,
      category: 'sports',
      title: 'Kabaddi Field',
      image: kabbadi,
      description: 'Dedicated area for playing the traditional Indian sport of Kabaddi'
    },
    
    // Campus Life Category
    {
      id: 22,
      category: 'campus',
      title: 'Faculty Members',
      image: staff,
      description: 'Our distinguished faculty brings academic excellence and industry experience'
    },
    {
      id: 23,
      category: 'campus',
      title: 'Student Study Groups',
      image: girlsStudying,
      description: 'Students engaged in collaborative learning and knowledge sharing'
    },
    {
      id: 24,
      category: 'campus',
      title: 'Library Resources',
      image: girlInLibrary,
      description: 'Students utilizing the extensive library resources for research'
    },
    {
      id: 25,
      category: 'campus',
      title: 'Reading Corner',
      image: girlInLibrary2,
      description: 'Quiet reading spaces for focused study and research'
    },
    {
      id: 26,
      category: 'campus',
      title: 'Student Groups',
      image: girlsTrio,
      description: 'Students collaborating on academic and extracurricular activities'
    },
    {
      id: 27,
      category: 'campus',
      title: 'Boys Club Activities',
      image: boysClub,
      description: 'Student club engaging in creative and technical pursuits'
    },
    {
      id: 28,
      category: 'campus',
      title: 'Girls Club Meeting',
      image: girlsClub,
      description: 'Female students participating in club activities and leadership roles'
    },
    {
      id: 29,
      category: 'campus',
      title: 'Campus Greenery',
      image: campusGreenary,
      description: 'Lush green spaces providing a serene environment for students'
    },
    
    // Cultural Category (New Category)
    {
      id: 30,
      category: 'cultural',
      title: 'Fashion Show',
      image: culturalRampWalk,
      description: 'Students showcasing their creativity in campus fashion events'
    },
    {
      id: 31,
      category: 'cultural',
      title: 'Traditional Dance',
      image: traditionalDance,
      description: 'Cultural performances celebrating India\'s rich heritage'
    },
    {
      id: 32,
      category: 'cultural',
      title: 'Rangoli Art',
      image: rangoli,
      description: 'Traditional decorative art form displayed during cultural celebrations'
    },
    
    // Technology Category (New Category)
    {
      id: 33,
      category: 'technology',
      title: 'Microsoft Bootcamp',
      image: microsoftBootcamp,
      description: 'Industry partnership programs to enhance technical skills'
    },
    {
      id: 34,
      category: 'technology',
      title: 'Innovation Club',
      image: innovationClub,
      description: 'Students working on cutting-edge technological innovations'
    }
  ];
  
  // Enhanced categories with icons
  const categories = [
    { id: 'all', name: 'All', icon: 'fas fa-th' },
    { id: 'infrastructure', name: 'Infrastructure', icon: 'fas fa-building' },
    { id: 'laboratories', name: 'Laboratories', icon: 'fas fa-flask' },
    { id: 'sports', name: 'Sports', icon: 'fas fa-volleyball-ball' },
    { id: 'campus', name: 'Campus Life', icon: 'fas fa-users' },
    { id: 'cultural', name: 'Cultural', icon: 'fas fa-music' },
    { id: 'technology', name: 'Technology', icon: 'fas fa-laptop-code' }
  ];
  
  // Use provided data or defaults
  const finalGalleryData = galleryData.length > 0 ? galleryData : defaultGalleryData;
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? finalGalleryData 
    : finalGalleryData.filter(image => image.category === activeCategory);
  
  // Visible images based on the current count
  const visibleImages = filteredImages.slice(0, visibleCount);
  
  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(8); // Reset to initial count when category changes
  }, [activeCategory]);
  
  // Function to load more images
  const loadMoreImages = () => {
    setVisibleCount(prevCount => prevCount + 8); // Show 8 more images
  };
  
  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxShow(true);
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setLightboxShow(false);
  };
  
  // Navigate to next image in lightbox
  const nextImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };
  
  // Navigate to previous image in lightbox
  const prevImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section className="py-5 bg-light campus-gallery-section">
      <Container>
        <SectionHeader
          subtitle="Virtual Tour"
          title="Explore Our Beautiful Campus"
          description="Take a visual journey through the facilities and vibrant life at Sanskriti School of Engineering"
          centered={true}
        />
        
        {/* Enhanced category navigation with icons */}
        <div className="d-flex justify-content-center mb-5">
          <div className="category-tabs d-flex flex-wrap justify-content-center">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''} m-1`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stats for visible images */}
        <div className="text-center mb-4">
          <p className="text-secondary">
            {activeCategory === 'all' 
              ? `Showing ${visibleImages.length} of ${filteredImages.length} images` 
              : `Showing ${visibleImages.length} of ${filteredImages.length} images in ${categories.find(c => c.id === activeCategory)?.name}`}
          </p>
        </div>
        
        {/* Gallery Grid with hover effects */}
        <Row className="g-4">
          {visibleImages.map(image => (
            <Col lg={3} md={4} sm={6} key={image.id}>
              <div 
                className="gallery-item position-relative rounded overflow-hidden shadow-sm cursor-pointer h-100 hover-translate-y"
                onClick={() => openLightbox(image)}
                style={{ 
                  height: '220px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                  style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h5 className="h6 mb-0">{image.title}</h5>
                  {image.description && <small className="d-block mt-1 opacity-75">{image.description}</small>}
                </div>
                <div className="view-icon position-absolute top-50 start-50 translate-middle text-white opacity-0"
                  style={{ transition: 'all 0.3s ease', zIndex: 2 }}>
                  <div className="bg-primary bg-opacity-75 rounded-circle p-3">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Load More Button - only show if there are more images to load */}
        {visibleImages.length < filteredImages.length && (
          <div className="text-center mt-5">
            <Button 
              variant="primary" 
              onClick={loadMoreImages}
              className="px-4 py-2"
            >
              <i className="fas fa-plus-circle me-2"></i>
              Load More Images
            </Button>
            <p className="text-muted mt-2 small">
              {filteredImages.length - visibleImages.length} more images available
            </p>
          </div>
        )}
        
        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="fas fa-image fa-3x text-muted"></i>
            </div>
            <h3 className="h4 text-muted">No images found for this category</h3>
            <p className="text-muted">Please select another category or view all images</p>
            <Button variant="primary" onClick={() => setActiveCategory('all')}>
              View All Images
            </Button>
          </div>
        )}
        
        {/* Enhanced Lightbox Modal */}
        <Modal 
          show={lightboxShow} 
          onHide={closeLightbox} 
          size="lg" 
          centered 
          dialogClassName="gallery-modal"
        >
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title>{selectedImage?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0 bg-dark">
            {selectedImage && (
              <div className="position-relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-100"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                />
                {selectedImage.description && (
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 text-white">
                    <p className="mb-0">{selectedImage.description}</p>
                  </div>
                )}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <div>
              {selectedImage && (
                <span className="text-muted">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                </span>
              )}
            </div>
            <div>
              <Button variant="dark" onClick={prevImage} className="me-2">
                <i className="fas fa-chevron-left"></i>
              </Button>
              <Button variant="primary" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default CampusGallery;