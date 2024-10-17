import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import {UsuarioProvider} from './contexto/UsuarioContexto'
import { lazy } from 'react'
import FallbackSuspense from './components/FallbackSuspense'

const Login =  lazy( () => import('./pages/Login'))
const Logout =  lazy( () => import('./pages/Logout'))
const RutaPrivada = lazy(()=>import('./RutaPrivada')) //con esto podemos privatizar cualquier tipo de ruta
const MisResenas =  lazy( () => import('./pages/MisResena'))
const NuevaResena =  lazy( () => import('./pages/NuevaResena'))
const Footer =  lazy( () => import('./components/Footer'))
const EditarResena =  lazy( () => import('./pages/EditarResena'))
const BorrarResena =  lazy( () => import('./pages/BorrarResena'))
const Header =  lazy( () => import('./components/Header'))
const Inicio =  lazy( () => import('./pages/Inicio'))

const SobreNosotro = lazy(() => import('./pages/SobreNosotro'));
const PoliticaDePrivacidad = lazy(() => import('./pages/PoliticaDePrivacidad'));
const AvisoLegal = lazy(() => import('./pages/AvisoLegal'));

createRoot(document.getElementById('root')).render(
 <>
  
  <Router>
    {/* para que todos ppuedan usar el proveedor (UserProvider) */}
    <UsuarioProvider>

      <Header/>

      <Suspense fallback = {<FallbackSuspense/>}>

        <Routes>

          <Route path='/' element={<Inicio/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<RutaPrivada RestauranteQueQuieroPintar={<Logout/>}/>}/> 
          <Route path='/resenas' element={<RutaPrivada RestauranteQueQuieroPintar={<MisResenas/>}/>}/>
          <Route path='/crearresena' element={<RutaPrivada RestauranteQueQuieroPintar={<NuevaResena/>}/>}/> {/* //para decirle a la ruta que antes de crear el componente que pase por ruta privada */}
          <Route path='/editarresena/:id' element={<RutaPrivada RestauranteQueQuieroPintar={<EditarResena/>}/>}/>{/* ruta privada relativas :(datos que van cambiado dependiendo de los datos link que le pongas pero usan la misma plantilla ) */}
          <Route path='/borrarresena/:id' element={<RutaPrivada RestauranteQueQuieroPintar={<BorrarResena/>}/>}/>
          <Route path='/SobreNosotro' element={<SobreNosotro />} />
          <Route path='/AvisoLegal' element={<AvisoLegal />} />
          <Route path='/PoliticaDePrivacidad' element={<PoliticaDePrivacidad />} />
                  
        </Routes>

      </Suspense>

      <Footer/>
    
      
    </UsuarioProvider>

  </Router>

 </>
)
