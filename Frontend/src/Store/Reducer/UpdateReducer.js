
export const initialState = {
    data: {},
    loading: true
}



export function UpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_DATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}