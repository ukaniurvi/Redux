import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import {
    InsertData
} from '../Store/Action/Insertdata'

const Form = ({ res, dispatch }) => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        name: '',
        email: '',
        phno: '',
        gender: '',
        password: '',
    });


    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };


    //insert api call
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(InsertData(data));
            navigate('/view');
            // Handle successful response if needed
        } catch (error) {
            console.log("errrr", error);
            // Handle the error, show toast message, etc.
        }
    };




    return (
        <>
            <header>
                <h1 className='text-center my-5 '>Contact Us</h1>
            </header>
            <div className='container' style={{ marginLeft: "20rem" }}>
                <div className='row'>
                    <form>
                        <div className="row m-3">
                            <label for="inputEmail3"
                                className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-lg-6 ">
                                <input type="text"
                                    className="form-control"
                                    id="inputEmail3"
                                    name='name'
                                    value={data.name}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                        <div className="row m-3">
                            <label for="inputEmail3"
                                className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-lg-6 ">
                                <input type="email"
                                    className="form-control"
                                    id="inputEmail3"
                                    name='email'
                                    value={data.email}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="row m-3">
                            <label for="inputEmail3"
                                className="col-sm-2 col-form-label">
                                Mobile
                            </label>
                            <div className="col-lg-6 ">
                                <input type="number"
                                    className="form-control"
                                    id="inputEmail3"
                                    name='phno'
                                    value={data.phno}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                        <div className="row m-3">
                            <label for="inputEmail3"
                                className="col-sm-2 col-form-label">
                                Gender
                            </label>
                            <div className="col-lg-6 ">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        id="exampleRadios1"
                                        name='gender'
                                        value="male"
                                        onChange={handleInput}
                                        checked={data.gender === "male"}
                                    />
                                    <label className="form-check-label"
                                        for="exampleRadios1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check  form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        id="exampleRadios1"
                                        name='gender'
                                        value="female"
                                        onChange={handleInput}
                                        checked={data.gender === "female"}
                                    />
                                    <label className="form-check-label"
                                        for="exampleRadios1">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check  form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        id="exampleRadios1"
                                        name='gender'
                                        value="other"
                                        onChange={handleInput}
                                        checked={data.gender === "other"}
                                    />
                                    <label className="form-check-label"
                                        for="exampleRadios1">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row m-3">
                            <label for="inputPassword3"
                                className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-lg-6 ">
                                <input type="password"
                                    className="form-control"
                                    id="inputPassword3"
                                    name='password'
                                    onChange={handleInput}
                                    value={data.password}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-5 w-75 align-items-center'
                            style={{ marginLeft: "5rem" }} >
                            <button type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Register

                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.InsertData
})

export default connect(mapStateToProps)(Form);