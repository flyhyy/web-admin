<!-- head -->
<template>
  <el-row class="height--100-pr row">
    <el-col :span="12"> 
        <span class="text-font-size--large text--style-color__primary">
            Mr Huang
        </span>
    </el-col>
    <el-col :span="12" class="text-align-right">
      <el-button circle type="danger" plain size="small" @click="onSignOut">
        <el-icon><SwitchButton /></el-icon>
      </el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import { removeToken } from '../../utils/auth';
import { useRouter } from 'vue-router';
const  router = useRouter()
// 服务端如何注销 token ?
const onSignOut = ()=>{
  removeToken()

  router.replace('/login')


}

</script>

<style scoped>
.row {
  align-items: center;
}

</style>
