import React, { Component } from 'react'
import  './styles.css'


export default class Saludo extends Component{

    constructor(){
        super();

        this.state = {
            saludo : "HOLA "
        }

        

        this.inicializar();



    }

    

  

    inicializar(){
        console.log("INICIALIZAR");
    }

    saludar = () => {
        this.setState( { saludo: this.state.saludo + "HOLA " });
    }

   



    render(){

        return (
            <div className="principal">
            
            <h1> {this.state.saludo} </h1>
            <h1> {this.RAY} </h1>
            <button className="btn btn-info" onClick={this.saludar}> HELLO MUNDO </button>
            
            </div>
        )
    }


}