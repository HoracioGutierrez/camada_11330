import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
    return(
        <>
            <Header 
            titulo="Mi Aplicacion de React" 
            subtitulo="Aprendo a pasar props"
            edad={31}
            propSinValor
            />
            <Footer/>
        </>
    )
}

export default App