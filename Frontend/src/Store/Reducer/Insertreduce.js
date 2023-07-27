
export const initialState = {
    data: {},
    loading: true
}



export function InsertAllReducer(state = initialState, action) {
    switch (action.type) {
        case "INSERT_DATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}