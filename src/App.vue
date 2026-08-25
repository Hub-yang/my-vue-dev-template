<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <main p="x-4 y-10" text="center gray-700 dark:gray-200" h-100vh w-100vw font-sans>
      <router-view v-slot="{ Component }">
        <keep-alive :include="[]">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <BaseFooter />
    </main>
  </el-config-provider>
</template>
