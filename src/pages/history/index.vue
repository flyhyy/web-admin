<!-- 记录 -->
<template>
    <el-form  :model="formData" label-width="60px">
        <el-form-item prop="date"  label="时间点">
            <el-date-picker v-model="formData.date"></el-date-picker>
        </el-form-item>
        <el-form-item prop="memo" label="说明">
            <el-input v-model="formData.memo"  rows="4" type="textarea"></el-input>
        </el-form-item>
        <el-form-item prop="imgs" label="图片">
            <Upload v-model:list="formData.imgs"></Upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">
             提交
            </el-button>
        </el-form-item>
    </el-form>

</template>
<script setup>
import Upload from '../../components/upload/index.vue'
import { reactive } from 'vue';

const emits =  defineEmits(['submit'])
let arr =  []

let formData = reactive({
    date:'',
    memo:'',
    imgs:''
})
const onSubmit = function(){  
    console.log(formData,'onSubmit');
}

</script>