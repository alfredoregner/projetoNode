import React, {useState} from 'react'

function Curtir(){
    const[contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);

    }

    return (
        <div>
            <button onClick = {incrementar}>❤</button>
            <p>Curtidas ❤: {contador}</p>
        </div>
    );
}


export default Curtir;