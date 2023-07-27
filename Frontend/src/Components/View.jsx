import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { ViewAllData } from '../Store/Action/Fetchdata';
import { DeleteData } from '../Store/Action/DeleteData'


const View = ({ ViewAllDatares, DeleteDatares, dispatch }) => {


    //delete api call
    const handleDelete = async (id) => {
        await dispatch(DeleteData(id))
        dispatch(ViewAllData());
        // window.location.reload();
    }

    //view all data api call
    useEffect(() => {
        dispatch(ViewAllData())
    }, [])

    // console.log('ress', res?.data?.data?.data);
    // console.log("resss", ViewAllDatares);
    // console.log("deeee", DeleteDatares);


    let tableData = null;

    if (ViewAllDatares && ViewAllDatares.data && ViewAllDatares.data.data && ViewAllDatares.data.data.data.length > 0) {
        tableData = [];
        ViewAllDatares.data.data.data.forEach((value, index) => {
            tableData.push(
                <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.gender}</td>
                    <td>{value.phno}</td>
                    <td className=''>
                        <NavLink to={`/update/${value._id}`}>
                            <i className="fa-solid fa-pen-to-square"> </i>
                        </NavLink>
                        &nbsp;&nbsp;
                        <i className="fa-solid fa-trash" style={{ color: "red" }}
                            onClick={() => { handleDelete(value._id) }}
                        >
                        </i>
                        {/* <ToastContainer /> */}
                    </td>
                </tr>
            );
        });
    } else {
        tableData = (
            <tr>
                <td colSpan="6" className='text-center'>
                    <h3>Data not available</h3>
                </td>
            </tr>
        );
    }



    return (
        <>
            <div className='p-5'>
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div >
        </>
    )
}

const mapStateToProps = (state) => ({
    ViewAllDatares: state.ViewAllData,
    DeleteDatares: state.DeleteData
});


export default connect(mapStateToProps)(View);