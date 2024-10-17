import React from "react";
import {useNavigate} from 'react-router-dom'
import { useRef,useContext,useState } from "react";
import axios from 'axios'
import {UsuarioContexto} from '../contexto/UsuarioContexto'
import '../style/NuevaResena.css'
import Checkbox from "./Checkbox";

function NuevaResena() {
    // referenciamos con los inputs y en el form ponemos en cada uno su ref del let con hre={}:
    let nombre = useRef();
    let review = useRef();
    let puntuacion = useRef();
    let ubicacion = useRef();

    const {usuario} = useContext(UsuarioContexto);

    const {VITE_URL_RESTAURANTES} = import.meta.env;

    const redireccionar = useNavigate(); //para poder redirigir cuando hayamos creado la reseña 

    const [aceptaCondiciones, setAceptaCondiciones] = useState(false); // Estado para el checkbox

    function CrearNuevaResena(e) {
        e.preventDefault();
            //  valida que los datos enviados en la solicitud contengan todos los campos // Validamos que los campos estén completos y el checkbox marcado
        if (!nombre.current.value.trim() || !review.current.value.trim() || !puntuacion.current.value.trim() || !ubicacion.current.value.trim()) {
            alert("Todos los campos son obligatorios.");
            return; // Salir de la función si algún campo está vacío
        }
        if (!aceptaCondiciones) { // Validamos el checkbox
            alert("Debes aceptar las condiciones para continuar.");
            return;
        }


        let datosAEnviar = { //este es el objeto que le vamos a enviar a nuestro servidor

            nombre : nombre.current.value, //current es a que hago referencia en este caso quiero acceder al valor del input
            review: review.current.value,
            puntuacion: puntuacion.current.value,
            ubicacion: ubicacion.current.value,
            usu_review: usuario,
        };
        axios.post(VITE_URL_RESTAURANTES, datosAEnviar).then(resultados =>{
            if (resultados.data.insercion == 'BienInsertada') {
                
                redireccionar('/resenas') //si se ha creado bien la reseña te lleva al reseñas para poder visualizarla
                
            }else {
                alert("Hubo un problema al insertar la reseña.");
            }
        })
        .catch((error) => {
            console.error("Error al crear la reseña:", error);
            alert("Error al crear la reseña. Inténtalo de nuevo.");
        })
      
     
    };
   
    return(
        <div className="contenedor_resena">
            <form action="#" method="post" onSubmit={CrearNuevaResena}>

                <label htmlFor="nom" className="contenedor_resenaTexto">Nombre del restaurante:</label>
                <input type="text" name="nombre" id="nom" ref={nombre} className="contenedor_resenaCuadro"/>
                <br />
                <label htmlFor="rew" className="contenedor_resenaTexto">Escribe tu reseña:</label>
                <textarea maxLength={200} name="review" id="rew" ref={review} className="contenedor_resenaCuadro"/>
                <br />
                <label htmlFor="puntu" className="contenedor_resenaTexto">Escribe tu puntuación:</label>
                <input type="text" name="puntuacion" id="puntu" ref={puntuacion} className="contenedor_resenaCuadro"/>
                <br />
                <label htmlFor="ubi" className="contenedor_resenaTexto">Ubicación:</label>
                <input type="text" name="ubicacion" id="ubi" ref={ubicacion}className="contenedor_resenaCuadro"/>
                <br />
                <input type="submit" value= "Crear Reseña" className="contenedor_resenaBoton"/>
            </form>        
            <Checkbox onCheckChange={setAceptaCondiciones} />

        </div>
    )

}

export default NuevaResena