import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import AcercaDe from "./acercaDe";
import Contactos from "./Contactos";
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
        </section>
      )}
    </div>
  );
}

export default App;
