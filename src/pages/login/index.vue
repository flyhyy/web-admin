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
import { LoginInRoutes } from "../../router/router.js";
import { useLoginInfoStore } from "../../stores/login";

const UseRouter = useRouter();

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
  formRef.value.validate((valid) => {
    console.log(valid);
    loadingLoginButton.value = true;

    setTimeout(() => {
      loadingLoginButton.value = false;
      //  添加路由配置
     

       
      UseRouter.replace({name:'index'})

      console.log(UseRouter.getRoutes());
      UseLoginInfoStore.setLoginData({
        token: "token",
        userId: 1,
        loginTime: "2022-11-17 12:00:30",
        userName: "MrHuang",
        avatar: "",
      })
    }, 1000);
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
