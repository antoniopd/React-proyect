import axios from "axios";

/**
 * Login method to ReqRes endpoint
 * @param { string } email 
 * @param { string } password 
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    // Return the response whit a Promise
    return axios.post('https://reqres.in/api/login', body)
}

// Todo Obtain All Users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

// Todo Obtain All paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

// Todo Obtain User by ID
export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

// Todo Create User
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }
     // Return the response whit a Promise
     return axios.post('https://reqres.in/api/users', body)
}

//  Todo Update User
export const updateUserByID = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }
     // Return the response whit a Promise
     return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// Todo Delete User
export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}