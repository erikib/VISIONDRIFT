import React from 'react';
import './Galeria.css';

const galeriaData = [
  { id: 1, title: "Acqua di Gio", imageUrl: "https://fimgs.net/mdimg/perfume/o.71606.jpg" },
  { id: 2, title: "Jean Paul Gaultier", imageUrl: "https://ss701.liverpool.com.mx/xl/1157451151.jpg" },
  { id: 3, title: "Dior Sauvage", imageUrl: "https://ss701.liverpool.com.mx/xl/1161020857.jpg" },
  { id: 4, title: "Versace Eros", imageUrl: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwcc47a2f0/original/90_R740011-R200MLS_RNUL_20_Eros~EDT~200~ml-Accessories-Versace-online-store_0_1.jpg?sw=850&q=85&strip=true" },
  { id: 5, title: "Paco Rabanne 1 Million", imageUrl: "https://ss701.liverpool.com.mx/xl/1098117201.jpg" },
  { id: 6, title: "Hugo Boss Bottled", imageUrl: "https://www.bellaroma.mx/wp-content/uploads/2023/02/3614229828535-2-1.png" },
  { id: 7, title: "Bleu de Chanel", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxpPb1KCH60di_3NnXPU7dFFcyHqizcC41g&s" },
  { id: 8, title: "Yves Saint Laurent Y", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-ksT-Zc8EtR83f2N6kKqSSnW7QJqF1bMqQ&s" },
  { id: 9, title: "Armani Code", imageUrl: "https://ultrafemme.com/media/catalog/product/d/e/descarga_-_2024-05-27t170835.331.png?optimize=medium&fit=bounds&height=1000&width=1250&canvas=1250:1000&format=jpeg" },
  { id: 10, title: "Dolce & Gabbana The One", imageUrl: "https://http2.mlstatic.com/D_Q_NP_781189-MLU72366425219_102023-O.webp" },
  { id: 11, title: "Givenchy Gentleman", imageUrl: "https://arome.mx/cdn/shop/files/w_1500_h_1500_fit_pad-_1.jpg?v=1725562338" },
  { id: 12, title: "Prada Luna Rossa Carbon", imageUrl: "https://www.prada.com/content/dam/pradabkg_products/2/2A1/2A1154/2HC6F0Z99/2A1154_2HC6_F0Z99_P_ML050_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.600.600.jpg" }
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
              {/* Cambia la imagen desde galeriaData.imageUrl */}
              <div
                className="imagen-contenido"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
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
