import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import AcercaDe from "./acercaDe";
import Contactos from "./Contactos";
import Clima from "./Clima";
import Productos from "./Productos";
import Galeria from "./Galeria";
import Usuario from "./Usuario";
import "./App.css";

function App() {
  const [vista, setVista] = useState(null);

  useEffect(() => {
    if (!vista) return;
    const target = document.getElementById("seccion-contenido");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [vista]);

  return (
    <div className="app-shell">
      <HeroSection onNavigate={setVista} />
      {/*
        Secciones como cursos, marketing, clima, mapas y footer se mantienen
        en el proyecto y se integraran
        en el menu en el siguiente paso.
      */}
      {vista && (
        <section id="seccion-contenido">
          {vista === "AcercaDe" && <AcercaDe />}
          {vista === "Contactos" && <Contactos />}
          {vista === "Clima" && <Clima />}
          {vista === "Productos" && <Productos />}
          {vista === "Galeria" && <Galeria />}
          {vista === "Usuarios" && <Usuario />}
        </section>
      )}
    </div>
  );
}

export default App;
