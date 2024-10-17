import React from "react";
import axios from "axios";
import { useEffect,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContexto } from "../contexto/UsuarioContexto";
import '../style/MisResenas.css'


function MisResenas() {

    const [resenas,setResenas] = useState([]);

    const {usuario} = useContext(UsuarioContexto);

    const {VITE_URL_RESTAURANTES} = import.meta.env; //para coger la url del archivo .env

    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores
    
    useEffect(() => {
        if (usuario && VITE_URL_RESTAURANTES) {
            axios.get(`${VITE_URL_RESTAURANTES}/usuarios/${usuario}`)  //para dependiendo en que uasuario estes logeado te muestre sus reseñas unicameente
                .then(resultado => {
                    setResenas(resultado.data || []);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error al obtener las reseñas:", err);
                    setError("Hubo un problema al obtener las reseñas.");
                    setLoading(false);
                });
        } else {
            setError("El usuario o la URL del servicio no están definidos.");
            setLoading(false);
        }
    }, [usuario, VITE_URL_RESTAURANTES]);

    // Mostrar mensaje de error si ocurre algún problema
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Si no hay reseñas
    if (resenas.length === 0) {
        return <div>
            <p>No has escrito ninguna reseña aún.</p>
            <Link to={'/crearresena'}> Crear Reseña</Link>     

        </div>;
        
    }
    return (
        <div className="contenedorMisResenas">
            <h2 className="contenedorMisresenas_titulo">Estas son tus reseñas sobre restaurantes:</h2>
            <nav className="contenedorMisresenas_menuReseñas">
            <Link to={'/crearresena'} className="contenedorMisresenas_linkCrear"> Crear Reseña</Link>          
            
            </nav>
            <div className="contenedorMisresenas" >
                {resenas.map( resena => {
                    return <div className="contenedorMisresenas_review" key={resena.id_restaurante}>
                        <h3>Nombre:</h3>
                        <p className="contenedorMisresenas_nombreRestaurante">{resena.nombre}</p>
                        <p>Puntuación:  {resena.puntuacion}</p>
                        <p>Review: </p>
                        <p>{resena.review}</p>
                        <p>Ubicación: {resena.ubicacion}</p>
                        <Link to={`/editarresena/${resena.id_restaurante}`} className="contenedorMisresenas_link"> Editar Reseña</Link>
                        <br />
                        <Link to={`/borrarresena/${resena.id_restaurante}`} className="contenedorMisresenas_link"> Borrar Reseña</Link>
                    </div>
                })}

            </div>
           
           
        </div>
        
    );
}

export default MisResenas;