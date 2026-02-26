import { useEffect, useState } from "react";
import "./Clima.css";

function Clima({ vistaCompleta = false, soloContenido = false }) {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState("");
  const [fijado, setFijado] = useState(false);
  const [hover, setHover] = useState(false);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const lat = 20.276643125269906;
  const lng = -97.95814136117528;
  const mostrarClima = fijado || hover;

  useEffect(() => {
    if (!apiKey) {
      setError("Falta VITE_OPENWEATHER_API_KEY en .env");
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric&lang=es`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.main || !data?.weather?.[0]) {
          setError(data?.message || "No se pudo obtener el clima");
          setClima(null);
          return;
        }
        setError("");
        setClima(data);
      })
      .catch(() => {
        setError("Error de conexion al consultar el clima");
        setClima(null);
      });
  }, [apiKey]);

  const contenidoClima = error ? (
    <p>{error}</p>
  ) : clima ? (
    <>
      <p>{clima.name} Temp: {Math.round(clima.main.temp)} C | Hum: {clima.main.humidity}%</p>
      <p>Descripcion: {clima.weather?.[0]?.description}</p>
    </>
  ) : (
    <p>Cargando clima...</p>
  );

  if (soloContenido) {
    return <div className="divClima divClima--fijo">{contenidoClima}</div>;
  }

  if (vistaCompleta) {
    return (
      <section className="clima-seccion">
        <h2>Clima actual</h2>
        <div className="divClima divClima--fijo">{contenidoClima}</div>
      </section>
    );
  }

  return (
    <div
      className="clima-hover-wrap"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className="clima-boton"
        type="button"
        aria-label="Ver clima"
        onClick={() => setFijado((prev) => !prev)}
      >
        {"\u2601"}
      </button>

      <div className={`divClima ${mostrarClima ? "visible" : ""}`}>{contenidoClima}</div>
    </div>
  );
}

export default Clima;
