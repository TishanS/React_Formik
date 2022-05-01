import React from "react";
import { Formik } from 'formik';

class FormikComponent extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    initialValue = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        courses: 'react'
    }
   

    validate = (FormData) => {
    
        let errors = {};
        if(FormData.firstName === '') errors.firstName="FirstName is required";
        if(FormData.lastName === '') errors.lastName="LastName is required" ;
        if(FormData.email === '') errors.email="Email is required" ;
        if(FormData.gender === '') errors.gender="Gender is required" ; 
        return errors;
    }

    handleSubmit = (FormData)=>{
        console.log(FormData);
    }

    render() {
        return (
            <>  
            <div style={{margin: '10px', border: 'solid 1px black', width: '49%', borderRadius: '5px', padding: '10px', backgroundColor: "lightblue"}}>

           
                <h3> Formik component</h3>


                <Formik
                    initialValues={this.initialValue}  //
                    validate={(FormData)=> this.validate(FormData)}
                    onSubmit={(FormData)=> this.handleSubmit(FormData)}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        resetForm
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label> First Name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color:'red'}}>{touched.firstName && errors.firstName}</span>
                            </div>
                            <br />
                            <div>
                                <label> Last Name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                /> 
                                <span style={{ color:'red'}}>{touched.lastName && errors.lastName}</span>
                            </div>
                            <br />
                            <div>
                                <label> Email: </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color:'red'}}>{touched.email && errors.email}</span>
                            </div>
                            <br />
                            <div>
                                <label> Gender: </label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />{' '}
                                Female
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />{' '}
                                Male
                                <br />  
                            </div>
                            <br />
                            <div>
                                <label> Courses: </label>
                                <select
                                    name="courses"
                                    value={values.courses}
                                    onChange={handleChange}
                                >
                                    <option value="react"> React </option>
                                    <option value="node"> Node </option>
                                    <option value="mongo"> Mongo </option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <button type="submit" disabled={isSubmitting} >
                                    Submit
                                </button>
                                &nbsp;
                                <button type="button" onClick={resetForm}> Reset </button>&nbsp;   
                            </div>
                        </form>
                    )}
                </Formik>
                </div>
            </>

        )
    }
}

export default FormikComponent;