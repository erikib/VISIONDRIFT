import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <section className="acerca-section">
      <div className="acerca-container">
        <div className="acerca-visual">
          <div className="adorno-fondo"></div>
          <div className="imagen-principal-acerca"></div>
        </div>

        <div className="acerca-contenido">
          <span className="etiqueta-superior">QUIENES SOMOS</span>
          <h2 className="titulo-acerca">El arte de la perfumeria</h2>

          <p className="parrafo-acerca">
            En VISIONDRIFT creamos fragancias premium con materias primas selectas,
            inspiradas en elegancia, caracter y sofisticacion. Cada aroma se disena
            para destacar tu identidad con un sello exclusivo.
          </p>

          <p className="parrafo-acerca">
            Nuestra coleccion combina notas citricas, amaderadas, especiadas y
            florales para cada ocasion, desde momentos diarios hasta eventos
            especiales. Buscamos que cada perfume deje una huella memorable.
          </p>

          <div className="acerca-stats">
            <div className="stat-item">
              <span className="stat-numero">+10</span>
              <span className="stat-texto">Colecciones Signature</span>
            </div>
            <div className="stat-item">
              <span className="stat-numero">30+</span>
              <span className="stat-texto">Esencias Exclusivas</span>
            </div>
            <div className="stat-item">
              <span className="stat-numero">100%</span>
              <span className="stat-texto">Calidad Premium</span>
            </div>
          </div>

          <button className="btn-conoce-mas">DESCUBRIR COLECCION</button>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
