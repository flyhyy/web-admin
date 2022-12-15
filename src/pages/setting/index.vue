<template>
    <el-form :model="formData" :rules="rules"  ref="refForm" label-position="top">
        <el-form-item  prop="password"  label="设置查看密码:">
            <el-input v-model="formData.password"></el-input>
        </el-form-item>
    </el-form>
    <el-button @click="onSubmit">提交</el-button>

</template>
<script setup>
import { reactive,ref } from 'vue';
import {setPassword} from './api'
import {useLoginInfoStore}  from '../../stores/login'
import md5 from 'js-md5'
let refForm  = ref()
const rules ={
    password:[{required:true,message:'请填写密码'}]
}

let formData = reactive({
    password:''
})

const onSubmit = ()=>{

    refForm.value.validate(async(valid)=>{
        if(valid){
            await setPassword({
                user_id:useLoginInfoStore().LoginData?.id || '',
                password:md5(formData.password)
            })
            refForm.value.resetFields()
        }
    })
}



</script>