import React from "react"
import {NavLink} from "react-router-dom"

const Header = ({titulo,links}) => {

    return(
        <header>
            
            <NavLink to="/" exact>
                <h1>{titulo}</h1>
            </NavLink>

            <nav>
                {links.map((elemento,indice)=>{ 
                    /* return <a href={`/${elemento}`} key={indice}>{elemento}</a> */
                    /* return <a href={"/"+elemento} key={indice}>{elemento}</a> */
                    return <NavLink to={"/"+elemento} key={indice}>{elemento}</NavLink> 
                 })}
            </nav>
        </header>
    )
}

export default Header