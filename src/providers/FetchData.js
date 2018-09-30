import axios from 'axios'

export default class FetchData {
    baseURL = 'http://35.182.188.235/vueblogservices/public/api/auth/';

    Login(data) {
        axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        return axios.post(this.baseURL + 'login', data);
    }

    DataRequest(data, route) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        return axios.post(this.baseURL + route, data);
    }
}
