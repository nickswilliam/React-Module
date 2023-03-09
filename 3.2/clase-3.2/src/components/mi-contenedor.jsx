import React from 'react'
import MiTitulo from './mi-titulo'
import { MiParrafo } from './mi-parrafo'
import MiLista from './MiLista';

export const MiContenedor = ({titulo, texto}) => {
    return (
        <>
            <MiTitulo titulo={titulo} />
            <MiParrafo texto={texto}/>
            <p>{MiParrafo}</p>
            <MiLista/>
        </>
    );
}

MiContenedor.defaultProps = {
    texto: 'No se ha proporcionado un texto'
}