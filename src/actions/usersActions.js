export const loginAction = (email, password) => {
    return async (dispatch) => {
        const body = {
            email,
            password
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }

        fetch('https://reqres.in/api/login', options).then(function (response) {
            return response.json();
        }).then(function (data) {
            const isLogged = (typeof data.token !== 'undefined' && data.token !== '');

            console.log(data);

            return dispatch({
                type: "LOGIN",
                payload: isLogged
            })

        });
    }
}