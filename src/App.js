import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Test from "./Test"

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
    const [visible,setVisible] = React.useState(true)
    const [links,setLinks] = React.useState(["home","productos","mi cuenta"])
    //const [subtitulo,setSubtitulo] = React.useState("Mi Subtitulo")

    const cambiarTitulo = () => {
        setTitulo("Nuevo Titulo")
    }

    const toggleTest = () => {
        setVisible(!visible)
    }

    //console.log(links)

    return(
        <>
            <Header titulo={titulo} links={links}/>
            <button onClick={ cambiarTitulo }>Cambiar Titulo</button>
            <button onClick={ toggleTest }>mostrar el componente test</button>
            {/* visible ? <Test titulo={titulo} /> : null */}
            <Footer titulo={titulo}/>
        </>
    )
}

export default App