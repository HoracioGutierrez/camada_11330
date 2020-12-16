import React from "react"

const Header = ({titulo,links}) => {

    return(
        <header>
            <h1>{titulo}</h1>
            <nav>
                {links.map((elemento,indice)=>{ 
                    return <a href="#" key={indice}>{elemento}</a>
                 })}
            </nav>
        </header>
    )
}

export default Header