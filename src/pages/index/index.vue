<template>
    <!-- https://www.npmjs.com/package/mavon-editor/v/next -->
    <mavon-editor v-model="formData.markedDownValue" :shortCut="false" class="editor" />

    <el-row class="row">
        <el-col :span="24" class="text-align-right">
            <el-button @click="onSubmit" type="primary"  >
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
                <el-upload class="avatar-uploader" :auto-upload="false"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
                    :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
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
let visible = ref(false)
let formRef = ref(null)
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

function onCancel() {
    visible.value = false

}
function onSubmit() {
    visible.value = true
}

function onConfirm() {
    formRef.value.validate((valid) => {
        console.log(formData)
        console.log(valid, 'vallid')
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
.row{
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