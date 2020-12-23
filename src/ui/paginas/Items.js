import React from 'react'
import {useParams} from "react-router-dom"

const Items = () => {

    const parametros_de_url = useParams()

    console.log(parametros_de_url.id)

    return (
        <div>
           items 
        </div>
    )
}

export default Items
