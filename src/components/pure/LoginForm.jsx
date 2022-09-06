import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Ivalid email format')
            .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
    }
);


const Loginform = ({loged, fetching, onLogin}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }



    return (
    
            
            <Formik
                // *** Initial values that the form will take ***
                initialValues={initialCredentials}
                // *** Yup validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event **
                onSubmit={async (values) => {
                   onLogin(values.email, values.password)
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
                        {fetching ? (<p>LOADING...</p>) : null}
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
    );
};

Loginform.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default Loginform;
