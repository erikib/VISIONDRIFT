
import miLogo from './assets/monsterlogo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import telegrama from './assets/telegrama.png';
import tiktok from './assets/tiktok.png';
import './Encabezado.css';
import PropTypes from 'prop-types';
import Clima from './Clima';
function Encabezado({cambiarVista}) {
    return (
        <div className="Encabezado">
            <Logo />
            <Menu cambiarVista={cambiarVista} />
            <Redes />
        </div>
    );
}

function Logo() {
    return (
        <div className='LogoDiv'>
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}

function Menu({cambiarVista}) {
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Carrito")}>Carrito</li>
                <li onClick={() => cambiarVista("Contactos")}>Contactos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
            </ul>
        </div>
    );
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
                <li className="redes"> <a href="#"> <img src={facebook} alt="Logo de Facebook" /></a></li>
                <li className="redes"> <a href="#"> <img src={instagram} alt="Logo de Instagram" /></a></li>
                <li className="redes"> <a href="#"> <img src={telegrama} alt="Logo de Telegrama" /></a></li>
                <li className="redes"> <a href="#"> <img src={tiktok} alt="Logo de Tiktok" /></a></li>
            </ul>
            <Clima></Clima>
        </div>
    );
}
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired,
};

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired,
};
export default Encabezado;
