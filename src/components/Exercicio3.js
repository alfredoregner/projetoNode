import React, { useState } from "react";


function ToggleOnOff({ perguntas }) {
  const [ativa, setAtiva] = useState(null);
  const [desativa, setDesativa] = useState(null);

  const toggleAtiva = () => {
    setAtiva(ativa === index ? null : index);
  };

  const toggleDesativa = (index) => {
    setDesativa(desativa === index ? null : index);
  };

  return (
    <div >
      <button onClick={() => toggle(index)}>ON</button>
          {ativa === index && (
            <div>
              <p>{item.resposta}</p>
            </div>
          )}
        </div>
      )
}

export default ToggleOnOff;

