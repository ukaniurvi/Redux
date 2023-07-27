
export const initialState = {
    data: {},
    loading: true
}



export function LoginDataReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_DATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}