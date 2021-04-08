/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2020-11-02 17:03:41
 */
import axios0 from 'axios'
import Qs from 'qs'
import router from '../router'
import {
    Message
} from 'ant-design-vue';

//let ContentType = 'application/x-www-form-urlencoded;charset=UTF-8'
const axios = axios0.create({
    headers: {
        'Accept': '*/*',
        'Content-Type': "application/json",
        
    },
    'timeout': 150000
});


axios.interceptors.request.use(function (request) {
    if (request.data && request.headers['Content-Type'] === "application/x-www-form-urlencoded;charset=UTF-8") request.data = Qs.stringify(request.data);
    let jwt = localStorage.getItem("jwt")
    if (jwt) {
        request.headers['Authorization'] = "Bearer " + jwt
    }
    return request;
});

axios.interceptors.response.use(function (response) {
    let {
        data,
        status
    } = response;
    console.log('response', response);
    if (status === 200 || status === 201) {
        if (data.ret === 0 || data.code === 0) {
            return data.data
        } else if (data.ret === 403) {
            router.push({ path: "/403" })
            return Promise.reject(data)
        } else {
            if (response.config.respAll) {
                return Promise.reject(data)
            }
            Message.error(data.msg)
            return Promise.reject(data)
        }
    } else {
        Message.error(data.msg)
        return Promise.reject(data)
    }
}, function (error) {
    Message.error("系统错误")
    if (error.response) {
        switch (error.response.status) {
            case 401:
                if (window === window.top) {
                    router.push('/login')
                    return
                }
                // 返回 401 清除token信息并跳转到登录页面
                localStorage.removeItem("jwt")
                window.parent.postMessage(
                    {
                        cmd: "doLogin",
                        params: {
                            path: "/users"
                        }
                    },
                    "*"
                )
                break
        }
    }
    return Promise.reject(error)
})

export default axios
