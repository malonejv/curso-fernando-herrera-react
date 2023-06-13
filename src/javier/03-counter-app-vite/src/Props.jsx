//ARCHIVO 3
//Normamelnte no se usa de esta manera, sino como el siguiente ejemplo
export const Props = ( props )=>{
    console.log(props);
    return (
        <>
            <h1>{ props.title}</h1>
        </>
    )
}

//Normalmente se desectructura y se utilizan las propiedades requeridas
export const Title = ( {title, subtitle = 'Default subtitle', numbers} )=>{
    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <p>
                {numbers}
            </p>
        </>
    )
}
