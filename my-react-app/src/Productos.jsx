import './Productos.css';
import { useEffect, useState } from 'react';
import api from './Services/Api';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        const obtenerProductos = async () => {
            try{
                const response = await api.get('/products');
                setProductos(response.data);
            }catch(error){
                console.error('error al obtener productos', error);
            }finally{
                setCargando(false);
            }
        };
        obtenerProductos();
    },[]);

    if(cargando) return <p>Cargando productos.......</p>;

    return (
        <div className="productos">
            <h1>Catálogo de Productos</h1>
            {productos && productos.length > 0 ? (
                <div className="grilla-productos">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.image} alt={producto.title} />
                            <h3>{producto.title}</h3>
                            <p className="price">${producto.price}</p>
                            <button>Comprar</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
}

export default Productos;