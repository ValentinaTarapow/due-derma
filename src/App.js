import './App.css';
import Header from './components/Header';
import StaffCarousel from './components/StaffCarousel';
import { DirectorArchDecorations } from './components/DirectorArchDecorations';
import Footer from './components/Footer';
import danielaImage from './assets/daniela-nueva.jpeg';
import agustinaImage from './assets/agustina-fernandez-capiet.jpeg';
import ludmilaImage from './assets/ludmila-rodriguez.jpeg';
import malenaImage from './assets/malena-colasanti.jpeg';

// Función para calcular años de trayectoria desde Junio 2016
const calculateYears = () => {
  const foundingDate = new Date(2016, 5); // Junio 2016 (mes 5 = junio)
  const today = new Date();
  let years = today.getFullYear() - foundingDate.getFullYear();
  // Si aún no llegamos a junio este año, restar 1
  if (today.getMonth() < foundingDate.getMonth()) {
    years--;
  }
  return years;
};

function App() {
  const yearsOfExperience = calculateYears();

  return (
    <>
      <Header />
      {/* Contenedor con snap SOLO para las secciones */}
      <div className="scroll-container">
        <section id="home" className="section section-1">
          <div className="section-content hero-content">
            <h1>Due Derma</h1>
            <p className="hero-subtitle">Dermatología Clínica & Estética</p>
            <p className="hero-tagline">Más de {yearsOfExperience} años de trayectoria</p>
          </div>
        </section>
        
        <section id="about" className="section section-2">
          <div className="section-bg" aria-hidden="true" />
          <div className="section-content section-content--about">
            <h1 className="section-title">Sobre Due Derma</h1>
            <div className="about-intro">
              <p>
                Due Derma es un centro especializado en dermatología clínica y estética médica, fundado
                por la{' '}
                <a
                  href="https://danielamaleh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-link"
                >
                  Dra. Daniela Maleh
                </a>
                .
              </p>
              <p>
                Brindamos una atención personalizada, donde la calidad médica se combina con la
                calidez humana que cada paciente merece. Trabajamos con tecnología actualizada y
                tratamientos innovadores, en un entorno cómodo y seguro.
              </p>
              <p>
                Para nosotros, el cuidado de la piel es mucho más que estética:{' '}
                <span className="about-intro-highlight">es salud, bienestar y confianza</span>.
              </p>
            </div>

            <div className="about-why-box" aria-labelledby="about-why-heading">
              <h2 id="about-why-heading" className="about-why-box__title">
                ¿Por qué elegirnos?
              </h2>
              <ul className="about-why-list">
                <li>
                  <span className="about-why-list__item-title">Atención personalizada</span>
                  <p>
                    Nos enfocamos en entender cada caso y acompañarte según tus necesidades.
                  </p>
                </li>
                <li>
                  <span className="about-why-list__item-title">Profesionales en formación constante</span>
                  <p>Trabajamos con técnicas actualizadas y respaldo médico.</p>
                </li>
                <li>
                  <span className="about-why-list__item-title">Experiencia integral</span>
                  <p>Desde la consulta inicial hasta el seguimiento post tratamiento.</p>
                </li>
                <li>
                  <span className="about-why-list__item-title">Entorno cuidado</span>
                  <p>Un espacio cálido, seguro y pensado para tu comodidad.</p>
                </li>
              </ul>
            </div>

            <a href="#contact" className="team-feature-cta about-cta--centered">
              Vení a conocernos <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="team" className="section section-3">
          <div className="team-content">
            <StaffCarousel yearsOfExperience={yearsOfExperience} />
            <div className="staff-section">
              <header className="team-page-header">
                <h1 className="main-team-title">Nuestro Equipo Médico</h1>
                <div className="team-header-divider" aria-hidden="true">
                  <span className="team-header-divider-line team-header-divider-line--left" />
                  <span className="team-header-divider-dot" />
                  <span className="team-header-divider-line team-header-divider-line--right" />
                </div>
                <p className="team-subtitle">Profesionales comprometidos con tu bienestar</p>
              </header>

              <p className="team-section-label">Directora</p>

              <article className="team-feature">
                <div className="team-feature-photo">
                  <div className="director-frame">
                    <img
                      src={danielaImage}
                      alt="Dra. Daniela Maleh"
                      className="director-frame__img"
                    />
                    <div className="director-frame-decorations">
                      <DirectorArchDecorations />
                    </div>
                  </div>
                </div>
                <div className="team-feature-body">
                  <h2 className="team-feature-name">Dra. Daniela Maleh</h2>
                  <p className="team-feature-role">Directora médica</p>
                  <p className="team-feature-specialty">Dermatóloga (M.N. 143.541)</p>
                  <span className="team-feature-divider" aria-hidden="true" />
                  <p className="team-feature-bio">
                    Especialista en dermatología clínica y estética. Más de {yearsOfExperience} años de
                    experiencia en tratamientos personalizados y medicina inyectable.
                  </p>
                  <a
                    href="https://danielamaleh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-feature-cta"
                  >
                    Ver perfil completo <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </article>

              <p className="team-section-label">Equipo</p>

              <div className="team-grid team-grid-members">
                <article className="staff-card staff-card-member">
                  <div className="staff-card-image">
                    <img src={agustinaImage} alt="Dra. Agustina Fernández Capiet" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Agustina Fernández Capiet</h3>
                    <p className="staff-card-role">Coordinadora médica</p>
                    <span className="staff-card-divider" aria-hidden="true" />
                    <p className="staff-card-meta">Dermatóloga (M.N. 176.752)</p>
                  </div>
                </article>

                <article className="staff-card staff-card-member">
                  <div className="staff-card-image">
                    <img src={ludmilaImage} alt="Dra. Ludmila Rodríguez" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Ludmila Rodríguez</h3>
                    <p className="staff-card-role">Dermatóloga</p>
                    <span className="staff-card-divider" aria-hidden="true" />
                    <p className="staff-card-meta">Dermatóloga (M.N. 144.952)</p>
                  </div>
                </article>

                <article className="staff-card staff-card-member">
                  <div className="staff-card-image">
                    <img src={malenaImage} alt="Dra. Malena Colasanti" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Malena Colasanti</h3>
                    <p className="staff-card-role">Dermatóloga</p>
                    <span className="staff-card-divider" aria-hidden="true" />
                    <p className="staff-card-meta">Dermatóloga (M.N. 145.893)</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="commitment" className="section section-4">
          <div className="section-content">
            <h1>Compromiso con la Calidad</h1>
            <div className="team-header-divider" aria-hidden="true">
              <span className="team-header-divider-line team-header-divider-line--left" />
              <span className="team-header-divider-dot" />
              <span className="team-header-divider-line team-header-divider-line--right" />
            </div>
            <p>En Due Derma nos comprometemos a:</p>
            <ul className="commitment-list">
              <li>
                <i className="fas fa-stethoscope"></i>
                Brindar atención médica de excelencia
              </li>
              <li>
                <i className="fas fa-shield-heart"></i>
                Mantener los más altos estándares de bioseguridad
              </li>
              <li>
                <i className="fas fa-desktop"></i>
                Ofrecer tecnología actualizada
              </li>
              <li>
                <i className="fas fa-handshake"></i>
                Proporcionar un ambiente cálido y profesional
              </li>
              <li>
                <i className="fas fa-lock"></i>
                Respetar la privacidad y confidencialidad de nuestros pacientes
              </li>
            </ul>
          </div>
        </section>

        <section id="location" className="section section-5">
          <div className="section-content location-content">
            <h1>Cómo Llegar</h1>
            <div className="location-wrapper">
              <div className="location-info">
                {/* Tarjeta principal de ubicación */}
                <div className="location-card-main">
                  <div className="location-icon-wrapper">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>Nuestra Ubicación</h3>
                  <p className="location-street">Gallo 1671, 1° Piso</p>
                  <p className="location-city">Recoleta, Buenos Aires</p>
                  <a 
                    href="https://maps.google.com/?q=Due+Derma+Gallo+1671+Buenos+Aires" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="location-cta"
                  >
                    Ver en Google Maps <i className="fas fa-arrow-right"></i>
                  </a>
                </div>

                {/* Chips de transporte */}
                <div className="transport-chips">
                  <div className="transport-chip">
                    <div className="chip-header">
                      <i className="fas fa-subway"></i>
                      <span>Subte</span>
                    </div>
                    <p className="chip-detail">D · Estación Agüero</p>
                  </div>
                  <div className="transport-chip">
                    <div className="chip-header">
                      <i className="fas fa-bus"></i>
                      <span>Colectivos</span>
                    </div>
                    <p className="chip-detail">12 · 29 · 39 · 68 · 152</p>
                  </div>
                </div>
              </div>

              {/* Mapa con marco premium */}
              <div className="location-map-wrapper">
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.510779000328!2d-58.408208200000004!3d-34.591243399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb79402bedc7%3A0x49bb649c0037b9f6!2sDue%20Derma%20-%20Dermatolog%C3%ADa%20Cl%C3%ADnica%20y%20Est%C3%A9tica!5e0!3m2!1ses-419!2sar!4v1767938476781!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Due Derma"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Due%20Derma%20Gallo%201671%2C%20Buenos%20Aires%2C%20Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-overlay"
                  aria-label="Abrir ubicación en Google Maps"
                >
                  <span>Abrir mapa</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer fuera del scroll snap */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=5491150535098&text=Hola%20Due%20Derma,%20quisiera%20recibir%20más%20información%20sobre..." 
         target="_blank" 
         rel="noopener noreferrer" 
         className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
