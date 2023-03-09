import React from 'react'

export default function MiLista() {
    const nombres = ['Pedro', 'Juan', 'Ariel', 'Ana']
  return (
    <div>
        {nombres.map((nombre)=> (<li key={nombre}>{nombre}</li>))}
    </div>
  )
}
