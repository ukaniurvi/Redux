
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//login api
export function LoginData(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:8000/user/login`, data)
            const return_response = {
                type: "LOGIN_DATA",
                payload: response,
            };
            const token = response.data?.data?.token
            localStorage.setItem('token', token);
            console.log("resss", response);
            dispatch(return_response);
            return response;
        } catch (error) {
            console.log("errr", error);
            if (error.response && error.response.status === 404) {
                toast.error("Data is not exists")
            }
            throw error;
        }

    };
}