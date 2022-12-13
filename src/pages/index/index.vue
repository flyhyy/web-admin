<template>
    <!-- https://www.npmjs.com/package/mavon-editor/v/next -->
    <mavon-editor ref="refMavon" v-model="formData.markedDownValue" @imgAdd="onMavonImgAdd" :shortCut="false" class="editor" />

    <el-row class="row">
        <el-col :span="24" class="text-align-right">
            <el-button @click="onSubmit" type="primary">
                提交
            </el-button>
        </el-col>
    </el-row>

    <el-dialog v-model="visible" width="38%" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-form :rules="rules" :model="formData" ref="formRef">
            <el-form-item label="标题" prop="title">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="首图" prop="headImg">
                <el-upload class="avatar-uploader" 
                    action="#"
                    :http-request="elUploadHttpRequest"
                    :show-file-list="false"
                   >
                    <img v-if="formData.headImg" :src="formData.headImg" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="onCancel">
                取消
            </el-button>
            <el-button @click="onConfirm">
                确认
            </el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue';
import {ElMessage} from 'element-plus';
import {uploadFile,submit} from './api'
let visible = ref(false)
let formRef = ref(null)
let refMavon  = ref(null)
let formData = reactive({
    markedDownValue: '',
    title: '',
    headImg: ''
})
const rules = {
    title: [{
        required: true,
        message: '请输入标题',
    }],
    headImg: [{
        required: true,
        message: '请上传图片'
    }]
}
// https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F908fa0ec08fa513d269700e4822742fbb2fb431673fc&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673407810&t=4040fd4b5d42a5bf22e8993492eeaab0
// 监听 mavon-editor 组件 图片添加事件 
async function onMavonImgAdd(pos,file){
    let val =   await uploadFile(file)
    console.log(val,'val');
    refMavon.value.$img2Url(pos,val.url)
 
}
async function elUploadHttpRequest(UploadRequestOptions){
     console.log(UploadRequestOptions,'UploadRequestOptions');
    let {file} = UploadRequestOptions
    
  let data =  await uploadFile(file)
  formData.headImg  =data.url
    
}

function onCancel() {
    visible.value = false

}
function onSubmit() { 
    if (formData.markedDownValue.trim() === '') {    
        ElMessage({
            message:'内容不能为空',
            type:'error'
        })
        return
    }
    visible.value = true
}

function onConfirm() {
    formRef.value.validate(async(valid) => { 
        if(valid){
            const obj ={
                content:formData.markedDownValue,
                title:formData.title,
                memo:'',
                head_img_path:formData.headImg
            }
            await submit(obj)
            ElMessage({
                type:'success',
                message:'提交成功!'
            })
            visible.value = false
        }
        
    })
}

</script>
<style>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}
</style>

<style scoped>
.row {
    margin-top: 2em;
}

.editor {
    height: 45em;
    max-height: 45em;
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>