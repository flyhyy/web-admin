<template>
  <el-menu :default-active="defaultActive" class="height--100-pr" router>

    <template v-for="item in Routes"> 
      <!-- 判断是否有子目录 -->
      <template v-if="item.children.length">
        <el-sub-menu :index="item.path">
          <template #title>
            <span class="text-font-size--medium">{{ item.meta.title }}</span>
          </template>
          <el-icon v-if="item.meta.icon">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template v-if="item.children.length">
            <el-menu-item v-for="subItem in  item.children " :index="item.path+'/'+subItem.path" :key="subItem.name">
              <el-icon v-if="subItem.meta.icon">
                <component :is="subItem.meta.icon"></component>
              </el-icon>
              <span class="text-font-size--medium">{{ subItem.meta.title }}</span>
  
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
      <template v-else> 
        <el-menu-item :index="item.path" :key="item.name">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span class="text-font-size--medium">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    

    </template>

  </el-menu>
</template>

<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLoginInfoStore } from "../../stores/login";
const route = useRoute();

const router = useRouter();
const defaultActive = ref("");

const Routes = useLoginInfoStore().Routes

onMounted(() => {
  defaultActive.value = router.currentRoute.value.path
})

watch(route, (nv, ov) => {
  defaultActive.value = nv.path
}, {
  deep: true
})

</script>

<style>
.menu {
  background-color: var();
}
</style>
