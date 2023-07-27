
export const initialState = {
    data: {},
    loading: true
}



export function DeleteDataReducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_ALLDATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}