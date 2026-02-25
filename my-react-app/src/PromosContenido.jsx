import MapaGeolocalizacion from './MapaGeolocalizacion';
import './PromosContenido.css';
import monsterdivenmedio from './assets/monsterdivenmedio.jpg';

function PromosContenido() {
    return (
        <div className="monsterBanner" style={{backgroundImage: `url(${monsterdivenmedio})`}}>
            <div className="monsterContent">
                <h2>M A R K E T I N G</h2>
                <p>El marketing es una disciplina fundamental que permite a las empresas comunicar su valor al público objetivo, construir marcas sólidas y fomentar relaciones duraderas con los clientes. A través de estrategias bien definidas, se logra posicionar productos o servicios de manera efectiva en el mercado.</p>
            <MapaGeolocalizacion />

            </div>
        </div>
    );
}

export default PromosContenido;
