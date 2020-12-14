import React from "react"
import Header from "./Header"
import Footer from "./Footer"

/* class App extends React.Component {

    constructor(){
        super()
        this.state = {
            titulo : "Mi Aplicacion de React",
            subtitulo : "Mi Subtitulo"
        }
    }

    cambiarTitulo = () => {
        this.setState({ titulo : "Nuevo Titulo" })
    }

    render(){
        return(
            <>
                <Header titulo={this.state.titulo}/>
                <button onClick={ this.cambiarTitulo }>Cambiar Titulo</button>
                <Footer/>
            </>
        )
    }
}
 */
const App = () => {

    /* const valor = React.useState("test")
    const titulo = valor[0]
    const setTitulo = valor[1] */

    //Hook
    const [titulo,setTitulo] = React.useState("Mi Aplicacion de React")
    //const [subtitulo,setSubtitulo] = React.useState("Mi Subtitulo")

    const cambiarTitulo = () => {
        setTitulo("Nuevo Titulo")
    }

    return(
        <>
            <Header titulo={titulo}/>
            <button onClick={ cambiarTitulo }>Cambiar Titulo</button>
            <Footer titulo={titulo}/>
        </>
    )
}

export default App