import React from "react";
import { useContext } from "react";
import { UsuarioContexto } from "../contexto/UsuarioContexto";
import { redirect, useNavigate } from "react-router-dom";
import '../style/Logout.css'
function Logout() {
    
    const {logout} = useContext(UsuarioContexto);

    const redireccionar = useNavigate();

    function no() {
        redireccionar('/'); //boton no, te lleva al inicio
    }
    function si() {
        
        logout();
        redireccionar('/logout') //botón si, te rediije a logout 

    }
    return(
     
        <div className="contenedor_logout">
                    
        <h2 className="text-center">¿Estas seguro que quieres cerrar tu sesión?</h2>
        <br />
        <div className="contenedor_logoutBoton">
            
        <button type="button" onClick={no} className="contenedor_logoutBoton--respuesta">No</button>
        <button type="button" onClick={si} className="contenedor_logoutBoton--respuesta">Si</button>
        
        </div>
        </div>

    )
}
export default Logout