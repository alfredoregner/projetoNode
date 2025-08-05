import React from 'react'

/* Exercício 1*/
const CardPerfil = ({ nome, imagem, descricao}) => {
  return (
    <div>
      <img src={imagem}/>
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  )
}

export default CardPerfil;
