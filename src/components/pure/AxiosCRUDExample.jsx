import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login, getAllUsers, getAllPagedUsers, createUser, updateUserByID, deleteUserByID, getUserByID } from '../../services/axiosCRUDService';


const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Ivalid email format')
                .required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    );


    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'))
    }

    // CRUD Examples 
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error(`No users found`)
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error(`No users found in page ${page}`)
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not created')
                }                
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not found & no update done')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if (response.status === 204) {
                    alert(`User whit id: ${id} successfully deleted`)
                }else{
                    throw new Error('User not found & no delete done')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }



    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take ***
                initialValues={initialCredentials}
                // *** Yup validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event **
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >

                {/* We obtain props from Formik */}

                {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="firstName">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component={'div'} />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                        />

                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component={'div'} />
                            )
                        }

                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

            </Formik>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                    Get All Users with Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get All Users (Page 1) with Axios
                </button>
                <button onClick={() => obtainUserByID(1)}>
                    Get User 1
                </button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>
                    Cretate User
                </button>
                <button onClick={() => updateUser(1, 'morpheus', 'Developer')}>
                    Update User
                </button>
                <button onClick={() => deleteUser(1)}>
                    Delete User
                </button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
