import { useState,createContext } from 'react'

const UsuarioContexto = createContext();//herramienta de react que nos permite pasar datos a la aplicaion sin tener que pasarlo por props//este va a ser donde vamos a guardar los datos que va a poder usar toda mi aplicación

const UsuarioProvider = ({children})=>{//esto va a ser lo que le da los valores a la aplicacion

    const [usuario,setUsuario] = useState(localStorage.getItem('usuario'));//para que mantenga sesion iniciada
    //esto es lo que va a decir si estas logeado o no:
    const login = (datosUusarios) =>{ 
        localStorage.setItem('usuario', datosUusarios) //para guardar el usuario en localstorage y asi si no cierra sesión siempre se quedará guardada la sesión
        setUsuario(datosUusarios)
    }
    const logout = ()=>{
        localStorage.removeItem('usuario') //cuando cierre sesión se borra el usuario del localstorage
        setUsuario(null)
    }
    return(
        
         //ahora viene el proveedor para devolver los valores 
        <UsuarioContexto.Provider value={{usuario,login,logout}}>

            {children}

        </UsuarioContexto.Provider>
    )
}


export  {UsuarioContexto,UsuarioProvider}