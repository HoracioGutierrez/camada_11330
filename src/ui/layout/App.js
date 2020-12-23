import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
//Traeme lo que haya exportado como default y ponelo en la variable BrowserRouter
//import BrowserRouter from "react-router-dom"

//Solamente traeme del modulo react-router-dom aquella variable exportada NO DEFAULT que se llame BrowserRouter
import {BrowserRouter} from "react-router-dom"



const App = () => {

    const [titulo,setTitulo] = React.useState("Mi Aplicacion de React")
    const [links,setLinks] = React.useState(["productos","cuenta"])


    return(
        <BrowserRouter>
            <Header titulo={titulo} links={links}/>
            <Main/>
            <Footer titulo={titulo} links={links}/>
        </BrowserRouter>
    )
}


export default App
