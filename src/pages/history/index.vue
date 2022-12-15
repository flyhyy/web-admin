<!-- 记录 -->
<template>
    <el-form :model="formData" ref="refForm" :rules="rules" label-width="80px">
        <el-form-item prop="date" label="时间点">
            <el-date-picker v-model="formData.date"></el-date-picker>
        </el-form-item>
        <el-form-item prop="memo" label="说明">
            <el-input v-model="formData.memo" rows="4" type="textarea"></el-input>
        </el-form-item>
        <el-form-item prop="imgs" label="图片">
            <Upload v-model:fileList="formData.imgs"></Upload>
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
import { toString } from 'lodash';
import { reactive, ref } from 'vue';
import { createHistory, uploadFiles } from './api'
import { ElMessage } from 'element-plus';
const refForm = ref(null)
const emits = defineEmits(['submit'])
let arr = []

const rules = {
    date: [{ required: true, message: '请选择时间点' }],
    memo: [{ required: true, message: '请填写说明' }],
    imgs: [{
        required: true, validator: (rule, val, callback) => {
            if (val instanceof Array && val.length) {
                callback()
            } else {
                callback(new Error('请上传图片'))
            }
        }
    }]
}

let formData = reactive({
    date: '',
    memo: '',
    imgs: []
})
const onSubmit = function () {
    console.log(formData, 'onSubmit');
    refForm.value.validate(async (valid) => {
        if (valid) {
            let data = await uploadFiles(formData.imgs)
            let params = {
                date: formData.date,
                memo: formData.memo,
                img_paths: toString(data?.url)
            }
            await createHistory(params) 
            ElMessage({
                type:'success',
                message:'提交成功'
            })
            
            refForm.value.resetFields()
            console.log(`[打印] ~ refForm`, refForm)
            
        }
    })

}

</script>