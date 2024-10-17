import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import '../style/BorrarResena.css'

function BorrarResena() {
    
    let {id} =useParams();
    let { VITE_URL_RESTAURANTES } = import.meta.env;
    let redireccionar = useNavigate();

    function noBorrar() {
        redireccionar('/resenas')
    }
    function siBorrar() {
        axios.delete(VITE_URL_RESTAURANTES+'/'+id).then(respuesta=>{

            if (respuesta.data.borrado == 'Borrado correcto') {
                redireccionar('/resenas')
            }
        })
        
    }
    return ( 

            <div className="contenedor_borrar">
                    <h2 className="borrar_texto text-center">¿Estás seguro que quieres borrar tu reseña?</h2>
                    <button type="button" onClick={noBorrar} className="borrar_boton">No</button>
                    <button type="button" onClick={siBorrar} className="borrar_boton">Si</button>
            </div>

    )

}
export default BorrarResena;