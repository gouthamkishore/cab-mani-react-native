import axios from "axios";
window.axios = axios;
const base = process.env.REACT_APP_BASE_URL;
window.base = base;
const defaultText = "Getting Data Please wait";
export default {
    handelAlert: (func, message) => {
        return new Promise((res, rej) => {
            let loadObj = loader(message || defaultText);
            let customRej = (...arg) => { loadObj.close(), rej(...arg) };
            let customResolve = (...arg) => { loadObj.close(), res(...arg) };
            func(customResolve, customRej, loadObj);
        })
    }
}