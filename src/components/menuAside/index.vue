<template>
  <el-menu
    :default-active="defaultActive"
    class="height--100-pr"
    router
  
  >
    <el-menu-item :index="item.path" v-for="item in Routes" :key="item.name">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span class="text-font-size--medium">{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const defaultActive = ref("");

const Routes = computed(() => {
  return router.getRoutes();
});

defaultActive.value = route.path;
</script>

<style>
.menu {
  background-color: var();
}
</style>
