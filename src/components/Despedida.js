import React, { Component }from 'react'
import './styles.css'



export default class despedida extends Component{

    render(){

        return ( 
            <div className="principal">
                
                <h3>BYE BYE!!!</h3>
                <h2> { this.props.nombre } </h2>
                
            </div>
        );


    }


}