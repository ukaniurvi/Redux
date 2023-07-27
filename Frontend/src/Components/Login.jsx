import React, { useState } from 'react'
import { LoginData } from '../Store/Action/LoginData'
import { connect } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'

const Login = ({ res, dispatch }) => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
    });


    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };


    //login api call
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(LoginData(data));
            navigate('/view')

        } catch (error) {
            console.log("err", error);
        }
    };


    // console.log("sdasdasd", res.data.data.token);

    return (
        <>
            <header>
                <h1 className='text-center my-5 '>Login Now</h1>
            </header>
            <div className='container' style={{ marginLeft: "30rem" }}>
                <div className='row'>
                    <form>
                        <div className="row m-3">
                            <label for="inputEmail3"
                                className="col-sm-1 col-form-label">
                                Email
                            </label>
                            <div className="col-lg-4 ">
                                <input type="email"
                                    className="form-control"
                                    id="inputEmail3"
                                    name='email'
                                    onChange={handleInput}
                                    value={data.email}
                                />
                            </div>
                        </div>
                        <div className="row m-3">
                            <label for="inputPassword3"
                                className="col-sm-1 col-form-label">
                                Password
                            </label>
                            <div className="col-lg-4 ">
                                <input type="password"
                                    className="form-control"
                                    id="inputPassword3"
                                    name='password'
                                    onChange={handleInput}
                                    value={data.password}

                                />
                            </div>
                        </div>
                        <div className='mt-5 w-75 ' style={{ marginLeft: "15rem" }}>
                            <button type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Login Now
                            </button>
                            <NavLink to="/form" className="ms-5">Create an account?</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



const mapStateToProps = (state) => ({
    res: state.LoginData,
})


export default connect(mapStateToProps)(Login)