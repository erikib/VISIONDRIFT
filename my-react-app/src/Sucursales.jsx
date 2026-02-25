import React from 'react';
import './Sucursales.css';
import Mapa from './Mapa';

const sucursalesData = [
  {
    id: 'cdmx',
    city: 'CDMX',
    name: 'Sede Reforma',
    address: 'Paseo de la Reforma 222, Juarez',
    schedule: 'Lun - Vie: 9:00 - 18:00',
    image: 'https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&w=1200&q=80',
    lat: 19.4271,
    lng: -99.1677
  },
  {
    id: 'gdl',
    city: 'Guadalajara',
    name: 'Campus Zapopan',
    address: 'Av. Vallarta 2440, Arcos Vallarta',
    schedule: 'Lun - Sab: 10:00 - 14:00',
    image: 'https://source.unsplash.com/1200x800/?guadalajara,mexico,city',
    lat: 20.6767,
    lng: -103.3875
  },
  {
    id: 'mty',
    city: 'Monterrey',
    name: 'Torre San Pedro',
    address: 'Av. Lazaro Cardenas 1000, Valle Ote',
    schedule: 'Lun - Vie: 8:00 - 17:00',
    image: 'https://source.unsplash.com/1200x800/?monterrey,mexico,skyline',
    lat: 25.6511,
    lng: -100.3417
  },
  {
    id: 'pue',
    city: 'Puebla',
    name: 'Centro Historico',
    address: 'Calle 2 Sur 102, Centro',
    schedule: 'Mar - Sab: 11:00 - 19:00',
    image: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?auto=format&fit=crop&w=1200&q=80',
    lat: 19.0414,
    lng: -98.2063
  }
];

const Sucursales = () => {
  return (
    <section className="sucursales-section">
      <div className="sucursales-header">
        <h2 className="titulo-principal">NUESTRAS SEDES</h2>
        <p className="subtitulo-seccion">Encuentra el centro de capacitacion mas cercano a ti.</p>
      </div>

      <div className="sucursales-grid">
        {sucursalesData.map((branch) => (
          <article key={branch.id} className="sucursal-card">
            <div className={`sucursal-imagen img-${branch.id}`}>
              <img
                className="sucursal-imagen-real"
                src={branch.image}
                alt={`Sucursal ${branch.city}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${branch.id}-mx/1200/800`;
                }}
              />
              <span className="etiqueta-ciudad">{branch.city}</span>
            </div>

            <div className="sucursal-info">
              <h3 className="nombre-sede">{branch.name}</h3>

              <div className="info-detalle">
                <p className="direccion">{branch.address}</p>
                <p className="horario">{branch.schedule}</p>
              </div>

              <div className="sucursal-mapa">
                <Mapa
                  lat={branch.lat}
                  lng={branch.lng}
                  nombre_sucursal={branch.name}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Sucursales;
