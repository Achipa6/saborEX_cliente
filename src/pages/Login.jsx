import React from "react";
import { useState,useRef,useContext } from "react";//useref para poder acceder al dom si tener que cogerlos con get.int.id o lo que sea
import { UsuarioContexto } from "../contexto/UsuarioContexto";
import axios from 'axios'; //para comprobar si el usuario existe
import { useNavigate } from "react-router-dom";
import '../style/Login.css'


function Login() {
    
    const redirigir = useNavigate();
    const {login} = useContext(UsuarioContexto);//esto es DESESTRUCTURAR el objeto, estas rompiendo el objeto ya que estamos solo cogiendo un dato del objeto //para guardar la funcion login de usuariocontexto.js
    const [error,setError] = useState(''); //para guardar los mensajes de error 

      //para relacionar las etiquetas:
    const usuarioReferencia = useRef();  //para apuntar a los input para poder tomar el valor del campo y luego referenciamos el input con ref
    const contrasenaReferencia = useRef();

    function revisarUsuario(e) {
        e.preventDefault(); //para parar el formulario

        let ObjetoAMandar = {  // creamos un objeto que es el que le enviaremos al servidor

            usuario: usuarioReferencia.current.value, //coge el valor de useRef de arriba(la constante que hemos creado)
            contrasena: contrasenaReferencia.current.value //coge el valor de useRef de arriba(la constante que hemos creado)
        }
        axios.post(import.meta.env.VITE_URL_USUARIOS,ObjetoAMandar).then(datos =>{ //para mandar los datos(quiero que hagas una peticion post a esta ruta y que le mandes este dato(objetoAMandar) se lo mandas en el body)

            if (datos.data.mensajeError == 'Usuario no encontrado') {
                setError('Usuario no encontrado')
            }else{
                login(datos.data.nombre);
                redirigir('/') //para decirle que nos lleve a la pagina principal si estamos logeados
        }
        
    })
}
    return(
    
       
            // <div className="formulario">
            //     {error}  {/* //para pintar el error de usuario no encontrado: */}

            //     {/* onsubmit para crar la funcion y poder parar el envio */}
            //     <form action="#" method="post" onSubmit={revisarUsuario} className="formulario_contenedor">
                    
            //         <label htmlFor="usu" className="formulario_label">Nombre de Usuario:</label>
            //         <input type="text" name="usuario" id="usu" ref={usuarioReferencia} className="formulario_input"/> 
            //         <br />
            //         <label htmlFor="pass" className="formulario_label">Contraseña: </label>
            //         <input type="password" name="password" id="pass" ref={contrasenaReferencia} className="formulario_input"/> 
            //         <br />
            //         <input type="submit" value="Iniciar Sesion" className="formulario_boton"/>


            //     </form>

            // </div>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <div className="formulario">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={revisarUsuario} className="formulario_contenedor">
                            <label htmlFor="usu" className="formulario_label">Nombre de Usuario:</label>
                            <input type="text" id="usu" ref={usuarioReferencia} className="formulario_input" />
                            <label htmlFor="pass" className="formulario_label">Contraseña: </label>
                            <input type="password" id="pass" ref={contrasenaReferencia} className="formulario_input" />
                            <input type="submit" value="Iniciar Sesion" className="formulario_boton" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        )
}


export default Login;
