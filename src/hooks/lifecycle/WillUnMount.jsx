/**
 * Ejemplo de uso del método componentWillUnMount para componente clase
 * Ejemplo de uso de hooks para componente funcional(Cuando el componenete va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        // aquí no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}
