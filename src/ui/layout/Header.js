import React from "react"
import {NavLink} from "react-router-dom"

const Header = ({titulo,links}) => {

    return(
        <header>
            
            <NavLink to="/" exact>
                <h1>{titulo}</h1>
            </NavLink>

            <nav>
{/*                 {links.map((elemento,indice)=>{ 
                    return <NavLink to={"/"+elemento} key={indice}>{elemento}</NavLink> 
                 })}
                 
 */}            
                <NavLink to="/category/1">Usuario 1</NavLink>
                <NavLink to="/category/2">Usuario 2</NavLink>
            </nav>
        </header>
    )
}

export default Header