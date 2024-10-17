import React, {useRef} from 'react'
import axios from 'axios' //para hacer peticiones asincronas al servidor
import { useEffect,useState } from 'react'
import '../style/Inicio.css'

function Inicio() {

  const [Restaurantes,setRestaurantes] = useState([]);
  const refPuntuacion = useRef(null);
  const refUbicacion = useRef(null);

  useEffect(()=>{

   /* Este fragmento de código utiliza la biblioteca `axios` para realizar una solicitud GET a una URL almacenada en el archivo
`.env`. */
    axios.get(import.meta.env.VITE_URL_RESTAURANTES).then(resultado=>{

      setRestaurantes(resultado.data);
    })//para indicar la url de donde traemos los restaurantes, url la tenemos guardada en el .env
  },[]);//para que solo lo haga una vez

  function filtrarResena(e){
    e.preventDefault();

    let puntuacion =refPuntuacion.current.value;

    axios.get(`${import.meta.env.VITE_URL_RESTAURANTES}/filtrar/${puntuacion}`).then(resultado=>{
      setRestaurantes(resultado.data)
    })
    .catch(error => {
      console.error("Error al filtrar por puntuacion", error);
      alert("No se encontraron restaurantes con esa puntuación"); // Puedes manejar el mensaje de error como desees
    });
  }
  function filtrarResenaUbicacion(e){
    e.preventDefault();

    let ubicacion = refUbicacion.current.value;

    axios.get(`${import.meta.env.VITE_URL_RESTAURANTES}/filtrar/ubicacion/${ubicacion}`).then(resultado=>{
      setRestaurantes(resultado.data)
    })
    .catch(error => {
      console.error("Error al filtrar por ubicación", error);
      alert("No se encontraron restaurantes en esa ubicación"); // Puedes manejar el mensaje de error como desees
    });
  }

  
/* Esta parte del código en la declaración `return` está renderizando la interfaz de usuario para el componente Inicio
. Incluye un contenedor con el título "SaborEx" y una descripción de la aplicación. Debajo
de eso, hay dos formularios para filtrar reseñas de restaurantes según una calificación mínima o una ubicación
específica. */
  return (
    <div className="container mt-5">
    <h1 className="contenedor__titiloApp text-center">SaborEx</h1>
    <p className="contenedor_texto">La app que proporciona rankings de restaurantes sobre reviews y puntuaciones de usuarios.</p>

    <div className='contenedor_filtados'>
      <div className="mb-4">
        <form onSubmit={filtrarResena}>
          <label htmlFor="punt" className="form-label contenedor_filtradoTexto">Filtrar por puntuación mayor que:</label>
          <input type="number" ref={refPuntuacion} className="form-control contenedor_filtradoCuadro" id="punt" step="any" />
          <button type="submit" className="btn contenedor_filtradoBoton mt-3">Buscar</button>
        </form>
      </div>
      <div className="mb-4">
        <form onSubmit={filtrarResenaUbicacion}>
          <label htmlFor="ubi" className="form-label contenedor_filtradoTexto">Filtrar por ubicación:</label>
          <input type="text" ref={refUbicacion} className="form-control contenedor_filtradoCuadro" id="ubi" />
          <button type="submit" className="btn contenedor_filtradoBoton mt-3">Buscar</button>
        </form>
      </div>
    </div>

    { /* Esta parte del código es responsable de mostrar la lista de restaurantes en función de los datos obtenidos
    de la API.*/ }

    <div className="row">
      {Restaurantes.map(restaurante => (
        <div key={restaurante.id_restaurante} className="col-md-4 mb-4">
          <div className="card contenedor_reviewsCards"> 
            <div className="card-body">
              <h5 className="card-title">{restaurante.nombre}</h5>
              <p className="card-text">Puntuación: {restaurante.puntuacion}</p>
              <p className="card-text">{restaurante.review}</p>
              <p className="card-text">Ubicación: {restaurante.ubicacion}</p>
              <h6 className="card-subtitle">Escrito por: <pre className='card_textUsuario'>{restaurante.usu_review}</pre></h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )

  
}


export default Inicio