import React from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Productos from "../paginas/Productos"
import Cuenta from "../paginas/Cuenta"
import Items from '../paginas/Items'
import ItemListContainer from '../paginas/ItemListContainer'


const Main = () => {
    return (
        <main>

            <Switch>

                <Route path="/" exact>
                    <ItemListContainer/>
                </Route>

                <Route path="/category/:id" exact>
                    <ItemListContainer/>
                </Route>


                {/* <Route path="/" exact >
                    <Home/>
                </Route>
                
                <Route path="/productos">
                    <Productos/>
                </Route>

                <Route path="/cuenta">
                    <Cuenta/>
                </Route>
                
                <Route path="/categorias/:id">
                    <Items/>
                </Route> */}

            </Switch>

        </main>
    )
}

export default Main
