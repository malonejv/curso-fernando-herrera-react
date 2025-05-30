//ARCHIVO 5
/*
Con Vite se deben instalar manualmente.
Para ello: `yarn add prop-types`

Definimos el tipo del parametro title:
Title1.propTypes = {
    title: PropTypes.string
}

Como definimos string si al enviar el parametro enviamos un número:
<Title1 title={123}></Title1>

Nos genera un warning en la consola del navegador.:
react-jsx-dev-runtime.development.js:87 Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Title1`, expected `string`.
--------------
De la misma manera, si no enviamos un valor:
<Title1 title></Title1>

Nos genera un warning:
Warning: Failed prop type: Invalid prop `title` of type `boolean` supplied to `Title1`, expected `string`.
--------------
Si lo configuramos como requerido:
Title1.propTypes = {
    title: PropTypes.string.isRequired
}

y no enviamos el parametro:
<Title1></Title1>

Nos genera un warning:
react-jsx-dev-runtime.development.js:87 Warning: Failed prop type: The prop `title` is marked as required in `Title1`, but its value is `undefined`.
*/
import PropTypes from 'prop-types'


//Normalmente se desectructura y se utilizan las propiedades requeridas
export const Title1 = ( {title, subtitle = 'Default subtitle', numbers} )=>{
    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <h2>{ subtitle }</h2>
            <p>
                <span>Number: {numbers}</span>
            </p>
        </>
    )
}

Title1.propTypes = {
    title: PropTypes.string.isRequired,
    numbers: PropTypes.number
}

Title1.defaultProps = {
    // title: 'Sin título',
    subtitle: 'Sin subtítulo',
    numbers: 0
}