import { useEffect, useState } from "react";

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Tu navegador no soporta geolocalizacion");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setError("");
      },
      () => setError("Activa los permisos de ubicacion para ver tu mapa"),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!ubicacion) {
    return <p>Obteniendo ubicacion...</p>;
  }

  const delta = 0.01;
  const bbox = `${ubicacion.lng - delta},${ubicacion.lat - delta},${ubicacion.lng + delta},${ubicacion.lat + delta}`;
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${ubicacion.lat},${ubicacion.lng}`;

  return (
    <iframe
      title="Mapa de tu ubicacion"
      src={embedSrc}
      width="100%"
      height="320"
      style={{ border: 0 }}
      loading="lazy"
    />
  );
}

export default MapaGeolocalizacion;
