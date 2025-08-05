import React from "react";

function InputControlado({ ...props }) {
    return (
        <div>
            <input {...props} placeholder='Digite aqui!'/>
        </div>
    );
}

export default InputControlado;