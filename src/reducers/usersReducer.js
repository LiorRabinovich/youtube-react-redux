const isLoggedLocalStorage = window.localStorage.getItem('isLogged');

const initState = {
    isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true') : false),
    users: {
        page: null,
        per_page: null,
        total: null,
        total_pages: null,
        data: [],
    },
    userActive: {
        id: null,
        first_name: null,
        last_name: null,
        avatar: null
    }
}

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case "LOGIN":
            window.localStorage.setItem('isLogged', action.payload);
            state = { ...state, isLogged: action.payload }
            break;
        case "SET_USERS":
            state = { ...state, users: action.payload }
            break;
        case "SET_USER_ACTIVE":
            state = { ...state, userActive: action.payload }
            break;
        default:
            break;
    }

    console.log('Users Reducers', state);
    return state;
}

export default usersReducer;