import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ViewById } from '../Store/Action/ViewById'
import { UpdateData } from '../Store/Action/Update'


const Update = ({ viewByIdRes, dispatch }) => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [data, setData] = useState({})


    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };


    //update api call
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateData(id, data));
        navigate('/view')
    };

    //view by id api call
    useEffect(() => {
        dispatch(ViewById(id))
    }, [id])


    useEffect(() => {
        if (viewByIdRes?.data && viewByIdRes?.data?.data?.data) {
            setData(viewByIdRes?.data?.data?.data)
        }
    }, [viewByIdRes])


    // console.log("ress", res?.data?.data?.data);

    return (
        <>
            <header>
                <h1 className='text-center my-5 '>Update Details</h1>
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
                                    value={data.name || ''}
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
                                    value={data.email || ''}
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
                                    value={data.phno || ''}
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
                                        checked={data.gender === "male" || ''}
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
                                        checked={data.gender === "female" || ''}
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
                                        checked={data.gender === "other" || ''}
                                    />
                                    <label className="form-check-label"
                                        for="exampleRadios1">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-5 w-75 align-items-center'
                            style={{ marginLeft: "5rem" }} >
                            <button type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Update
                                {/* <ToastContainer /> */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    viewByIdRes: state.ViewById,
    updateDataRes: state.UpdateData
})


export default connect(mapStateToProps)(Update)