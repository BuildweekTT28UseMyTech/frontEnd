import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create ({
        baseURL: 'https://rheact-usemytech.herokuapp.com/api/',
        headers: {
            authorization: token
        }
    })
}