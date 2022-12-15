import Qs from 'qs'
import axios from "axios"; 
import { getToken, removeToken } from '../utils/auth';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter()
const config = {
    baseURL: '/api/',
    timeout: 5000,
    headers: {
        "Token":getToken() || ''
    },
    // paramsSerializer:(params)=>{
    //     console.log(params);
    //     // return Qs.stringify(params,{arrayFormat:'brackets'})
    //     return params
    // }
    transformRequest: [(data, headers) => {
        if (data instanceof FormData) {
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
    let {data} = response
    // token 过期
    if(data.code == 401){
        ElMessage({
            type:'error',
            message:data.msg,
            onClose:()=>{
                removeToken()
                router.push('/login')
            }
        })
    }else if(data.code > 200){
        ElMessage({
            type:'error',
            message:data.msg
        })
    }
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

export const POST_FILES =(request) => {
    const form = new FormData()
    for (let i of request) {
        // TODO 处理多文件上传
        form.append('files',  i)
    }
    return instance.post('upload/files',form)
}

/**
 * 单文件上传
 * @param {*} url 
 * @param {*} request 
 * @returns 
 */
export const POST_FILE = (request) => { 
    const form = new FormData()
    form.append('file', request.file)
    return instance.post('upload/file', form)

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