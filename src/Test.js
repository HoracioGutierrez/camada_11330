import React from "react"

/* class Test extends React.Component {

    constructor(){
        super()
        //Este metodo me sirve si necesito iniciar state
        console.log("Soy lo primero que pasa en el componente")
    }

    componentDidMount(){
        //Este metodo me sirve para iniciar contadores, subscripciones o pedidos en general (efectos secundarios)
        console.log("Soy lo tercero que pasa en el componente y este ya esta en pantalla")
    }

    componentWillUnmount(){
        //Este metodo me sirve para deshacer timers y subscripciones iniciadas en componentDidMount
        console.log("Soy lo ultimo que pasa en el componente")
    }

    shouldComponentUpdate(){
        return false
    }

    render(){
        //Este metodo me sirve para dibujar el componente
        console.log("Soy lo segundo pasa en el componente")
        return(
            <>
            <p>Test</p>
            <p>{this.props.titulo}</p>
            </>
        )
    }
} */

const Test = () => {

    /* React.useEffect(()=>{
        console.log("Soy un efecto. Soy comparable con un componentDidUpdate")
    }) */

    /* React.useEffect(()=>{
        console.log("Soy un efecto. Soy comparable con un componentDidMount")
    },[]) */

    React.useEffect(()=>{
        
        const intervalo = setInterval(()=>{
            console.log("Tick")
        },1000)

        //Esta parte emula un componentWillUnmount
        return ()=>{
            clearInterval(intervalo)
        }

    },[])

    console.log("Estoy suelto. Soy comparable con un constructor / render")

    return(
        <p>Test</p>
    )
}


export default Test