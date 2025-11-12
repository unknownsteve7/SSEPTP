import React, { useState, useEffect, useRef } from 'react';

const AnnouncementsSection = ({ announcements = [] }) => {
  const [activeTab, setActiveTab] = useState('facebook');
  const [loading, setLoading] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState({
    twitter: false,
    instagram: false
  });
  
  // Refs to track if scripts are already loaded
  const twitterScriptLoaded = useRef(false);
  const instagramScriptLoaded = useRef(false);

  // Default announcements if none provided
  const defaultAnnouncements = [
    { id: 1, title: 'Admissions Open for 2025-26', date: 'April 5, 2025', category: 'Admissions' },
    { id: 2, title: 'Technical Symposium - TechnoEdge 2025', date: 'April 20, 2025', category: 'Events' },
    { id: 3, title: 'Campus Recruitment Drive by TCS', date: 'May 10, 2025', category: 'Placements' },
    { id: 4, title: 'National Conference on Emerging Technologies', date: 'June 15, 2025', category: 'Academic' },
    { id: 5, title: 'Sports Meet 2025', date: 'March 15, 2025', category: 'Events' },
    { id: 6, title: 'Alumni Meet Registration Open', date: 'February 28, 2025', category: 'Events' }
  ];

  const displayAnnouncements = announcements.length > 0 ? announcements : defaultAnnouncements;

  // Load scripts only once on component mount
  useEffect(() => {
    const loadScripts = async () => {
      // Load Twitter script only once
      if (!twitterScriptLoaded.current && !window.twttr) {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          twitterScriptLoaded.current = true;
          setScriptsLoaded(prev => ({ ...prev, twitter: true }));
        };
        document.head.appendChild(script);
      } else if (window.twttr) {
        twitterScriptLoaded.current = true;
        setScriptsLoaded(prev => ({ ...prev, twitter: true }));
      }

      // Load Instagram script only once
      if (!instagramScriptLoaded.current && !window.instgrm) {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
          instagramScriptLoaded.current = true;
          setScriptsLoaded(prev => ({ ...prev, instagram: true }));
        };
        document.head.appendChild(script);
      } else if (window.instgrm) {
        instagramScriptLoaded.current = true;
        setScriptsLoaded(prev => ({ ...prev, instagram: true }));
      }
    };

    loadScripts();
  }, []); // Empty dependency array - runs only once

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook-f', color: '#1877F2' },
    { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F' },
    { id: 'twitter', name: 'Twitter', icon: 'fab fa-twitter', color: '#1DA1F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0A66C2' }
  ];

  const handleTabChange = (platform) => {
    setLoading(true);
    // Quick tab change without reloading embeds
    setTimeout(() => {
      setActiveTab(platform);
      setLoading(false);
    }, 150);
  };

  const getBadgeColor = (category) => {
    const colors = {
      admissions: 'primary',
      events: 'success',
      placements: 'info',
      academic: 'warning'
    };
    return colors[category?.toLowerCase()] || 'secondary';
  };

  // Reusable iframe component with error handling
  const SocialIframe = ({ src, height = 450, title }) => (
    <iframe 
      src={src}
      width="100%" 
      height={height}
      style={{ border: 'none', overflow: 'hidden' }} 
      scrolling="no" 
      frameBorder="0" 
      allowFullScreen={true} 
      title={title}
      loading="lazy" // Lazy loading for better performance
    />
  );

  // Reusable social card wrapper
  const SocialCard = ({ children, className = "" }) => (
    <div className={`card border-0 shadow-sm h-100 ${className}`}>
      <div className="card-body p-0">
        {children}
      </div>
    </div>
  );

  // Static content components to prevent re-rendering
  const FacebookContent = React.memo(() => (
    <div className="row g-3">
      <div className="col-lg-4 col-md-6">
        <SocialCard>
          <SocialIframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsseptp%2Fposts%2Fpfbid029UuQtdzYd16h8bQmwBVoq3GEveQsu276RnYNrAorLjcpTqhKo5ogJ8kQ18sAZhPZl&show_text=true&width=500"
            height={400}
            title="SSE Facebook Post"
          />
        </SocialCard>
      </div>
      <div className="col-lg-4 col-md-6">
        <SocialCard>
          <SocialIframe 
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsseptp%2Fvideos%2F1396304564867934%2F&show_text=false&width=267&t=0"
            height={400}
            title="SSE Facebook Video 1"
          />
        </SocialCard>
      </div>
      <div className="col-lg-4 col-md-6">
        <SocialCard>
          <SocialIframe 
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsseptp%2Fvideos%2F1699427310608308%2F&show_text=false&width=267&t=0"
            height={400}
            title="SSE Facebook Video 2"
          />
        </SocialCard>
      </div>
    </div>
  ));

  const InstagramContent = React.memo(() => {
    // Process Instagram embeds when component mounts
    useEffect(() => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }, []);

    return (
      <div className="row g-3">
        <div className="col-lg-4 col-md-6">
          <SocialCard>
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DFhJDtmPII8/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '99.375%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/p/DFhJDtmPII8/?utm_source=ig_embed&amp;utm_campaign=loading" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </SocialCard>
        </div>

        <div className="col-lg-4 col-md-6">
          <SocialCard>
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DKJIcwCvLp-/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '99.375%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/p/DKJIcwCvLp-/?utm_source=ig_embed&amp;utm_campaign=loading" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </SocialCard>
        </div>

        <div className="col-lg-4 col-md-6">
          <SocialCard>
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DJnst0uRfTP/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '99.375%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/p/DJnst0uRfTP/?utm_source=ig_embed&amp;utm_campaign=loading" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </SocialCard>
        </div>
      </div>
    );
  });

  const TwitterContent = React.memo(() => (
    <div className="row g-3">
      <div className="col-lg-4 col-md-6">
        <SocialCard>
          <div style={{ height: '400px', overflow: 'hidden', padding: '10px' }}>
            <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
              <p lang="en" dir="ltr">
                On the occasion of World Cancer Day, the SSE NSS wing held an awareness rally to educate the public about the importance of early detection and prevention of cancer.
                <a href="https://twitter.com/hashtag/cancerawareness?src=hash&ref_src=twsrc%5Etfw">#cancerawareness</a> 
                <a href="https://twitter.com/hashtag/WorldCancerDay?src=hash&ref_src=twsrc%5Etfw"> #WorldCancerDay</a> 
                <a href="https://twitter.com/hashtag/NSS?src=hash&ref_src=twsrc%5Etfw"> #NSS</a> 
                <a href="https://twitter.com/hashtag/sgiptp?src=hash&ref_src=twsrc%5Etfw"> #sgiptp</a>
              </p>
              &mdash; Sanskrithi Group of Institutions (@SanskrithiGroup) 
              <a href="https://twitter.com/SanskrithiGroup/status/1886974843553505764?ref_src=twsrc%5Etfw">February 5, 2025</a>
            </blockquote>
          </div>
        </SocialCard>
      </div>
      <div className="col-lg-4 col-md-6">
        <SocialCard>
          <div style={{ height: '400px', overflow: 'hidden', padding: '10px' }}>
            <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
              <p lang="en" dir="ltr">
                Congratulations to the 28 selected candidates and best of luck as you embark upon this new journey.
                <a href="https://twitter.com/hashtag/congratulations?src=hash&ref_src=twsrc%5Etfw">#congratulations</a> 
                <a href="https://twitter.com/hashtag/SGIPlacements?src=hash&ref_src=twsrc%5Etfw"> #SGIPlacements</a> 
                <a href="https://twitter.com/hashtag/selectedstudents?src=hash&ref_src=twsrc%5Etfw"> #selectedstudents</a> 
                <a href="https://twitter.com/hashtag/sgiptp?src=hash&ref_src=twsrc%5Etfw"> #sgiptp</a> 
                <a href="https://t.co/9hYQUWxs8K">pic.twitter.com/9hYQUWxs8K</a>
              </p>
              &mdash; Sanskrithi Group of Institutions (@SanskrithiGroup) 
              <a href="https://twitter.com/SanskrithiGroup/status/1885529338155852066?ref_src=twsrc%5Etfw">February 1, 2025</a>
            </blockquote>
          </div>
        </SocialCard>
      </div>
      <div className="col-lg-4 col-md-6">
        <SocialCard>
          <div style={{ height: '400px', overflow: 'hidden', padding: '10px' }}>
            <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
              <p lang="en" dir="ltr">
                Congratulations to Dr Annapurna V, Associate Professor and HOD, Department of ECE and her fellow researchers on the grant of the patent on an AI-Based House Intrusion Detection Device to enhance home safety &amp; security
                <a href="https://twitter.com/hashtag/patent?src=hash&ref_src=twsrc%5Etfw">#patent</a> 
                <a href="https://twitter.com/hashtag/homesecurity?src=hash&ref_src=twsrc%5Etfw"> #homesecurity</a> 
                <a href="https://twitter.com/hashtag/homesafety?src=hash&ref_src=twsrc%5Etfw"> #homesafety</a> 
                <a href="https://twitter.com/hashtag/sseptp?src=hash&ref_src=twsrc%5Etfw"> #sseptp</a> 
                <a href="https://twitter.com/hashtag/sgiptp?src=hash&ref_src=twsrc%5Etfw"> #sgiptp</a> 
                <a href="https://t.co/lgPFlEPVqL">pic.twitter.com/lgPFlEPVqL</a>
              </p>
              &mdash; Sanskrithi Group of Institutions (@SanskrithiGroup) 
              <a href="https://twitter.com/SanskrithiGroup/status/1881387696708583916?ref_src=twsrc%5Etfw">January 20, 2025</a>
            </blockquote>
          </div>
        </SocialCard>
      </div>
    </div>
  ));

  const LinkedInContent = React.memo(() => (
    <div className="row g-3">
      {[
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7332979203065204736?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7331890701321822209?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332627052291940352?collapsed=1"
      ].map((src, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <SocialCard>
            <SocialIframe 
              src={src}
              height={400}
              title={`SSE LinkedIn Post ${index + 1}`}
            />
          </SocialCard>
        </div>
      ))}
    </div>
  ));

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary text-uppercase fw-bold mb-2 ls-2">Stay Updated</h5>
          <h2 className="display-6 fw-bold mb-3">Events & Social Media</h2>
          <p className="lead text-muted mb-0">Latest updates and connect with us across platforms</p>
        </div>

        <div className="row g-4">
          {/* Announcements Section */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-header bg-white border-0 py-4">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-primary text-white me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <h4 className="mb-0 fw-bold">Our Events</h4>
                </div>
              </div>
              <div className="card-body">
                <div className="announcement-list" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  {displayAnnouncements.map((announcement, index) => (
                    <div key={announcement.id} className="d-flex mb-4 pb-3 border-bottom position-relative">
                      <div className="flex-shrink-0 me-3 text-center" style={{ minWidth: '70px' }}>
                        <div className="text-muted small mb-1">{announcement.date}</div>
                        <span className={`badge bg-${getBadgeColor(announcement.category)} px-2 py-1`}>
                          {announcement.category}
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-2 lh-base fw-semibold">{announcement.title}</h6>
                       
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Feed Section */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-header bg-white border-0 py-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <h4 className="mb-0 fw-bold">Social Media Feed</h4>
                  </div>
                </div>
              </div>
              
              {/* Platform Tabs */}
              <div className="card-body px-4 py-4">
                <div className="d-flex justify-content-center mb-4 flex-wrap">
                  {platforms.map(platform => (
                    <button
                      key={platform.id}
                      className={`btn mx-1 mb-2 px-3 py-2 rounded-pill border-0 ${
                        activeTab === platform.id ? 'text-white' : 'bg-light'
                      }`}
                      style={{
                        backgroundColor: activeTab === platform.id ? platform.color : '',
                        color: activeTab === platform.id ? 'white' : platform.color,
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => handleTabChange(platform.id)}
                    >
                      <i className={`${platform.icon} me-1`}></i>
                      {platform.name}
                    </button>
                  ))}
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {/* Social Content - Rendered only when not loading */}
                {!loading && (
                  <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {activeTab === 'facebook' && <FacebookContent />}
                    {activeTab === 'instagram' && <InstagramContent />}
                    {activeTab === 'twitter' && <TwitterContent />}
                    {activeTab === 'linkedin' && <LinkedInContent />}
                  </div>
                )}

                {/* Follow Button */}
                <div className="text-center mt-4">
                  <a
                    href={
                      activeTab === 'instagram' ? 'https://www.instagram.com/sanskrithigroup_ptp/' :
                      activeTab === 'facebook' ? 'https://www.facebook.com/sseptp/' :
                      activeTab === 'twitter' ? 'https://x.com/SanskrithiGroup' :
                      'https://www.linkedin.com/in/sgiputtaparthi/'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm px-4 py-2 rounded-pill"
                    style={{ 
                      backgroundColor: platforms.find(p => p.id === activeTab)?.color,
                      borderColor: platforms.find(p => p.id === activeTab)?.color,
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '0.875rem'
                    }}
                  >
                    <i className={`${platforms.find(p => p.id === activeTab)?.icon} me-2`}></i>
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;