import React from 'react'
import { useEffect } from 'react';


function FallbackSuspense() {
  return (
    <>
    
    <h2>Estamos esperando tus reseñas</h2>
    <p>Espera un poquito, no te vayas</p>
    <img src="public/images/cargando.gif" alt="cargando" />

    
    </>
  )
}

export default FallbackSuspense