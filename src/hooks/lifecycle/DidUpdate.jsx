/**
 * Ejemplo de uso de método componentDidUpdate en componente clase
 * y uno de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos porps o cambio en su estado ')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos porps o cambio en su estado ')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

