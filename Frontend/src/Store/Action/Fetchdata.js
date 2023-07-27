import axios from 'axios'


//viewAll api
export function ViewAllData() {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/user/view`)
        const return_response = {
            type: "GET_ALLDATA",
            payload: response,
        };
        console.log("resss", response);
        dispatch(return_response);
    };
}