function Mapa({ lat, lng, nombre_sucursal }) {
  const delta = 0.01;
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div>
      <h2>{nombre_sucursal}</h2>
      <iframe
        title={`Mapa de ${nombre_sucursal}`}
        src={embedSrc}
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
      />
      <a href={mapsLink} target="_blank" rel="noreferrer">
        Ver en Google Maps
      </a>
    </div>
  );
}

export default Mapa;
