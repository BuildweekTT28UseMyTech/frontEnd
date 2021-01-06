import { axiosWithAuth } from '../Utils/axiosWithAuth'

export const LOGIN = 'login_action'
export const LOGOUT = 'logout_action'
export const REGISTER = 'register_action'



//Login and Logout 
export const login = (data) => (dispatch) => {
    dispatch ({ type: LOGIN, payload: data})
}