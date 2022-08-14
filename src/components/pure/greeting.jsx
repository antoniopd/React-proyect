import React, { Component } from 'react';

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 29,
        }
       
    }

    render() {
        return (
            <div>
                <h1>
                   Hola --  { this.props.name } CaraCola  !!
                </h1>
                <h2>
                    tu edad es de { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevStat) =>(
            {
                age: prevStat.age +1
            }
        )) 
    }
}


export default Greeting;
