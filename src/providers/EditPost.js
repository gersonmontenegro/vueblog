import FetchData from './FetchData';

export default class EditPost {
    Edit(data, callBack, url) {
        let f = new FetchData();
        f.DataRequest(data, url).then(callBack);
    }
    Login(data, callBack) {
        let f = new FetchData();
        f.Login(data).then(callBack);
    }
    Logout(callBack) {
        let f = new FetchData();
        f.UserRequest('logout').then(callBack);
    }
    GetUser(callBack) {
        let f = new FetchData();
        f.UserRequest('user').then(callBack);
    }
}