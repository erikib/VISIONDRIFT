import React from 'react';
import './Sucursales.css';
import Mapa from './Mapa';

const sucursalesData = [
  {
    id: 'cdmx',
    city: 'CDMX',
    name: 'Perfumery House Reforma',
    address: 'Paseo de la Reforma 222, Juarez, CDMX',
    schedule: 'Lun - Dom: 10:00 - 20:00',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
    lat: 19.4271,
    lng: -99.1677
  },
  {
    id: 'gdl',
    city: 'Guadalajara',
    name: 'Aroma Boutique Zapopan',
    address: 'Av. Vallarta 2440, Arcos Vallarta, Guadalajara',
    schedule: 'Lun - Sab: 10:00 - 21:00',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
    lat: 20.6767,
    lng: -103.3875
  },
  {
    id: 'mty',
    city: 'Monterrey',
    name: 'Essenza Gallery San Pedro',
    address: 'Av. Lazaro Cardenas 1000, Valle Oriente, Monterrey',
    schedule: 'Lun - Dom: 11:00 - 20:30',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    lat: 25.6511,
    lng: -100.3417
  },
  {
    id: 'pue',
    city: 'Puebla',
    name: 'Maison de Parfum Puebla',
    address: 'Calle 2 Sur 102, Centro Historico, Puebla',
    schedule: 'Mar - Dom: 11:00 - 19:30',
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=80',
    lat: 19.0414,
    lng: -98.2063
  }
];

const Sucursales = () => {
  return (
    <section className="sucursales-section">
      <div className="sucursales-header">
        <h2 className="titulo-principal">NUESTRAS SEDES</h2>
        <p className="subtitulo-seccion">Encuentra la sucursal de perfumes mas cercana a ti.</p>
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
