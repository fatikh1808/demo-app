import * as types from '../constants';

export const getAccountInfo = () => {
    return (dispatch) => {
        dispatch({
            type: types.GET_ACCOUNT_INFO_REQUEST,
        });
        return fetch('http://localhost:3000/infos', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.GET_ACCOUNT_INFO_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.GET_ACCOUNT_INFO_FAILURE,
                payload: reason
            }))
    }
}

