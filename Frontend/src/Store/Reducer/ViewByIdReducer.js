
export const initialState = {
    data: {},
    loading: true
}



export function ViewByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "VIEWBYID_DATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}