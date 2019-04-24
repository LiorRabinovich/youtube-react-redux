const initState = {
    siteName: 'Youtube React Redux'
}

const sitesReducer = (state = initState, action) => {
    console.log('Sites Reducer');

    switch(action.type){
        case "CHANGE_SITE_NAME":
            console.log('CHANGE_SITE_NAME');
            state = {...state, siteName: action.payload}
        break;
        default:
        break;
    }

    return state;
}

export default sitesReducer;