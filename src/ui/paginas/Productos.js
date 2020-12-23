import React , {useEffect,useState} from 'react'
import {NavLink} from "react-router-dom"


const Productos = () => {

    const [categorias,setCategorias] = useState([])

    /* 
    useEffect(()=>{ 
        //Aca voy a hacer el pedido
        let mock_pedido = new Promise((res,rej)=>{
            setTimeout(()=>{ res("Salio bien!") },3000)
        })

        mock_pedido
        .then(res=>{ 
            console.log(res)
            setResultado(res)
         })

     }) 
     */

    useEffect(()=>{
        //Hago un pedido una sola vez al comienzo del montado del componente y no cada vez que se renderiza
        fetch("https://api.mercadolibre.com/sites/MLA/categories")
        .then((resultado)=>{ 
            return resultado.json() 
        })
        .then((resultado)=>{ 
            setCategorias(resultado) 
        })

    },[])

    return (
        <div id="categorias">
            Productos
            { categorias.length === 0 ? "No hay categorias" : null }
            { categorias.length > 0 ? 
                categorias.map((categoria)=>{
                    return <NavLink to={"/categorias/"+categoria.id} key={categoria.id}>{categoria.name}</NavLink>
                })
             : null}
        </div>
    )
}

export default Productos
