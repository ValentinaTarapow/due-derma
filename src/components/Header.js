import React, { useState } from 'react';
import './Header.css';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Cerrar el menú en mobile después de hacer clic
    setIsMenuOpen(false);
  };

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img src={logoImage} alt="Due Derma" className="logo-image" />
        </div>

        {/* Navegación desktop */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('home')}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('about')}
              >
                Sobre Due Derma
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('team')}
              >
                Equipo
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('commitment')}
              >
                Compromiso
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('location')}
              >
                Cómo Llegar
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('contact')}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa para mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú mobile */}
      <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-mobile-list">
          <li>
            <button 
              className="nav-mobile-link" 
              onClick={() => scrollToSection('home')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className="nav-mobile-link" 
              onClick={() => scrollToSection('about')}
            >
              Sobre Due Derma
            </button>
          </li>
          <li>
            <button 
              className="nav-mobile-link" 
              onClick={() => scrollToSection('team')}
            >
              Equipo
            </button>
          </li>
          <li>
            <button 
              className="nav-mobile-link" 
              onClick={() => scrollToSection('commitment')}
            >
              Compromiso
            </button>
          </li>
          <li>
            <button 
              className="nav-mobile-link" 
              onClick={() => scrollToSection('location')}
            >
              Cómo Llegar
            </button>
          </li>
          <li>
            <button 
              className="nav-mobile-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
