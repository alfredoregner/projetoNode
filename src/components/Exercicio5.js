import React, {useState} from 'react'

// function ListaFrutas(frutas) {
//   return (
//     <div>
//       <li>{frutas}</li>
//       <button>Adicionar Fruta</button>
//     </div>
//   );
// }


function ListaFrutas() {
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Uva']);

  const novasFrutas = ['Morango', 'Laranja', 'Abacaxi', 'Pera', 'Manga', 'Kiwi', 'Melancia']

  const adicionarFruta = () => {
    const frutaAleatoria = novasFrutas[Math.floor(Math.random() * novasFrutas.length)];
    setFrutas([...frutas, frutaAleatoria]);
  };

  return (
    <div>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      <button onClick={adicionarFruta}>Adicionar Fruta</button>
    </div>
  );
}

export default ListaFrutas;