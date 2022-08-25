import React, { useState } from "react";

function random(min, max) {
    return Math.floor(Math.random() * 256);
}

let red = random();
let green = random();
let blue = random();

// ? Estilo para el color del cuadrado
const cuadradoStyle = {
    backgroundColor: `rgb(${50},${green},${10})`,
    width: '255px',
    height: '255px'
};

const cuadradoStyle2 = {
    backgroundColor: `rgb(${red},${25},${blue})`,
    width: '255px',
    height: '255px'
}


const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <div style={propStyle} onClick={() => {
            loginAction();
            window.location.reload();
        }}></div>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <div style={propStyle} onClick={() => {
            logoutAction();
            window.location.reload();
        }}></div>
    )
}

const Cuadrado = () => {

    const [cuHover, setCuHover] = useState(false);

    const loginAction = () => {
        setCuHover(true)
    }
    const logoutAction = () => {
        setCuHover(false)
    }

    let optionalButton;

    if (cuHover) {
        optionalButton = <LogoutButton propStyle={cuadradoStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={cuadradoStyle2} loginAction={loginAction}></LoginButton>
    }

    return (
        <div>
            {optionalButton}
            {/* <LoginButton propStyle={cuadradoStyle} onClick={cuadradoStyle} onMouseOver={cuadradoStyle} loginAction={loginAction}></LoginButton> */}
        </div>
    );
};

export default Cuadrado;
