import React from 'react';
import './Galeria.css';

const galeriaData = [
  { id: 1, title: "Máster en Java", type: "java" },
  { id: 2, title: "Estrategia Digital", type: "marketing" },
  { id: 3, title: "Fotografía Profesional", type: "foto" },
  { id: 4, title: "Edición y Postproducción", type: "video" },
  { id: 5, title: "Desarrollo Web Fullstack", type: "web" },
  { id: 6, title: "Diseño UX / UI", type: "ux" }
];

const Galeria = () => {
  return (
    <section className="galeria-section">
      <div className="galeria-header">
        <div className="pestana-titulo">Galería de Proyectos</div>
      </div>

      <div className="galeria-grid">
        {galeriaData.map((item) => (
          <div key={item.id} className="galeria-card">
            {/* Marco de la imagen (Efecto Polaroid) */}
            <div className="marco-imagen">
              {/* La imagen se carga aquí por CSS según el 'type' */}
              <div className={`imagen-contenido tipo-${item.type}`}></div>
            </div>
            
            {/* Título del curso abajo */}
            <div className="info-curso">
              <h3>{item.title}</h3>
              <span className="ver-mas-link">Ver detalles &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;