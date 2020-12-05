import React from "react"

/* const Header = ({titulo,subtitulo,edad,propSinValor}) => {
    console.log(propSinValor)
    //const titulo = props.titulo
    //const subtitulo = props.subtitulo
    //const edad = props.edad
    //const {titulo:titulo,subtitulo:subtitulo,edad:edad} = props
    //const {titulo,subtitulo,edad} = props 

    return(
        <header>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <p>Mi edad es {edad}</p>
        </header>
    )
} */

/* function Header({titulo,subtitulo,edad,propSinValor}){
    console.log(propSinValor)

    return(
        <header>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <p>Mi edad es {edad}</p>
        </header>
    )
} */

class Header extends React.Component {

    /**Metodo de clase */
    constructor(){
        super();
        this.state = {
            subtitulo : "Aprendo a usar el state"
        }
    }


    render(){

        const {titulo,edad,propSinValor} = this.props
        const {subtitulo} = this.state

        console.log(propSinValor)

        return(
            <header>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <p>Mi edad es {edad}</p>
            </header>
        )
    }
}

export default Header