const initState = {
    isLogged: false
}

const usersReducer = (state = initState, action) => {
    console.log('Users Reducer');

    switch(action.type){
        case "LOGIN":
            state = {...state, isLogged: true}
        break;
        default:
        break;
    }

    return state;
}

export default usersReducer;