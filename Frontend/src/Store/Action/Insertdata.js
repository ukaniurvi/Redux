import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//viewAll api
export function InsertData(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:8000/user/add`, data);
            const return_response = {
                type: "INSERT_DATA",
                payload: response,
            };
            console.log("resss", response);
            dispatch(return_response);
            return response;
        } catch (error) {
            console.log("errr", error);
            if (error.response && error.response.status === 406) {
                toast.error('Email already exists!!');
            }
            throw error;
        }
    };
}