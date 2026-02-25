import './ContenedorTargetas.css';
import PropTypes from 'prop-types';
import monstergreen from './assets/monstergreen.jpg';
import monsterwhite from './assets/monsterwhite.jpg';
import monsterpink from './assets/mosnterpink.jpg';
import AcercaDe from './AcercaDe.jsx';
import Productos from './Productos.jsx';
import Contactos from './Contactos.jsx';

import Galeria from './Galeria.jsx';
import Sucursales from './Sucursales.jsx';

import Usuario from './Usuario.jsx';
import Carrito from './Carrito.jsx';

function ContenedorTargetas({vista}) {
    const vistas = {
        "Inicio": <Inicio />,
        "AcercaDe": <AcercaDe />,
        "Productos": <Productos />,
        "Contactos": <Contactos />,
        "Galeria": <Galeria />,
        "Sucursales": <Sucursales />,
        "Usuarios": <Usuario />,
        "Carrito": <Carrito />,
    }
    return (
        <div className="contenedorDiv">
            {vistas[vista] || vistas["Inicio"]}
        </div>
    );
}

function Inicio() {
    return (
    <>
        <div className="ContenedorTargetas">
            <div className="tarjetas">
            <Tarjeta titulo="Java" descripcion="Lenguaje de programación orientado a objetos" imagen="https://www.shutterstock.com/image-photo/professional-coding-backend-script-secure-600nw-2616573705.jpg"/>
            <Tarjeta titulo="Python" descripcion="Lenguaje de programación interpretado" imagen="https://www.freelance-informatique.fr/images/actualites/langage%20programmation.jpg"/>
            <Tarjeta titulo="JavaScript" descripcion="Lenguaje de programación para el desarrollo web" imagen="https://apprendre-la-programmation.net/images/debutant-programmation.jpg"/>
            <Tarjeta titulo="PHP" descripcion="Lenguaje de programación para el desarrollo web backend" imagen="https://st4.depositphotos.com/4678277/28802/i/450/depositphotos_288020168-stock-photo-close-up-side-profile-photo.jpg"/>
            </div>
        </div>
    </>
    );

}

function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <img src={props.imagen} alt={props.titulo} />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    );
}
ContenedorTargetas.propTypes = {
    vista: PropTypes.string.isRequired,
};
export default ContenedorTargetas;