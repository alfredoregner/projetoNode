import React, { useState } from "react";

function ToggleOnOff(){

    const[onOff, setOnOff] = useState(0);

    const buttonOn = () => {
        setOnOff(onOff + 1)
    }

    const buttonOff = () => {
        setOnOff(onOff - 1)
    }

    // const buttonOnOff = () => {
    //     setOnOff(onOff = 1)

    //     if(onOff == 1){
    //         setOnOff(onOff - 1)
    //     }
    //     else{
    //         setOnOff(onOff + 1)
    //     }
    // }

    return(
        <div>
            <button onClick = {buttonOn}>On</button>
            <button onClick = {buttonOff}>Off</button>
        </div>
    )
}

export default ToggleOnOff;

