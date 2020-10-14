import * as types from '../constants';

export const handleLogin = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_SUBMIT_REQUEST,
        });
        return fetch('http://localhost:3000/users', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                const oldUser = json.filter(item => item.username === username && item.password === password)
                if (oldUser.length > 0) {
                    return oldUser;
                }
                alert('not found')
                throw new Error('не найдено');
            })
            .then(json => {
                if (!json[0].token) {
                    throw new Error('Token has not been provided')
                }

                localStorage.setItem('token', json[0].token);
                dispatch({
                    type: types.LOGIN_SUBMIT_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.LOGIN_SUBMIT_FAILURE,
                payload: reason
            }))
    }
}
export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT_SUBMIT_REQUEST
        });
        return fetch('http://localhost:3000/users', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(json => {
                // Remove JWT from localStorage
                localStorage.removeItem('token');

                // redirect to welcome in case of failure
                dispatch({
                    type: types.LOGOUT_SUBMIT_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.LOGOUT_SUBMIT_FAILURE,
                payload: reason,
            }));
    };
}


export const register = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: types.REGISTER_SUBMIT_REQUEST,
        });
        return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "token": Math.random(),
                "id": Math.random()
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
                if (!json.token) {
                    throw new Error('Token has not been provided')
                }
                localStorage.setItem('token', json.token);

                dispatch({
                    type: types.REGISTER_SUBMIT_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.REGISTER_SUBMIT_FAILURE,
                payload: reason
            }))
    }
}