export const loginAction = (email,password) => {
    console.log('loginAction', email,password);
    return {
        type: "LOGIN",
        payload: true
    }
}