
export const initialState = {
    data: {},
    loading: true
}



export function FetchAllReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLDATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}