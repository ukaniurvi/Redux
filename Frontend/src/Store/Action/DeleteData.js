import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//viewAll api
export function DeleteData(id) {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:8000/user/delete/${id}`)
            const return_response = {
                type: "DELETE_ALLDATA",
                payload: response,
            };
            console.log("resss---", response);
            dispatch(return_response);
            if (response && response.status === 200) {
                toast.success('Data Delete successfully');
            }
            return response;
        } catch (error) {
            console.log("errr", error);
            throw error;
        }
    };
}