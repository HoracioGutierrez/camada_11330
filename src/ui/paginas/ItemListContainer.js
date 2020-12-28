import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [posteos,setPosteos] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        if(id){
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res=>res.json())
            .then(res=>setPosteos(res))
        }else{
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res=>res.json())
            .then(res=>setPosteos(res))
        }
    },[id])

    return (
        <div>
            <p>Item List Container</p>
            {posteos.map(post=>{
                return(
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer
