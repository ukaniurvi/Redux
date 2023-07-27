import axios from 'axios'


//viewAll api
export function UpdateData(id, data) {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        const response = await axios.put(`http://localhost:8000/user/update/${id}`, data, {
            headers: {
                Authorization: token
            }
        })
        const return_response = {
            type: "UPDATE_DATA",
            payload: response,
        };
        console.log("resss---", response);
        dispatch(return_response);
    };
}