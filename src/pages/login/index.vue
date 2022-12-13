<template>
  <div class="login-wrapper height--100-pr">
    <div class="form-wrapper">
      <el-form :model="formData" :rules="rules" ref="formRef">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formData.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="text-align-right">
        <el-button @click="onLogin" :loading="loadingLoginButton">
          登陆
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useLoginInfoStore } from "../../stores/login";
import { login } from './api'
import md5 from 'js-md5'
const router = useRouter();
const UseLoginInfoStore = useLoginInfoStore();
let loadingLoginButton = ref(false);

let rules = {
  account: [{ required: true, message: "账号不能为空" }],
  password: [{ required: true, message: "密码不能为空" }],
};
let formRef = ref(null);

let formData = reactive({
  account: "",
  password: "",
});
const onLogin = () => {
  console.log(formRef);

  formRef.value.validate(async (valid) => {
    loadingLoginButton.value = true;
    if (valid) {
      let data = await login({
        account: formData.account,
        password: md5(formData.password)
      })
      loadingLoginButton.value = false;
      router.replace({
        path: '/index'
      })
      UseLoginInfoStore.setLoginData(data)
    
    } else {
      loadingLoginButton.value = false;

    }
  });
};
</script>
<style scoped>
.form-wrapper {
  width: 20em;
  position: absolute;
  top: 50%;
  left: 45%;
}

.login-wrapper {
  position: relative;
}
</style>
