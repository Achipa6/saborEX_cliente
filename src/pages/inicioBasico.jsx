<>
        
<div className='contenedor'>
      
  <h1 className='contenedor__titiloApp'>SaborEx</h1>
  <p className='contenedor_texto'>La app que proporciona rankings de restaurantes sobre reviews y puntuaciones de usuarios </p>

</div>
<div className='contenedor_filtrado'>
  <form action="#" method='get' onSubmit={filtrarResena}>

  <label htmlFor="punt" className='contenedor_filtradoTexto'>Filtrar por puntuación mayor que:</label>
  {/* step, Esto permite que el campo acepte valores decimales */}
  <input type="number" name='puntuacion' id='punt' ref={refPuntuacion} step="any" className='contenedor_filtradoCuadro'/> 

  <input type="submit" value="Buscar"  className='contenedor_filtradoBoton'/>

  </form>
</div>
<div className='contenedor_filtrado'>
  <form action="#" method='get' onSubmit={filtrarResenaUbicacion}>

  <label htmlFor="ubi" className='contenedor_filtradoTexto'>Filtrar por ubicación:</label>
  {/* step, Esto permite que el campo acepte valores decimales */}
  <input type="text" name='ubicacion' id='ubi' ref={refUbicacion}  className='contenedor_filtradoCuadro'/> 

  <input type="submit" value="Buscar" className='contenedor_filtradoBoton' />

  </form>
</div>
<div className='contenedor_reviews'>
{Restaurantes.map (restaurante =>{
return <div key={restaurante.id_restaurante} className='contenedor_reviewsCards'>
  <h3>{restaurante.nombre}</h3>
  <p>Puntuación: {restaurante.puntuacion}</p>
  <p>{restaurante.review}</p>
  <p>Ubicación: {restaurante.ubicacion}</p>
  <h5>Escrito por: <pre>{restaurante.usu_review}</pre></h5>
</div>
})}
</div>

</>