export const getAllUsers = async () => {
    
    let response = await fetch('https://reqres.in/api/users');    
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);


    // We return the json
    return response.json()
}

export const getAllPagedUsers = async (page) => {
    
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);    
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);


    // We return the json
    return response.json()
}

export const getUserDetais = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);    
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);


    // We return the json
    return response.json()
}