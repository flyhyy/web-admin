<!-- 文件上传 -->
<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :auto-upload="false" 
    v-model:file-list="FileList"
    :on-change="onChange"
  >
    <el-icon><Plus /></el-icon>

    <!-- <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon>
              <Delete />
            </el-icon>
          </span>
        </span>
      </div>
    </template> -->
  </el-upload>
</template>

<script setup>
import { findIndex, set } from "lodash";
import { reactive, ref, watch,computed } from "vue";
const props = defineProps({
  fileList:{
    default:()=>[]
  }, 
});
const emits = defineEmits(["update:fileList",'update:modelValue']); 

const FileList = computed({
  get(){
    return props.fileList
  },
  set(value){
    
    emits('update:fileList',value)
  }
})

const onChange = (file,files)=>{
  // emits('update:modelValue',files)

}

 
</script>
