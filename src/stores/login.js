import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { setToken } from "../utils/auth";
import {LoginSuccessedRoutes} from  '../router/router'
import router from '../router/index'
// import { useRouter } from "vue-router";

import _ from 'lodash';

export const useLoginInfoStore = defineStore('useLoginInfoStore', () => {
    
    let state = reactive({
        loginInfo: {},
        routes:[]
    })
    /**
     * 设置登陆参数
     * @param {*} data 
     */
    function setLoginData(data) {
        if(data?.token){
            setToken(data.token)
            state.loginInfo = data 
        }else{
            state.loginInfo = {}
        } 
    }

    /**
     *   添加动态路由
     */
    function setAddRoutes(){
        LoginSuccessedRoutes.forEach((item,index,arr)=>{
            router.addRoute(item)
            state.routes.push(item)
        })
        
    }

     
    const  LoginData = computed(()=>{  
        return state.loginInfo
    })
    const Routes = computed(()=>{
        return state.routes
    })

    return {
        setLoginData,
        setAddRoutes,
        Routes,
        LoginData,
        ...toRefs(state)
    }
})