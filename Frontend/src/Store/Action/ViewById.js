import axios from 'axios'


//viewAll api
export function ViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/user/viewById/${id}`)
        const return_response = {
            type: "VIEWBYID_DATA",
            payload: response,
        };
        console.log("resss---", response);
        dispatch(return_response);
    };
}