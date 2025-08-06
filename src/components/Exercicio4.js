import React, {useState} from "react";

function InputControlado({ ...props }) {
    const[texto, setTexto] = useState("");

    const exibeTexto = (event) =>{
        setTexto(event.target.value);
    };

    return (
        <div>
            <input {...props} placeholder='Digite aqui!'onChange={exibeTexto} value={texto}/><br/>
            <label>Texto Digitado: {texto}</label>
        </div>
    );
}

export default InputControlado;