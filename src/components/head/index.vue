<!-- head -->
<template>
  <el-row class="height--100-pr row">
    <el-col :span="12"> 
        <span class="text-font-size--large text--style-color__primary">
            Mr Huang
        </span>
    </el-col>
    <el-col :span="12" class="text-align-right">
      <el-button circle type="danger" plain size="small">
        <el-icon><SwitchButton /></el-icon>
      </el-button>
    </el-col>
  </el-row>
</template>

<style scoped>
.row {
  align-items: center;
}

</style>
