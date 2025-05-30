//ARCHIVO 2
import { Fragment } from "react";

export const MyComponentWithoutFramgment1 = ()=>{
    return(
        <h1>Un elemento por componente</h1>
    );
}


export const MyComponentWithoutFramgment2 = ()=>{
    return(
        <div>
            <h1>Dos elementos</h1>
            <h2>Pero requerimos de un padre</h2>
        </div>
    );
}

export const MyFragment1 = ()=>{
    return (
        <Fragment>
            <h1>Dos elementos</h1>
            <h2>Pero requerimos de un padre</h2>
        </Fragment>
    )
}

//Esto también es un fragmento pero no requiere importar Fragment
export const MyFragment2 = ()=>{
    return (
        <>
            <h1>Dos elementos</h1>
            <h2>Pero requerimos de un padre</h2>
            <h3>Sin importar Fragment</h3>
        </>
    )
}
