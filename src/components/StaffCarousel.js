import React, { useState, useEffect } from 'react';
import './StaffCarousel.css';
import { DirectorArchDecorations } from './DirectorArchDecorations';
import danielaImage from '../assets/daniela-nueva.jpeg';
import agustinaImage from '../assets/agustina-fernandez-capiet.jpeg';
import ludmilaImage from '../assets/ludmila-rodriguez.jpeg';
import malenaImage from '../assets/malena-colasanti.jpeg';

const StaffCarousel = ({ yearsOfExperience = 8 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const staffMembers = [
    {
      title: "Directora médica",
      name: "Dra. Daniela Maleh",
      specialty: "Dermatóloga (M.N. 143.541)",
      bio: `Especialista en dermatología clínica y estética. Más de ${yearsOfExperience} años de experiencia en tratamientos personalizados y medicina inyectable.`,
      image: danielaImage,
      isDirector: true,
    },
    {
      title: "Coordinadora médica",
      name: "Dra. Agustina Fernández Capiet",
      specialty: "Dermatóloga",
      meta: "(M.N. 176.752)",
      image: agustinaImage,
    },
    {
      title: "Dermatóloga",
      name: "Dra. Ludmila Rodríguez",
      specialty: "Dermatóloga",
      meta: "(M.N. 144.952)",
      image: ludmilaImage,
    },
    {
      title: "Dermatóloga",
      name: "Dra. Malena Colasanti",
      specialty: "Dermatóloga",
      meta: "(M.N. 145.893)",
      image: malenaImage,
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffMembers.length) % staffMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [staffMembers.length]);

  return (
    <div className="staff-carousel">
      <header className="staff-carousel-header">
        <h2 className="section-title">Nuestro Equipo Médico</h2>
        <div className="team-header-divider" aria-hidden="true">
          <span className="team-header-divider-line team-header-divider-line--left" />
          <span className="team-header-divider-dot" />
          <span className="team-header-divider-line team-header-divider-line--right" />
        </div>
        <p className="staff-carousel-subtitle">Profesionales comprometidos con tu bienestar</p>
      </header>
      
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="carousel-wrapper">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentSlide * (100 / staffMembers.length)}%)` }}
          >
            {staffMembers.map((member, index) => (
              <div key={index} className="carousel-slide">
                <div className={`doctor-card ${member.isDirector ? 'director-card' : ''}`}>
                  <div
                    className={`doctor-image ${member.isDirector ? 'doctor-image--director-arch' : ''}`}
                  >
                    {member.isDirector && member.image ? (
                      <div className="director-frame director-frame--carousel">
                        <img src={member.image} alt={member.name} className="director-frame__img" />
                        <div className="director-frame-decorations">
                          <DirectorArchDecorations />
                        </div>
                      </div>
                    ) : member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <div className="placeholder-image">Foto</div>
                    )}
                  </div>
                  <div className="doctor-info">
                    <h3 className="doctor-name">{member.name}</h3>
                    <p className="doctor-title">{member.title}</p>
                    <span className="doctor-divider" aria-hidden="true" />
                    <p className="doctor-specialty">
                      {member.specialty}
                      {member.meta ? ` ${member.meta}` : ''}
                    </p>
                    {member.bio && <p className="doctor-bio">{member.bio}</p>}
                    {member.isDirector && (
                      <a
                        href="https://danielamaleh.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doctor-cta"
                      >
                        Ver perfil completo <i className="fas fa-arrow-right" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Siguiente">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="carousel-dots">
        {staffMembers.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffCarousel;
