import fondoPrincipalVideo from "./assets/FondoPrincipal.MP4";
import nube from "./assets/nuve.png";
import "./HeroSection.css";
import { useState } from "react";

function HeroSection({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (event, vista) => {
    event.preventDefault();
    onNavigate?.(vista);
    setIsMenuOpen(false);
  };

  return (
    <section className="hero-page" aria-label="Seccion principal">
      <header className="hero-page__header">
        <div className="hero-page__badge">VISIONDRIFT</div>
        <div className="hero-page__title">
          <h1>VISIONDRIFT</h1>
          <p>Esencia en cada momento.</p>
        </div>
      </header>

      <div className="hero-card">
        <video
          className="hero-card__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={fondoPrincipalVideo} type="video/mp4" />
        </video>
        <div className="hero-card__overlay" />

        <div className="hero-card__top">
          <div className="hero-card__mini-brand">
            <span>VISIONDRIFT</span>
            <small>perfumes de autor</small>
          </div>

          <div className="hero-card__nav">
            <a href="#" onClick={(event) => handleNavigate(event, "AcercaDe")}>
              ACERCA DE
            </a>
            <button type="button" className="hero-card__weather-btn" aria-label="Clima">
              <img src={nube} alt="Clima" />
            </button>
            <a href="#" onClick={(event) => handleNavigate(event, "Contactos")}>
              CONTACTANOS
            </a>

            <div className="hero-card__socials" aria-label="Redes sociales">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.4-4 4.2V11H8v3h2.4v8h3.1Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8 8 10.2h-6.3l-4.9-6.2L6.7 20H3.5l7.3-8.3L3 2h6.5l4.4 5.7L18.9 2Zm-1.1 16h1.7L8.6 3.9H6.8L17.8 18Z" />
                </svg>
              </a>
              <div className="hero-card__menu-wrap">
                <button
                  type="button"
                  className="hero-card__menu-btn"
                  aria-label="Abrir menu"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <span />
                  <span />
                  <span />
                </button>
                {isMenuOpen && (
                  <div className="hero-card__hamburger-bar" role="menu" aria-label="Menu hamburguesa">
                    <button
                      type="button"
                      onClick={(event) => handleNavigate(event, "Productos")}
                      className="hero-card__hamburger-item"
                    >
                      Productos
                    </button>
                    <button
                      type="button"
                      onClick={(event) => handleNavigate(event, "Galeria")}
                      className="hero-card__hamburger-item"
                    >
                      Galeria
                    </button>
                    <button
                      type="button"
                      onClick={(event) => handleNavigate(event, "Usuarios")}
                      className="hero-card__hamburger-item"
                    >
                      Usuarios
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-card__content">
          <h2>BIENVENIDO</h2>
          <p>
            Descubre una fragancia que define tu esencia y deja huella en cada
            momento.
          </p>
        </div>

        <div className="hero-card__booking">
          <div>
            <span>NOMBRE</span>
            <p>Erik & Cris</p>
          </div>
          <div>
            <span>TELEFONO</span>
            <p>764 123 9680</p>
            <p>55 6072 9804</p>
          </div>
          <div>
            <span>FECHA</span>
            <p>No disponible...</p>
          </div>
          <div>
            <span>NRO. DE PERSONAS</span>
            <p>2</p>
          </div>
          <button type="button">VER DISPONIBILIDAD</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
