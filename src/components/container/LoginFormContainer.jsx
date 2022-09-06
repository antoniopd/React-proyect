import React from 'react'
import { connect } from 'react-redux'
import Loginform from '../pure/LoginForm'
import { httpRequest } from '../../store/actions/asyncActions'


const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email: email,
                password: password
            }

            const url = 'https://reqres.in/api/login'

            dispach(httpRequest('post',url,data))
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(Loginform)

export default LoginFormContainer;