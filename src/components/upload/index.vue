<!-- 文件上传 -->
<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    :before-remove="onRemove"
    v-model:file-list="fileList"
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
import { findIndex } from "lodash";
import { reactive, ref, watch } from "vue";
let props = defineProps({
  list: {
    default: () => [],
  },
});
let emits = defineEmits(["update:list"]);
let fileList = ref([]);

const onRemove = function (file, files) {
  // console.log(file,files);
};

watch(
  fileList,
  (nv, ov) => {
    console.log(nv, ov)
    let  files = nv.map((item)=> item.raw)
    emits("update:list", files);
  },
  {
    deep: true,
  }
);
</script>
