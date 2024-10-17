import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'//para poder usar el contexto
import {UsuarioContexto} from '../contexto/UsuarioContexto' 
import '../style/styles.css'

function Header() {

  const {usuario} = useContext(UsuarioContexto);

  return (
    <header className='header'>
      <div className='container'>
        <div className="justify-content-between align-items-center header_elementos">
            {usuario == null ? <li className='header_links-login'><Link to={'/login'} className='header_links'>Login </Link></li>:<p className='header_bienvenido'>Bienvenido/a:  {usuario}</p> }
          <ul  className='header_navegacion d-flex list-unstyled flex-wrap'>
            <li className='me-3'><Link to={'/'} className='header_links'>Inicio</Link></li>
            
            {/* //para que si estas logeado salga el boton de logout */}
            {usuario != null ? <li className='me-3'><Link to={'/logout'} className='header_links'>Cerrar sesión </Link></li>:<></> }

            {/* //para que esta ruta solo aparezca si estas logueado:   */}
            {usuario != null ? <li className='me-3'><Link to={'/resenas'} className='header_links'> Mis reseñas </Link></li>:<></> }

            
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header