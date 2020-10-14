import * as types from '../constants';

const initialState = {
    info: []
}

export default function AccountPageReducer(state = initialState,action) {
    switch (action.type) {

        case types.GET_ACCOUNT_INFO_SUCCESS:
            return {
                ...state,
                info: action.payload
            };
        default:
            return state
    }
}