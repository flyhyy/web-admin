

<template>
    <el-container class="container">
        <el-header class="border-bottom__solid">
          <Head></Head>
        </el-header>
        <el-container>
          <el-aside width="200px">
            
            <AsideMenu></AsideMenu>
          </el-aside>
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
            <el-footer class="border-top__solid">
              
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
  
  </template>
  <script setup>
  
  import { RouterLink, RouterView } from 'vue-router'
  import AsideMenu from '../components/menuAside/index.vue'
  import Head from '../components/head/index.vue'
  </script>
  
  <style scoped>
  .container{
    height: 100%;
  }
  </style>
  