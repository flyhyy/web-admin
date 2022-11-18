import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import _ from 'lodash';
import  router, {addRouter} from '../router/index'

export const useLoginInfoStore = defineStore('useLoginInfoStore', () => {
    
    let state = reactive({
        loginInfo: {}
    })

    function setLoginData(data) {
        if(data?.token){
            state.loginInfo = data
            addRouter()
            sessionStorage.setItem('loginInfo',JSON.stringify(data))
        }else {
            let storageLoginInfo =  JSON.parse(sessionStorage.getItem('loginInfo'))
            if(storageLoginInfo?.token){
                setLoginData(storageLoginInfo)
            }else{
                setLoginData({})
            }
        }
    }
    
    const  LoginData = computed(()=>{ 
        return     state.loginInfo 
    })

    return {
        setLoginData,
        LoginData,
        ...toRefs(state)
    }
})