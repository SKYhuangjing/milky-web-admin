import axios from 'axios'
import Qs from 'qs'
import {
    message
} from 'ant-design-vue';

import router from '../router'

axios.defaults.adapter = require('axios/lib/adapters/http');
const _axios = axios.create({
    headers: {
        'Accept': '*/*',
        'Content-Type': "application/json"
    },
    'timeout': 15000
});

_axios.interceptors.request.use(function (request) {

    // if (request.data && request.headers['Content-Type'] === "application/x-www-form-urlencoded;charset=UTF-8") request.data = Qs.stringify(request.data);
    let jwt = localStorage.getItem("jwt")


    if (jwt) {
        request.headers['Authorization'] = "Bearer " + jwt
    }
    let url = request.url
    // get参数编码
    if (request.method === 'get' && request.params) {
        url += '?'
        let keys = Object.keys(request.params)
        for (let key of keys) {
            url += `${key}=${encodeURIComponent(request.params[key])}&`
        }
        url = url.substring(0, url.length - 1)
        request.params = {}
    }
    request.url = url
    return request;
});

_axios.interceptors.response.use(function (response) {
    let {
        data,
        status
    } = response;
    if (status === 200) {
        if (data.ret === 0) {
            return data.data
        } else if (data.ret === 403) {
            router.push({ path: "/403" })
            return Promise.reject(data)
        } else {
            if (response.config.respAll) {
                return Promise.reject(data)
            }
            message.error(data.msg)
            return Promise.reject(data)
        }
    } else {
        message.error(data.msg)
        return Promise.reject(data)
    }
}, function (error) {
    //message.error("系统错误")
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                localStorage.removeItem("jwt")
                if (window !== window.top) {
                    window.parent.postMessage(
                        {
                            cmd: "doLogin",
                            params: {
                                path: "/users"
                            }
                        },
                        "*"
                    )
                } else {
                    router.push({ path: "/login" })
                }

                break
        }
    }
    return Promise.reject(error)
})

export default _axios
