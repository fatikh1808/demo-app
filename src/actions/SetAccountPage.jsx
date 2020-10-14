import * as types from "../constants";

export const setAccountInfo = (info, userId) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_ACCOUNT_INFO_REQUEST,
        });
        return fetch(`http://localhost:3000/infos`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "name": info.name,
                "lastName": info.lastName,
                "dateOfBirth": info.dateOfBirth,
                "gender": info.gender,
                "id": userId,
                "userId": userId
            }),
        })
            .then(response => response.json())
            .then(json => {
                if (json) {
                    return json;
                }

                throw new Error('не найдено')

            })
            .then(json => {
                dispatch({
                    type: types.SET_ACCOUNT_INFO_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.SET_ACCOUNT_INFO_FAILURE,
                payload: reason
            }))
    }
}

export const changeAccountInfo = (info, userId) => {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_ACCOUNT_INFO_REQUEST,
        });
        return fetch(`http://localhost:3000/infos/${userId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "name": info.name,
                "lastName": info.lastName,
                "dateOfBirth": info.dateOfBirth,
                "gender": info.gender,
                "id": userId,
                "userId": userId
            }),
        })
            .then(response => response.json())
            .then(json => {
                if (json) {
                    return json;
                }
                throw new Error('не найдено')
            })
            .then(json => {
                dispatch({
                    type: types.CHANGE_ACCOUNT_INFO_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.CHANGE_ACCOUNT_INFO_FAILURE,
                payload: reason
            }))
    }
}
