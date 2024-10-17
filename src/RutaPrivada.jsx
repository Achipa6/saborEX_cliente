import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsuarioContexto } from "./contexto/UsuarioContexto";

//aqui es donde vamos a hacer si pintamos o no un componente dependiendo si esta logueado o no
function RutaPrivada({RestauranteQueQuieroPintar}) {

    const {usuario} = useContext(UsuarioContexto);

    return(
        //si no estas logeado vas a login, si estas logueadopasamos el restaurante que quiero pintar como componente por propiedas a la funcion de rutas privadas
        <>
        
        {usuario == null ? <Navigate to={'/login'}/> : RestauranteQueQuieroPintar} 
        </>
    )
    
}

export default RutaPrivada