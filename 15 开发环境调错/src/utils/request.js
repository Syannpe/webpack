/**
 * @version v1.0
 * @ClassNmae: request
 * @Description: desc
 * @Author: SYANNPE
 */

import axios from "axios"

axios.defaults.baseURL = "http://geek.itheima.net"

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    token && (config.headers.Authorization = `Bearer ${token}`)
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    const result = response.data;
    return result;
}, function (error) {
    console.dir(error)

    if (error?.response?.status === 401) {
        alert("身份验证失败，请重新登录")
        localStorage.clear();
        location.href = "../login/index.html"
    }
    return Promise.reject(error);
})

export default axios;