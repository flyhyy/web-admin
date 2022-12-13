import Qs from 'qs'
import axios from "axios";  
import { useLoginInfoStore } from '../stores/login'


let Token = useLoginInfoStore.LoginData?.token || ''
const config = {
    baseURL: '/api/',
    timeout: 5000,
    headers: {
        "Token": Token
    },
    // paramsSerializer:(params)=>{
    //     console.log(params);
    //     // return Qs.stringify(params,{arrayFormat:'brackets'})
    //     return params
    // }
    transformRequest: [(data, headers) => { 
        if(data instanceof FormData){
            return data
        } 
        return Qs.stringify(data, { arrayFormat: 'brackets' })
    }]
}


// 重新配置 axios
const instance = axios.create(config)
// 添加请求拦截器
instance.interceptors.request.use((config) => {
    console.log('添加请求拦截器', config); 
    return config
}, (error) => {
    return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use((response) => {
    console.log('添加响应拦截器', response); 
    return response.data.body

}, (error) => {
    return Promise.reject(error)

})


// Restful API 风格
export const GET = (url) => {
    return instance.get(url)
}

export const POST = (url, request) => {
    return instance.post(url, request)
}

export const POST_FILE=(url,request)=>{   
    const form = new FormData()  
    form.append('file',request.file)  
    return instance.post(url,form)

}

export const PATCH = (url) => {
    return instance.patch(url)
}

export const DELETE = (url, request) => {
    return instance.delete(url)
}

export const PUT = (url) => {
    return instance.put(url)
}