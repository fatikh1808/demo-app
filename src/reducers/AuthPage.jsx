import * as types from '../constants';

const token = localStorage.getItem('token')

const initialState = {
    isAuthenticated: !!token,
    userId: null,
    token,
}

export default function authPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: action.payload[0].id,
                token: action.payload[0].token
            };
       case types.REGISTER_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: action.payload.id,
                token: action.payload.token
            };
        case types.LOGIN_SUBMIT_FAILURE:
        case types.REGISTER_SUBMIT_FAILURE:
        case types.LOGOUT_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                userId: null,
                token: ''
            };

        default:
            return state
    }
}