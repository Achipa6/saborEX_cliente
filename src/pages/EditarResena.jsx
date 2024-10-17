import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/EditarResena.css'

function EditarResena() {
    //para poder referenciar los inpots del form con nuestas variables
    let nombre = useRef();
    let review = useRef();
    let puntuacion = useRef();
    let ubicacion = useRef();
    let {id} = useParams();
    
    let { VITE_URL_RESTAURANTES } = import.meta.env;
    let redireccionar = useNavigate();

    useEffect(() => {
        axios.get(`${VITE_URL_RESTAURANTES}/querestaurantever/${id}`)
            .then(resultados => {
                nombre.current.value = resultados.data.nombre;
                review.current.value = resultados.data.review;
                puntuacion.current.value = resultados.data.puntuacion;
                ubicacion.current.value = resultados.data.ubicacion;
            })
            .catch(error => {
                console.error("Error al cargar la reseña:", error);
                alert("Error al cargar la reseña. Inténtalo de nuevo.");
            });
    }, [id]);

    const editarresena = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            id_restaurante: id,
            nombre: nombre.current.value,
            review: review.current.value,
            puntuacion: puntuacion.current.value,
            ubicacion: ubicacion.current.value,
        }

        axios.put(`${VITE_URL_RESTAURANTES}/querestaurantever/${id}`, datosAEnviar)//para traer los datos del restaurante por la id para traernos solo ese restaurante y poder editarlo //usamos put en vez de get o post porque es la U de CRUD y al ser update se usa metodo put
            .then(resultados => {
                alert(resultados.data.mensaje); // Mostrar el mensaje del servidor
                redireccionar('/resenas');
            })
            .catch(error => {
                console.error("Error al crear la reseña:", error);
                alert("Error al crear la reseña. Inténtalo de nuevo.");
            });
            
    }

    return (
        <div className='contenedor_editar'>
            <form action="#" method="post" onSubmit={editarresena}>
                <label htmlFor="nom" className='editar_texto'>Nombre del restaurante:</label>
                <input type="text" name="nombre" id="nom" ref={nombre} className='editar_cuadro'/>
                <br />
                <label htmlFor="rew" className='editar_texto'>Escribe tu reseña:</label>
                <textarea maxLength={200} name="review" id="rew" ref={review} className='editar_cuadro'/>
                <br />
                <label htmlFor="puntu" className='editar_texto'>Escribe tu puntuación:</label>
                <input type="text" name="puntuacion" id="puntu" ref={puntuacion} className='editar_cuadro'/>
                <br />
                <label htmlFor="ubi" className='editar_texto'>Ubicación:</label>
                <input type="text" name="ubicacion" id="ubi" ref={ubicacion} className='editar_cuadro'/>
                <br />
                <input type="submit" value="Editar" className='editar_boton' />
            </form>
        </div>
    );
}

export default EditarResena;