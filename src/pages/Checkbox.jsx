import React, { useState} from "react"; //importamos los dos a la vez porque estan en la misma carpeta
import '../style/Checkbox.css'

function Checkbox({ onCheckChange }) {
    
    const [checked, setCheced] = useState(false);

    function cambiaCheck(e) {
        
        setCheced(e.target.checked);
        onCheckChange(e.target.checked); // Pasamos el estado al padre
    }

    return <>
        <label htmlFor="cond" className="checkbox">¿Aceptas las condiciones?</label>
        <input type="checkbox" name="condiciones" id="cond" onChange={cambiaCheck} required />
    {/* funcion if TERNARIO la funcion de abajo se llama asi, es comom if pero compacto */}
        {checked == true ? <p className="checkbox_text">Acepto condicones </p> :<p className="checkbox_text">No ha aceptado condiciones</p>}
    
    </>
}

export default Checkbox;