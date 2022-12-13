import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { setToken } from "../utils/auth";
import _ from 'lodash';

export const useLoginInfoStore = defineStore('useLoginInfoStore', () => {
    
    let state = reactive({
        loginInfo: {}
    })

    function setLoginData(data) {
        if(data?.token){
            setToken(data.token)
            state.loginInfo = data 
        }else{
            state.loginInfo = {}
        } 
    } 
    const  LoginData = computed(()=>{  
        return state.loginInfo
    })

    return {
        setLoginData,
        LoginData,
        ...toRefs(state)
    }
})