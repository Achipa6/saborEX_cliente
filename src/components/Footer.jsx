import React from 'react'
import '../style/Footer.css'
import {Link} from 'react-router-dom'


function Footer() {
  return (
   <>
        <footer className='footer'>
      <div className='container'>
        <ul className='footer__lista list-unstyled d-flex justify-content-center flex-wrap'>
          <li className='footer__elementoLista mx-3'>
            <Link to="/SobreNosotro" className='footer_link'>Sobre Nosotros</Link>
          </li>
          <li className='footer__elementoLista mx-3'>
            <Link to="/AvisoLegal"  className='footer_link'>Aviso Legal</Link>
          </li>
          <li className='footer__elementoLista mx-3'>
            <Link to="/PoliticaDePrivacidad"  className='footer_link'>Política de privacidad</Link>
          </li>
        </ul>
      </div>
    </footer>
   </>
  )
}

export default Footer