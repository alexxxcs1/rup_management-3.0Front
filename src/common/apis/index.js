import axios from "axios";
import { hashHistory } from "react-router";

import FrontstageApi from "./FrontstageApi";
import BackstageApi from "./BackstageApi";
import CustomApi from './CustomApi'

const localhost = "192.168.1.11";
const onlinehost = "client.rup-china.com";
const hosturl = onlinehost;

//后台接口apiurl
const hostClient = "http://" + hosturl + "/jiugongge/index.php/index/";

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
    baseURL: hostClient,
    timeout: 5000,
    // withCredentials: true,
    headers: {
        // responseType: 'JSON',
        // 'Content-Type': 'application/json'
    }
});
// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxinstance.interceptors.request.use(
    config => {
        // TODO
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 请求响应拦截器
ajaxinstance.interceptors.response.use(
    response => {
        // TODO
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);
//

//前端展示接口apiurl
const host = "http://" + hosturl + "/jiugongge/index.php/mobile/";
// 实例化 ajax请求对象
const ajaxforClient = axios.create({
    baseURL: host,
    timeout: 5000,
    // withCredentials: true,
    headers: {
        // responseType: 'JSON',
        // 'Content-Type': 'application/json'
    }
});

// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxforClient.interceptors.request.use(
    config => {
        // TODO
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 请求响应拦截器
ajaxforClient.interceptors.response.use(
    response => {
        // TODO
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

//自定义接口
const hostCustom = "";
// 实例化 ajax请求对象
const ajaxforCustom = axios.create({
    baseURL: hostCustom,
    timeout: 5000,
    // withCredentials: true,
    headers: {
        // responseType: 'JSON',
        // 'Content-Type': 'application/json'
    }
});

// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxforCustom.interceptors.request.use(
    config => {
        // TODO
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 请求响应拦截器
ajaxforCustom.interceptors.response.use(
    response => {
        // TODO
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
    //后台接口封装
    ...BackstageApi(ajaxinstance),

    //前端展示接口封装
    ...FrontstageApi(ajaxforClient),

    //自定义接口封装
    ...CustomApi(ajaxforCustom),
};

export default API;
