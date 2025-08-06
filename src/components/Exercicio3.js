import React, { useState } from "react";

function ToggleOnOff() {
    const [isOn, setIsOn] = useState(true);

    const toggleButton = () => {
        setIsOn(estado => !estado); //Verifica o estado atual do botão, e se for diferente ele faz a alteração deste estado (verifica se {useState(true)} ou {useState(false)})
    };

    return (
        <div>
            <button onClick={toggleButton}>{isOn ? "On" : "Off"}</button>
        </div>
    );
}

export default ToggleOnOff;

// Versão inicial
// import React, { useState } from "react";

// function ToggleOnOff(){

//     const[onOff, setOnOff] = useState(0);

//     const buttonOn = () => {
//         setOnOff(onOff + 1)
//     }

//     const buttonOff = () => {
//         setOnOff(onOff - 1)
//     }

//     return(
//         <div>
//             <button onClick = {buttonOn}>On</button>
//             <button onClick = {buttonOff}>Off</button>
//         </div>
//     )
// }

// export default ToggleOnOff;