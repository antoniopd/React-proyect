/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos del ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log(`DIDMOUNT: Justo al acabar el montaje del componente,
                     antes de renderizarlo`)
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`COMPONENTEUPDATE: Nos devuelve true o false,
                     comtrola si el componente debe o no actualizarse `)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;