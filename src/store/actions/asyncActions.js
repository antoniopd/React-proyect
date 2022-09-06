export const API_CALL_REQUEST = 'API_CALL_REQUEST';// Watcheer Saga Listen
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';// Dispached by Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';// Dispached by Worker Saga



export const login = (email, password) => {

    return{
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            okAction: API_CALL_SUCCESS,
            failure: API_CALL_FAILURE
        }
    }
}

/**
 * Generic HttpRequest Action dispatcher
 */

export const httpRequest = (method, url, data) => {
    return{
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            okAction: API_CALL_SUCCESS,
            failure: API_CALL_FAILURE
        }
    }

}