const initState = {
    isLogged: false
}

const usersReducer = (state = initState, action) => {

    switch(action.type){
        case "LOGIN":
            state = {...state, isLogged: true}
        break;
        default:
        break;
    }

    console.log('Users Reducers', state);
    return state;
}

export default usersReducer;