import React from 'react';
import './Contactos.css';

const Contactos = () => {
  return (
    <section className="contacto-section">
      <div className="contacto-overlay">
        <div className="contacto-container">
          <h2 className="contacto-titulo">ENCUENTRA TU PERFUME IDEAL</h2>

          <p className="contacto-subtitulo">
            Si deseas asesoria sobre nuestras colecciones de
            <strong> perfumes , notas exclusivas y ediciones premium</strong>,
            dejanos tus datos y te ayudamos a elegir la fragancia perfecta.
          </p>

          <form className="contacto-form">
            <div className="form-row-imputs">
              <input
                type="text"
                placeholder="Tu nombre"
                className="input-campo"
                required
              />
              <input
                type="email"
                placeholder="Tu email"
                className="input-campo"
                required
              />
              <input
                type="text"
                placeholder="Interes (Ej: Citrico, Amaderado)"
                className="input-campo"
              />
            </div>

            <textarea
              placeholder="Cuentanos que tipo de aroma buscas o para que ocasion lo necesitas..."
              className="input-textarea"
              rows="5"
            ></textarea>

            <div className="check-legal">
              <input type="checkbox" id="privacidad" required />
              <label htmlFor="privacidad">
                Acepto recibir informacion sobre lanzamientos y promociones.
              </label>
            </div>

            <button type="submit" className="btn-enviar">
              SOLICITAR ASESORIA
            </button>
          </form>

          <div className="legal-footer">
            <p>
              Tus datos seran tratados para gestionar tu solicitud de asesoria
              sobre nuestras fragancias. No compartimos tu informacion con terceros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
